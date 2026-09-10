import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/over-ons", label: "Over ons" },
  { to: "/bierkaart", label: "Bierkaart" },
  { to: "/dranken", label: "Dranken" },
  { to: "/borrelkaart", label: "Borrelkaart" },
  { to: "/galerij", label: "Kunst" },
  { to: "/sfeer", label: "Sfeer" },
  { to: "/evenementen", label: "Evenementen" },
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
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-oak/95 backdrop-blur-md border-b border-border" : "bg-oak/40 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link to="/" className="flex min-w-0 shrink items-baseline gap-1.5 truncate">
          <span className="font-script text-[1.7rem] leading-none text-brass sm:text-[2rem]">Stads</span>
          <span className="font-display-condensed text-lg tracking-[0.22em] text-paper sm:text-xl">CAFÉ</span>
        </Link>
        <div className="hidden items-center gap-7 text-[12px] font-medium uppercase tracking-[0.18em] text-paper/75 lg:flex">
          {links.slice(1).map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="border-b-2 border-transparent pb-1 transition-colors hover:border-brass/60 hover:text-brass"
              activeProps={{ className: "text-paper border-brass" }}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <button
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-sm text-paper ring-1 ring-border transition-colors hover:text-brass lg:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
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
          </div>
        </div>
      )}
    </nav>
  );
}
