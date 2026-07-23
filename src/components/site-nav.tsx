import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/over-ons", label: "Over ons" },
  { to: "/bierkaart", label: "Bierkaart" },
  { to: "/dranken", label: "Dranken" },
  { to: "/borrelkaart", label: "Borrelkaart" },
  { to: "/evenementen", label: "Evenementen" },
  { to: "/galerij", label: "Galerij" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-oak/95 backdrop-blur-md border-b border-border" : "bg-oak/40 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="font-display text-2xl tracking-tight text-brass">
          Rijke &amp; Zn.
        </Link>
        <div className="hidden items-center gap-7 text-[13px] font-medium uppercase tracking-[0.14em] text-muted-foreground lg:flex">
          {links.slice(1, -1).map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="transition-colors hover:text-brass"
              activeProps={{ className: "text-brass" }}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Link
            to="/reserveren"
            className="hidden rounded-sm px-4 py-2 text-sm font-medium text-brass ring-1 ring-brass transition-colors hover:bg-brass/10 sm:inline-flex"
          >
            Reserveren
          </Link>
          <button
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
            className="rounded-sm p-2 text-paper ring-1 ring-border transition-colors hover:text-brass lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-oak lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 sm:px-6 py-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-2 text-sm uppercase tracking-widest text-muted-foreground transition-colors hover:text-brass"
                activeProps={{ className: "text-brass" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/reserveren"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center rounded-sm px-4 py-2 text-sm font-medium text-brass ring-1 ring-brass"
            >
              Reserveren
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
