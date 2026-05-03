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
      <div className="absolute inset-0 opacity-90">
        <DotField
          dotRadius={1.5}
          dotSpacing={18}
          cursorRadius={200}
          bulgeStrength={45}
          fadeRadius={120}
          gradientFrom="rgba(168, 85, 247, 0.5)"
          gradientTo="rgba(236, 72, 153, 0.35)"
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
