import { useState } from "react";
import { MapPin } from "lucide-react";

const MAP_SRC =
  "https://www.openstreetmap.org/export/embed.html?bbox=4.6870%2C51.8130%2C4.6930%2C51.8160&layer=mapnik&marker=51.8145%2C4.6900";

const ROUTE_URL = "https://www.openstreetmap.org/?mlat=51.8145&mlon=4.6900#map=18/51.8145/4.6900";

/**
 * Privacyvriendelijke kaart: de externe kaartdienst wordt pas geladen
 * nadat de bezoeker daar expliciet op klikt.
 */
export function MapConsent({
  className = "",
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  const [loaded, setLoaded] = useState(false);
  const light = tone === "light";

  if (loaded) {
    return (
      <iframe
        title="Kaart Scheffersplein Dordrecht"
        src={MAP_SRC}
        className={`h-full w-full ${light ? "" : "grayscale-[0.3]"}`}
        loading="lazy"
        referrerPolicy="no-referrer"
      />
    );
  }

  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center gap-4 p-6 text-center ${
        light ? "bg-oak/5 text-oak" : "bg-oak-light text-paper"
      } ${className}`}
    >
      <MapPin size={22} className="text-brass" aria-hidden />
      <p className={`type-body ${light ? "text-oak/85" : "text-paper/85"}`}>
        Scheffersplein 12
        <br />
        3311 PX Dordrecht
      </p>
      <p className={`max-w-[38ch] text-xs leading-relaxed ${light ? "text-oak/65" : "text-paper/65"}`}>
        De kaart wordt geleverd door OpenStreetMap. Bij het laden wordt een externe dienst
        aangeroepen en wordt onder meer je IP-adres verwerkt.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => setLoaded(true)}
          className="rounded-sm bg-brass px-5 py-2.5 text-sm font-medium text-oak transition-colors hover:bg-paper"
        >
          Kaart laden
        </button>
        <a
          href={ROUTE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`rounded-sm border px-5 py-2.5 text-sm transition-colors ${
            light
              ? "border-oak/25 text-oak hover:bg-oak/5"
              : "border-border text-paper hover:bg-oak"
          }`}
        >
          Open route in OpenStreetMap
        </a>
      </div>
    </div>
  );
}
