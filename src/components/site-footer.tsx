import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-oak py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:gap-12">
          <div>
            <span className="mb-1 block font-script text-5xl leading-none text-brass">Stads</span>
            <span className="mb-4 block font-display-condensed text-2xl tracking-[0.25em] text-paper">CAFÉ</span>
            <p className="max-w-[32ch] text-sm leading-relaxed text-paper/75">
              Een gezellig bruin café in het hart van Dordrecht — kom gerust langs.
            </p>
            <p className="mt-4 max-w-[30ch] text-sm leading-relaxed text-paper/75">
              Scheffersplein 12
              <br />
              3311 PX Dordrecht
            </p>
          </div>
          <div className="grid w-full grid-cols-1 gap-8 sm:w-auto sm:grid-cols-3 sm:gap-16">
            <div>
              <h2 className="mb-6 font-script text-2xl leading-none text-brass">Bezoek</h2>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link to="/over-ons" className="hover:text-brass">Over ons</Link></li>
                <li><Link to="/bierkaart" className="hover:text-brass">Bierkaart</Link></li>
                <li><Link to="/borrelkaart" className="hover:text-brass">Borrelkaart</Link></li>
                <li><Link to="/galerij" className="hover:text-brass">Galerij</Link></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 font-script text-2xl leading-none text-brass">Contact</h2>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="tel:+31786134242" className="hover:text-brass">078 613 4242</a></li>
                <li><a href="mailto:info@rijke-zn.nl" className="hover:text-brass">info@rijke-zn.nl</a></li>
                <li><Link to="/contact" className="hover:text-brass">Route &amp; kaart</Link></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 font-script text-2xl leading-none text-brass">Volg ons</h2>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="https://www.instagram.com/stadscafe_rijke/" target="_blank" rel="noopener noreferrer" className="hover:text-brass">Instagram</a></li>
                <li><a href="tel:+31786134242" className="hover:text-brass">Bel ons</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-border pt-8 text-[11px] uppercase tracking-widest text-muted-foreground sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Stadscafé</span>
          <span>Dordrecht, Nederland</span>
        </div>
      </div>
    </footer>
  );
}
