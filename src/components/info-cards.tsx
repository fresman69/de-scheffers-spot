import { MapPin } from "lucide-react";
import { MapConsent } from "./map-consent";
import { cafeInfo } from "../lib/menu/cafe";

/** Openingstijden in kaartvorm — stippellijn-leaders zoals op de kaart in het café. */
export function HoursCard({
  hours = cafeInfo.openingHours.map((h) => [h.day, h.hours] as const),
  className = "",
}: {
  hours?: readonly (readonly [string, string])[];
  className?: string;
}) {
  return (
    <div className={`card-cozy h-full bg-wine p-8 text-paper ring-1 ring-wine-dim md:p-10 ${className}`}>
      <p className="mb-2 font-script type-eyebrow text-mustard">Wanneer</p>
      <h2 className="mb-8 type-h2 text-paper">Openingstijden</h2>
      <dl className="space-y-3.5">
        {hours.map(([day, time]) => (
          <div key={day} className="flex items-end gap-3">
            <dt className="font-display-condensed text-sm tracking-widest sm:text-base">{day}</dt>
            <span aria-hidden className="mb-[3px] h-[6px] flex-1 leader-dots text-paper/40" />
            <dd className="font-display-condensed text-sm tracking-widest text-mustard sm:text-base">
              {time}
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-8 text-sm leading-relaxed text-paper/85">
        Loop gerust binnen. We werken niet met reserveringen — er staat een plek voor je klaar als
        die vrij is.
      </p>
    </div>
  );
}

/** Adres, kaart en routelink. */
export function LocationCard({ className = "" }: { className?: string }) {
  const { street, postalCode, city } = cafeInfo.address;
  const query = encodeURIComponent(`${street}, ${postalCode} ${city}`);

  return (
    <div className={`h-full ${className}`}>
      <div className="mb-5 flex items-center gap-3">
        <MapPin size={18} className="text-brass" aria-hidden />
        <span className="type-label text-brass">Vind ons</span>
      </div>
      <h2 className="mb-6 type-h2 text-paper">Hartje Dordrecht</h2>
      <div className="aspect-[16/10] overflow-hidden rounded-sm ring-1 ring-border">
        <MapConsent />
      </div>
      <p className="mt-6 text-sm text-paper/80">
        {street}, {postalCode} {city} — midden in de historische binnenstad.
      </p>
      <a
        href={`https://www.google.com/maps/dir/?api=1&destination=${query}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-block border-b border-brass/40 pb-1 text-sm font-medium text-brass transition-colors hover:border-brass"
      >
        Plan je route →
      </a>
    </div>
  );
}
