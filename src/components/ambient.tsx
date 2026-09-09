import type { CSSProperties } from "react";

/**
 * Volledig in code gemaakte, abstracte sfeerbeelden.
 * Geen foto's, geen externe media: alleen CSS/SVG-lagen van amberkleurig licht,
 * koper, schuim, bubbels en glasreflecties. Puur decoratief → aria-hidden.
 * Bij prefers-reduced-motion staat alles stil (globale regel in styles.css).
 */

export type AmbientVariant =
  | "tap"
  | "glass"
  | "bubbles"
  | "copper"
  | "foam"
  | "light"
  | "amber"
  | "wine";

type Palette = { from: string; to: string; accent: string };

const palettes: Record<AmbientVariant, Palette> = {
  tap: { from: "var(--brass)", to: "var(--oak)", accent: "var(--mustard)" },
  glass: { from: "var(--mustard)", to: "var(--oak-light)", accent: "var(--brass)" },
  bubbles: { from: "var(--brass)", to: "var(--oak-light)", accent: "var(--paper, #f5efe3)" },
  copper: { from: "var(--brass-dim)", to: "var(--oak)", accent: "var(--brass)" },
  foam: { from: "var(--mustard-dim)", to: "var(--oak-light)", accent: "var(--brass)" },
  light: { from: "var(--mustard)", to: "var(--oak)", accent: "var(--brass)" },
  amber: { from: "var(--brass)", to: "var(--wine-dim)", accent: "var(--mustard)" },
  wine: { from: "var(--wine)", to: "var(--oak)", accent: "var(--brass)" },
};

/** Deterministische bubbels, zodat server- en clientrender identiek zijn. */
function bubbles(seed: number, count: number) {
  const out: { left: number; size: number; delay: number; duration: number; opacity: number }[] = [];
  let n = seed * 9301 + 49297;
  const rnd = () => {
    n = (n * 9301 + 49297) % 233280;
    return n / 233280;
  };
  for (let i = 0; i < count; i++) {
    out.push({
      left: 6 + rnd() * 88,
      size: 4 + rnd() * 12,
      delay: rnd() * 8,
      duration: 7 + rnd() * 9,
      opacity: 0.18 + rnd() * 0.35,
    });
  }
  return out;
}

export function AmbientPanel({
  variant = "amber",
  aspect,
  className = "",
  style,
  seed = 1,
  bubbleCount = 9,
  children,
}: {
  variant?: AmbientVariant;
  aspect?: string;
  className?: string;
  style?: CSSProperties;
  seed?: number;
  bubbleCount?: number;
  children?: React.ReactNode;
}) {
  const p = palettes[variant];

  return (
    <div
      className={`relative isolate h-full w-full overflow-hidden rounded-sm ${className}`}
      style={{ aspectRatio: aspect, backgroundColor: "var(--oak)", ...style }}
    >
      {/* Basisgloed */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: `radial-gradient(120% 90% at 30% 15%, color-mix(in oklch, ${p.from} 42%, transparent) 0%, transparent 62%),
                       radial-gradient(100% 80% at 80% 90%, color-mix(in oklch, ${p.to} 70%, transparent) 0%, transparent 65%),
                       linear-gradient(160deg, color-mix(in oklch, ${p.from} 16%, transparent), transparent 70%)`,
        }}
      />
      {/* Zwevende lichtvlek */}
      <div
        aria-hidden
        className="absolute -left-10 top-1/4 h-[75%] w-[75%] rounded-full mix-blend-screen blur-3xl"
        style={{
          background: `radial-gradient(circle, color-mix(in oklch, ${p.accent} 70%, transparent) 0%, transparent 70%)`,
          animation: `ambient-drift ${18 + seed}s var(--ease-smooth) infinite alternate`,
        }}
      />
      {/* Bubbels */}
      <div aria-hidden className="absolute inset-0">
        {bubbles(seed, bubbleCount).map((b, i) => (
          <span
            key={i}
            className="absolute bottom-[-14%] rounded-full"
            style={{
              left: `${b.left}%`,
              width: b.size,
              height: b.size,
              opacity: b.opacity,
              border: `1px solid color-mix(in oklch, ${p.accent} 70%, transparent)`,
              background: `color-mix(in oklch, ${p.accent} 22%, transparent)`,
              animation: `ambient-rise ${b.duration}s linear ${b.delay}s infinite`,
            }}
          />
        ))}
      </div>
      {/* Glasreflectie */}
      <div
        aria-hidden
        className="absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12"
        style={{
          background:
            "linear-gradient(90deg, transparent, color-mix(in oklch, white 18%, transparent), transparent)",
          animation: `ambient-sheen ${11 + (seed % 5)}s var(--ease-smooth) infinite`,
        }}
      />
      {/* Schuimkraag onderaan */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[18%]"
        style={{
          background: `linear-gradient(to top, color-mix(in oklch, ${p.accent} 22%, transparent), transparent)`,
          animation: `ambient-foam ${9 + seed}s var(--ease-smooth) infinite alternate`,
        }}
      />
      {/* Grafische koperlijnen — maakt het beeld duidelijk illustratief */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.28]"
        viewBox="0 0 200 200"
        preserveAspectRatio="none"
      >
        {[26, 62, 100, 138, 174].map((x, i) => (
          <line
            key={x}
            x1={x}
            y1="0"
            x2={x + 10}
            y2="200"
            stroke={p.accent}
            strokeWidth={i % 2 === 0 ? 0.6 : 0.3}
            vectorEffect="non-scaling-stroke"
          />
        ))}
        <ellipse cx="100" cy="34" rx="72" ry="9" fill="none" stroke={p.accent} strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
        <ellipse cx="100" cy="168" rx="60" ry="7" fill="none" stroke={p.accent} strokeWidth="0.4" vectorEffect="non-scaling-stroke" />
      </svg>
      {/* Fijne koperen contour */}
      <div aria-hidden className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-brass/15" />
      {children}
    </div>
  );
}

