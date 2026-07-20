import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteNav } from "../components/site-nav";
import { SiteFooter } from "../components/site-footer";

function NotFoundComponent() {
  return (
    <>
      <SiteNav />
      <main className="flex min-h-[70vh] items-center justify-center bg-oak px-6">
        <div className="max-w-md text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-brass">Foutmelding</p>
          <h1 className="mt-4 font-display text-6xl text-paper">404</h1>
          <h2 className="mt-4 font-display text-2xl text-paper">Pagina niet gevonden</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Deze pagina bestaat niet of is verplaatst.
          </p>
          <div className="mt-8">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-sm bg-brass px-6 py-3 text-sm font-medium text-oak transition-colors hover:bg-paper"
            >
              Terug naar home
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-oak px-6">
      <div className="max-w-md text-center">
        <h1 className="font-display text-3xl text-paper">Er ging iets mis</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Probeer de pagina te herladen of keer terug naar de home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-sm bg-brass px-5 py-2.5 text-sm font-medium text-oak hover:bg-paper"
          >
            Probeer opnieuw
          </button>
          <a href="/" className="rounded-sm border border-border px-5 py-2.5 text-sm text-paper hover:bg-oak-light">
            Terug naar home
          </a>
        </div>
      </div>
    </main>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Stadscafé Rijke & Zn. — Speciaalbier op het Scheffersplein Dordrecht" },
      {
        name: "description",
        content:
          "Dé ontmoetingsplek op het Scheffersplein. Speciaalbier, wijn, borrelhapjes en de gezellige sfeer van Dordrecht.",
      },
      { name: "author", content: "Stadscafé Rijke & Zn." },
      { name: "google-site-verification", content: "Ku2-ctAEbemhXWDqpPifgZQXgxgdPj5lXZcFxZkucdA" },
      { property: "og:title", content: "Stadscafé Rijke & Zn. — Speciaalbier op het Scheffersplein Dordrecht" },
      {
        property: "og:description",
        content:
          "Dé ontmoetingsplek op het Scheffersplein. Speciaalbier, wijn, borrelhapjes en de gezellige sfeer van Dordrecht.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Stadscafé Rijke & Zn." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Stadscafé Rijke & Zn. — Speciaalbier op het Scheffersplein Dordrecht" },
      { name: "twitter:description", content: "Dé ontmoetingsplek op het Scheffersplein. Speciaalbier, wijn, borrelhapjes en de gezellige sfeer van Dordrecht." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/864e9f43-d1ff-43f5-9042-fdaf210aadc0/id-preview-32eb416b--3030e587-0e2c-48b8-aabd-374eb7f88cb1.lovable.app-1784404156583.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/864e9f43-d1ff-43f5-9042-fdaf210aadc0/id-preview-32eb416b--3030e587-0e2c-48b8-aabd-374eb7f88cb1.lovable.app-1784404156583.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BarOrPub",
          name: "Stadscafé Rijke & Zn.",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Scheffersplein 12",
            postalCode: "3311 PX",
            addressLocality: "Dordrecht",
            addressCountry: "NL",
          },
          telephone: "+31-78-613-4242",
          servesCuisine: ["Speciaalbier", "Borrelhapjes", "Wijn"],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="nl">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <SiteNav />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
    </QueryClientProvider>
  );
}
