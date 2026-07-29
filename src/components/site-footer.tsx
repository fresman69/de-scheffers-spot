import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-oak py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:gap-12">
          <div>
            <span className="mb-1 block font-script text-4xl text-brass">Stadscafé</span>
            <span className="mb-4 block font-display-condensed text-2xl tracking-widest text-paper">Rijke &amp; Zn.</span>
            <p className="max-w-[30ch] text-sm leading-relaxed text-paper/75">
              Scheffersplein 12
              <br />
              3311 PX Dordrecht
            </p>
          </div>
          <div className="grid w-full grid-cols-1 gap-8 sm:w-auto sm:grid-cols-3 sm:gap-16">

            <div>
              <h4 className="mb-6 font-script text-2xl leading-none text-brass">Bezoek</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><Link to="/over-ons" className="hover:text-brass">Over ons</Link></li>
                <li><Link to="/galerij" className="hover:text-brass">Galerij</Link></li>
                
                <li><Link to="/reserveren" className="hover:text-brass">Reserveren</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-6 font-script text-2xl leading-none text-brass">Contact</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="tel:+31786134242" className="hover:text-brass">078 613 4242</a></li>
                <li><a href="mailto:info@rijke-zn.nl" className="hover:text-brass">info@rijke-zn.nl</a></li>
                <li><Link to="/contact" className="hover:text-brass">Route &amp; kaart</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-6 font-script text-2xl leading-none text-brass">Volg ons</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-brass">Instagram</a></li>
                <li><a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-brass">Facebook</a></li>
                <li><a href="https://untappd.com" target="_blank" rel="noreferrer" className="hover:text-brass">Untappd</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-border pt-8 text-[11px] uppercase tracking-widest text-muted-foreground sm:flex-row sm:items-center">
          <span>© {new Date().getFullYear()} Stadscafé Rijke &amp; Zn.</span>
          <span>Dordrecht, Nederland</span>
        </div>
      </div>
    </footer>
  );
}