/** Grote, rustige achtergrond voor de hero: amber gloed, koperlijnen en bubbels. */
export function AmbientHero({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`absolute inset-0 overflow-hidden bg-oak ${className}`}>
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(90% 70% at 50% 10%, color-mix(in oklch, var(--brass) 45%, transparent) 0%, transparent 62%),
                       radial-gradient(70% 60% at 15% 85%, color-mix(in oklch, var(--wine) 28%, transparent) 0%, transparent 65%),
                       radial-gradient(70% 60% at 85% 80%, color-mix(in oklch, var(--mustard) 18%, transparent) 0%, transparent 65%)`,
        }}
      />
      <div
        className="absolute left-1/2 top-1/3 h-[85vmin] w-[85vmin] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-80 mix-blend-screen blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in oklch, var(--brass) 85%, transparent) 0%, color-mix(in oklch, var(--brass) 25%, transparent) 45%, transparent 72%)",
          animation: "ambient-breathe 14s var(--ease-smooth) infinite alternate",
        }}
      />
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.22]"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
      >
        {[0, 1, 2].map((i) => (
          <path
            key={i}
            d={`M -100 ${240 + i * 170} C 250 ${180 + i * 170}, 600 ${320 + i * 170}, 1300 ${220 + i * 170}`}
            fill="none"
            stroke="var(--brass)"
            strokeWidth={i === 1 ? 1.4 : 0.8}
            style={{
              animation: `ambient-sway ${16 + i * 5}s var(--ease-smooth) infinite alternate`,
              transformOrigin: "center",
            }}
          />
        ))}
      </svg>
      <div className="absolute inset-0">
        {bubbles(7, 14).map((b, i) => (
          <span
            key={i}
            className="absolute bottom-[-10%] rounded-full"
            style={{
              left: `${b.left}%`,
              width: b.size,
              height: b.size,
              opacity: b.opacity * 0.8,
              border: "1px solid color-mix(in oklch, var(--brass) 60%, transparent)",
              animation: `ambient-rise ${b.duration + 6}s linear ${b.delay}s infinite`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

/** Compacte, staande sfeermarkering — gebruikt naast bier- en productitems. */
export function AmbientMark({
  variant = "amber",
  className = "",
  seed = 2,
}: {
  variant?: AmbientVariant;
  className?: string;
  seed?: number;
}) {
  const p = palettes[variant];
  return (
    <div
      aria-hidden
      className={`relative overflow-hidden rounded-sm ring-1 ring-brass/15 ${className}`}
      style={{ backgroundColor: "var(--oak)" }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, color-mix(in oklch, ${p.accent} 30%, transparent) 0%, color-mix(in oklch, ${p.from} 28%, transparent) 45%, color-mix(in oklch, ${p.to} 60%, transparent) 100%)`,
        }}
      />
      <div
        className="absolute inset-x-[18%] top-[8%] h-[10%] rounded-full"
        style={{
          background: `color-mix(in oklch, ${p.accent} 45%, transparent)`,
          animation: `ambient-foam ${8 + seed}s var(--ease-smooth) infinite alternate`,
        }}
      />
      {bubbles(seed, 5).map((b, i) => (
        <span
          key={i}
          className="absolute bottom-[-10%] rounded-full"
          style={{
            left: `${b.left}%`,
            width: Math.max(3, b.size * 0.5),
            height: Math.max(3, b.size * 0.5),
            opacity: b.opacity,
            border: `1px solid color-mix(in oklch, ${p.accent} 70%, transparent)`,
            animation: `ambient-rise ${b.duration}s linear ${b.delay}s infinite`,
          }}
        />
      ))}
      <div
        className="absolute inset-y-0 left-[22%] w-[6%]"
        style={{
          background: "linear-gradient(90deg, transparent, color-mix(in oklch, white 22%, transparent), transparent)",
        }}
      />
    </div>
  );
}
