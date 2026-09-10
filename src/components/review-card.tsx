import { Star } from "lucide-react";

export type Review = {
  text: string;
  /** Bronlabel, bijvoorbeeld "Google-recensie". */
  src: string;
  /** Zet op true zolang er nog geen echte recensie is ingevuld. */
  placeholder?: boolean;
};

export function ReviewCard({ review }: { review: Review }) {
  if (review.placeholder) {
    return (
      <figure className="card-cozy h-full border border-dashed border-cream/25 bg-bordeaux-dim/60 p-8">
        <span className="type-label text-cream/60">Recensie — nog toe te voegen</span>
        <p className="mt-4 text-sm leading-relaxed text-cream/70">
          Hier komt een echte gastrecensie. Plaats hier de tekst en de bron.
        </p>
      </figure>
    );
  }

  return (
    <figure className="card-cozy hover-lift h-full bg-bordeaux-dim p-8 ring-1 ring-cream/15">
      <div className="mb-4 flex gap-1 text-mustard" aria-hidden>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
        ))}
      </div>
      <blockquote className="text-lg italic leading-snug text-cream">
        &ldquo;{review.text}&rdquo;
      </blockquote>
      <figcaption className="mt-6 type-label text-cream/70">{review.src}</figcaption>
    </figure>
  );
}
