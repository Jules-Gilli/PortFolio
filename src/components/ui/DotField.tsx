import { useEffect, useRef, memo } from 'react';

const TWO_PI = Math.PI * 2;

interface Dot {
  ax: number;
  ay: number;
  sx: number;
  sy: number;
  vx: number;
  vy: number;
}

interface DotFieldProps {
  dotRadius?: number;
  dotSpacing?: number;
  cursorRadius?: number;
  bulgeStrength?: number;
  fadeRadius?: number;
  gradientFrom?: string;
  gradientTo?: string;
  [key: string]: unknown;
}

const DotField = memo(({
  dotRadius = 1.5,
  dotSpacing = 18,
  cursorRadius = 200,
  bulgeStrength = 45,
  fadeRadius = 120,
  gradientFrom = 'rgba(168, 85, 247, 0.5)',
  gradientTo = 'rgba(236, 72, 153, 0.35)',
  ...rest
}: DotFieldProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const rafRef = useRef<number | null>(null);
  const sizeRef = useRef({ w: 0, h: 0 });
  const propsRef = useRef<Record<string, unknown>>({});
  propsRef.current = { dotRadius, dotSpacing, cursorRadius, bulgeStrength, fadeRadius, gradientFrom, gradientTo };
  const rebuildRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let resizeTimer: ReturnType<typeof setTimeout>;

    function resize() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(doResize, 100);
    }

    function doResize() {
      const rect = canvas!.parentElement!.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      canvas!.style.width = `${w}px`;
      canvas!.style.height = `${h}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      sizeRef.current = { w, h };

      buildDots(w, h);
    }

    function buildDots(w: number, h: number) {
      const p = propsRef.current;
      const step = (p.dotRadius as number) + (p.dotSpacing as number);
      const cols = Math.floor(w / step);
      const rows = Math.floor(h / step);
      const padX = (w % step) / 2;
      const padY = (h % step) / 2;
      const dots: Dot[] = new Array(rows * cols);
      let idx = 0;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const ax = padX + col * step + step / 2;
          const ay = padY + row * step + step / 2;
          dots[idx++] = { ax, ay, sx: ax, sy: ay, vx: 0, vy: 0 };
        }
      }
      dotsRef.current = dots;
    }

    function onMouseMove(e: MouseEvent) {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    }

    function onMouseLeave() {
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    }

    let cachedGrad: CanvasGradient | null = null;
    let cachedGradKey = '';
    let running = true;

    function tick() {
      const dots = dotsRef.current;
      const m = mouseRef.current;
      const { w, h } = sizeRef.current;
      const p = propsRef.current;
      const len = dots.length;

      ctx!.clearRect(0, 0, w, h);

      const cr = p.cursorRadius as number;
      const crSq = cr * cr;
      const rad = (p.dotRadius as number) / 2;
      const bulge = p.bulgeStrength as number;

      // Single batched path for ALL dots
      ctx!.beginPath();

      const mxLo = m.x - cr;
      const mxHi = m.x + cr;
      const myLo = m.y - cr;
      const myHi = m.y + cr;

      for (let i = 0; i < len; i++) {
        const d = dots[i];
        let drawX = d.ax;
        let drawY = d.ay;

        // Only do expensive math for dots near the cursor
        if (d.ax > mxLo && d.ax < mxHi && d.ay > myLo && d.ay < myHi) {
          const dx = m.x - d.ax;
          const dy = m.y - d.ay;
          const distSq = dx * dx + dy * dy;
          if (distSq < crSq) {
            const dist = Math.sqrt(distSq) || 0.0001;
            const tt = 1 - dist / cr;
            const push = tt * tt * bulge;
            const nx = dx / dist;
            const ny = dy / dist;
            d.sx += (d.ax - nx * push - d.sx) * 0.18;
            d.sy += (d.ay - ny * push - d.sy) * 0.18;
          } else {
            d.sx += (d.ax - d.sx) * 0.15;
            d.sy += (d.ay - d.sy) * 0.15;
          }
          drawX = d.sx;
          drawY = d.sy;
        } else if (d.sx !== d.ax || d.sy !== d.ay) {
          d.sx += (d.ax - d.sx) * 0.15;
          d.sy += (d.ay - d.sy) * 0.15;
          drawX = d.sx;
          drawY = d.sy;
        }

        ctx!.moveTo(drawX + rad, drawY);
        ctx!.arc(drawX, drawY, rad, 0, TWO_PI);
      }

      // Single fillStyle + fill for the entire grid
      const gradKey = `${w}x${h}|${p.gradientFrom}|${p.gradientTo}`;
      if (gradKey !== cachedGradKey) {
        const g = ctx!.createLinearGradient(0, 0, w, h);
        g.addColorStop(0, p.gradientFrom as string);
        g.addColorStop(1, p.gradientTo as string);
        cachedGrad = g;
        cachedGradKey = gradKey;
      }
      ctx!.fillStyle = cachedGrad!;
      ctx!.fill();

      // Punch a soft transparent hole around the cursor (single composite op)
      const fr = p.fadeRadius as number;
      if (m.x > -1000 && fr > 0) {
        ctx!.globalCompositeOperation = 'destination-out';
        const hole = ctx!.createRadialGradient(m.x, m.y, 0, m.x, m.y, fr);
        hole.addColorStop(0, 'rgba(0,0,0,1)');
        hole.addColorStop(1, 'rgba(0,0,0,0)');
        ctx!.fillStyle = hole;
        ctx!.fillRect(m.x - fr, m.y - fr, fr * 2, fr * 2);
        ctx!.globalCompositeOperation = 'source-over';
      }

      if (running) rafRef.current = requestAnimationFrame(tick);
    }

    doResize();
    window.addEventListener('resize', resize);

    const coarse = window.matchMedia('(pointer: coarse)').matches;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (coarse || prefersReduced) {
      // Touch devices have no cursor to react to (and reduced-motion users opted
      // out of animation): draw the dot grid once, statically, with no RAF loop.
      running = false;
      tick();
    } else {
      window.addEventListener('mousemove', onMouseMove, { passive: true });
      document.addEventListener('mouseleave', onMouseLeave);
      rafRef.current = requestAnimationFrame(tick);
    }

    rebuildRef.current = () => {
      const { w, h } = sizeRef.current;
      if (w > 0 && h > 0) buildDots(w, h);
    };

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    rebuildRef.current?.();
  }, [dotRadius, dotSpacing]);

  return (
    <div className="w-full h-full relative" {...rest}>
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
});

DotField.displayName = 'DotField';

export default DotField;
