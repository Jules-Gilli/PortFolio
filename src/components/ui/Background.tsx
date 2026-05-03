import DarkVeil from './DarkVeil';
import DotField from './DotField';

export function Background() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div className="absolute inset-0 opacity-60">
        <DarkVeil
          hueShift={300}
          speed={0.3}
          warpAmount={0.2}
          noiseIntensity={0.02}
          resolutionScale={0.85}
        />
      </div>
      <div
        className="absolute inset-0"
        style={{
          maskImage:
            'radial-gradient(ellipse 75% 75% at 50% 50%, black 35%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 75% 75% at 50% 50%, black 35%, transparent 100%)',
        }}
      >
        <DotField
          dotRadius={1.8}
          dotSpacing={18}
          cursorRadius={200}
          bulgeStrength={45}
          fadeRadius={120}
          gradientFrom="rgba(196, 181, 253, 0.95)"
          gradientTo="rgba(244, 114, 182, 0.85)"
        />
      </div>
      {/* Subtle dark overlay to ensure text readability */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(5,5,10,0.2) 0%, rgba(5,5,10,0.5) 100%)',
        }}
      />
    </div>
  );
}
