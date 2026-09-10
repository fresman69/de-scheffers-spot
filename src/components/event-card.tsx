import type { LucideIcon } from "lucide-react";
import { CalendarDays } from "lucide-react";

export type CafeEvent = {
  title: string;
  /** Korte omschrijving van het soort avond. */
  body: string;
  icon?: LucideIcon;
  /** Datum/tijd; leeg laten zolang er nog niets gepland staat. */
  when?: string;
};

/**
 * Herbruikbare evenementkaart. Zolang er geen datum bekend is tonen we
 * bewust "Datum volgt" — we verzinnen geen agenda.
 */
export function EventCard({ event }: { event: CafeEvent }) {
  const Icon = event.icon ?? CalendarDays;
  return (
    <article className="card-cozy hover-lift flex h-full flex-col bg-oak-light p-7 ring-1 ring-border">
      <Icon size={26} strokeWidth={1.4} className="mb-5 text-brass" aria-hidden />
      <h3 className="mb-2 type-h3 text-paper">{event.title}</h3>
      <p className="text-sm leading-relaxed text-paper/80">{event.body}</p>
      <p className="mt-6 type-label text-brass/80">{event.when ?? "Datum volgt"}</p>
    </article>
  );
}
