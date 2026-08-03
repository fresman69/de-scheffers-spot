import { createFileRoute, redirect } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

type OAuthClient = { name?: string; redirect_uri?: string; scope?: string };
type AuthorizationDetails = {
  client?: OAuthClient;
  redirect_url?: string;
  redirect_to?: string;
  scope?: string;
};
type OAuthResult = { data?: AuthorizationDetails | null; error?: { message: string } | null };
type OAuthApi = {
  getAuthorizationDetails: (id: string) => Promise<OAuthResult>;
  approveAuthorization: (id: string) => Promise<OAuthResult>;
  denyAuthorization: (id: string) => Promise<OAuthResult>;
};

function oauthApi(): OAuthApi {
  return (supabase.auth as unknown as { oauth: OAuthApi }).oauth;
}

export const Route = createFileRoute("/.lovable/oauth/consent")({
  ssr: false,
  validateSearch: (s: Record<string, unknown>) => ({
    authorization_id: typeof s.authorization_id === "string" ? s.authorization_id : "",
  }),
  head: () => ({
    meta: [
      { title: "App verbinden — StadsCafe" },
      { name: "description", content: "Geef een externe app toegang tot StadsCafe namens jouw account." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "App verbinden — StadsCafe" },
      { property: "og:description", content: "Geef een externe app toegang tot StadsCafe." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  beforeLoad: async ({ search, location }) => {
    if (!search.authorization_id) throw new Error("Missing authorization_id");
    const { data } = await supabase.auth.getSession();
    if (!data.session) {
      throw redirect({ to: "/login", search: { next: location.pathname + location.searchStr } });
    }
  },
  loader: async ({ location }) => {
    const authorizationId = new URLSearchParams(location.search).get("authorization_id")!;
    const { data, error } = await oauthApi().getAuthorizationDetails(authorizationId);
    if (error) throw new Error(error.message);
    const immediate = data?.redirect_url ?? data?.redirect_to;
    if (immediate && !data?.client) throw redirect({ href: immediate });
    return data ?? null;
  },
  component: Consent,
  errorComponent: ({ error }) => (
    <main className="flex min-h-[70svh] items-center justify-center bg-oak px-4">
      <p className="max-w-md text-center text-paper/85">
        Deze aanvraag kon niet worden geladen: {String((error as Error)?.message ?? error)}
      </p>
    </main>
  ),
});

function Consent() {
  const details = Route.useLoaderData();
  const { authorization_id } = Route.useSearch();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const clientName = details?.client?.name ?? "deze app";
  const scopes = (details?.scope ?? details?.client?.scope ?? "").split(" ").filter(Boolean);

  async function decide(approve: boolean) {
    setBusy(true);
    setError(null);
    const api = oauthApi();
    const { data, error } = approve
      ? await api.approveAuthorization(authorization_id)
      : await api.denyAuthorization(authorization_id);
    if (error) {
      setBusy(false);
      setError(error.message);
      return;
    }
    const target = data?.redirect_url ?? data?.redirect_to;
    if (!target) {
      setBusy(false);
      setError("Geen doorverwijzing ontvangen van de autorisatieserver.");
      return;
    }
    window.location.href = target;
  }

  return (
    <section className="flex min-h-[80svh] items-center justify-center bg-oak px-4 py-16 sm:px-6">
      <div className="w-full max-w-md rounded-sm border border-border bg-oak-light/40 p-6 sm:p-8">
        <p className="font-script text-4xl leading-none text-brass">Toegang</p>
        <h1 className="mt-3 font-display-condensed text-2xl tracking-wider text-paper">
          {clientName} verbinden met StadsCafe
        </h1>
        <p className="mt-4 text-sm text-paper/80">
          Hiermee mag {clientName} de StadsCafe-tools gebruiken namens jou, zolang je bent ingelogd.
        </p>
        {details?.client?.redirect_uri && (
          <p className="mt-3 break-all text-xs text-paper/60">
            Doorverwijzing: {details.client.redirect_uri}
          </p>
        )}
        {scopes.length > 0 && (
          <ul className="mt-4 space-y-1 text-sm text-paper/75">
            {scopes.map((s) => (
              <li key={s}>
                {s === "email" ? "Je e-mailadres delen" : s === "profile" ? "Je basisprofiel delen" : `Extra rechten: ${s}`}
              </li>
            ))}
          </ul>
        )}
        <p className="mt-4 text-xs text-paper/60">
          Dit omzeilt de rechten en beveiliging van deze app niet.
        </p>
        {error && <p role="alert" className="mt-4 text-sm text-red-300">{error}</p>}
        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            disabled={busy}
            onClick={() => decide(true)}
            className="min-h-[44px] flex-1 rounded-sm bg-brass px-5 py-3 text-sm font-medium text-oak hover:bg-paper disabled:opacity-60"
          >
            Goedkeuren
          </button>
          <button
            type="button"
            disabled={busy}
            onClick={() => decide(false)}
            className="min-h-[44px] flex-1 rounded-sm border border-border px-5 py-3 text-sm text-paper hover:bg-oak-light disabled:opacity-60"
          >
            Verbinding annuleren
          </button>
        </div>
      </div>
    </section>
  );
}
