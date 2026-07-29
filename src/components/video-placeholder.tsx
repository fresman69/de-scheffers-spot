import { Film } from "lucide-react";
import type { CSSProperties, ReactNode } from "react";

type Props = {
  /** Optionele reeds beschikbare mp4/webm URL. Zonder src → nette placeholder. */
  src?: string;
  /** Optioneel poster-frame (eigen foto), tot de video geleverd wordt. */
  poster?: string;
  /** Aspect-ratio, standaard 16/9. Gebruik "21/9" voor hero. */
  aspect?: string;
  /** Extra klassen (bv. object-cover heights voor fullscreen hero). */
  className?: string;
  style?: CSSProperties;
  /** Duidelijk label wanneer de eigenaar de video nog moet aanleveren. */
  label?: string;
  /** Tonen als volledig fullscreen (absolute inset-0). */
  fullscreen?: boolean;
  /** Overlay kinderen (bv. hero-tekst). Alleen relevant bij fullscreen. */
  children?: ReactNode;
};

/**
 * Video-slot dat de eigenaar later 1-op-1 kan vervangen door een echte MP4/WEBM.
 * - Zonder src: rustige donkere placeholder met script-label, géén AI-video.
 * - Met src: autoplay, muted, loop, playsInline, subtiele donkere overlay.
 * - Volledig responsive; behoudt layout wanneer video geleverd wordt.
 */
export function VideoPlaceholder({
  src,
  poster,
  aspect = "16 / 9",
  className = "",
  style,
  label = "Cinematische video volgt",
  fullscreen = false,
  children,
}: Props) {
  const wrapCls = fullscreen
    ? `absolute inset-0 overflow-hidden ${className}`
    : `relative w-full overflow-hidden rounded-sm ring-1 ring-border bg-oak-light ${className}`;

  return (
    <div
      className={wrapCls}
      style={fullscreen ? style : { aspectRatio: aspect, ...style }}
      data-video-slot="true"
    >
      {src ? (
        <video
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
        />
      ) : (
        <div
          role="img"
          aria-label={label}
          className="flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-b from-oak-light via-oak to-oak p-6 text-center"
        >
          <Film size={26} strokeWidth={1.25} className="text-brass/70" />
          <span className="font-script text-3xl leading-none text-brass/90">{label}</span>
          <span className="max-w-[36ch] text-[11px] uppercase tracking-[0.25em] text-paper/60">
            De eigenaar levert deze video zelf aan — plek en formaat blijven identiek.
          </span>
        </div>
      )}
      {/* Subtiele donkere overlay voor leesbaarheid van hero-tekst. */}
      {fullscreen ? <div className="absolute inset-0 bg-gradient-to-b from-oak/70 via-oak/40 to-oak" /> : null}
      {children ? <div className="absolute inset-0">{children}</div> : null}
    </div>
  );
}
