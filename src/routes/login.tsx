import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";

export const Route = createFileRoute("/login")({
  ssr: false,
  validateSearch: (s: Record<string, unknown>) => ({
    next: typeof s.next === "string" ? s.next : "",
  }),
  head: () => ({
    meta: [
      { title: "Inloggen — Stadscafé" },
      { name: "description", content: "Log in op je Stadscafé-account om externe apps toegang te geven." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Inloggen — Stadscafé" },
      { property: "og:description", content: "Log in op je Stadscafé-account." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Login,
});

function safeNext(next: string): string {
  return next.startsWith("/") && !next.startsWith("//") ? next : "/";
}

function Login() {
  const { next } = Route.useSearch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  const target = safeNext(next);

  useEffect(() => {
    void supabase.auth.getSession().then(({ data }) => {
      if (data.session) window.location.replace(target);
    });
  }, [target]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    setNotice(null);
    if (mode === "signup") {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: window.location.origin + target },
      });
      setBusy(false);
      if (error) return setError(error.message);
      setNotice("Check je e-mail om je account te bevestigen.");
      return;
    }
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setBusy(false);
    if (error) return setError(error.message);
    window.location.replace(target);
  }

  async function onGoogle() {
    setError(null);
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin + target,
    });
    if (result.error) {
      setError("Inloggen met Google lukte niet.");
      return;
    }
    if (result.redirected) return;
    void navigate({ to: target as string });
  }

  return (
    <section className="flex min-h-[80svh] items-center justify-center bg-oak px-4 py-16 sm:px-6">
      <div className="w-full max-w-md rounded-sm border border-border bg-oak-light/40 p-6 sm:p-8">
        <p className="font-script text-4xl leading-none text-brass">Welkom</p>
        <h1 className="mt-3 type-h1 text-paper">
          {mode === "signin" ? "Inloggen" : "Account aanmaken"}
        </h1>
        <p className="mt-3 text-sm text-paper/75">
          Alleen nodig om externe apps toegang te geven tot Stadscafé.
        </p>

        <button
          type="button"
          onClick={onGoogle}
          className="mt-6 min-h-[44px] w-full rounded-sm border border-border px-4 py-3 text-sm text-paper transition-colors hover:bg-oak-light"
        >
          Doorgaan met Google
        </button>

        <div className="my-6 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-paper/50">
          <span className="h-px flex-1 bg-border" /> of <span className="h-px flex-1 bg-border" />
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm text-paper/80">E-mailadres</label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="min-h-[44px] w-full rounded-sm border border-border bg-oak px-3 py-2 text-paper outline-none focus:border-brass"
            />
          </div>
          <div>
            <label htmlFor="password" className="mb-1.5 block text-sm text-paper/80">Wachtwoord</label>
            <input
              id="password"
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="min-h-[44px] w-full rounded-sm border border-border bg-oak px-3 py-2 text-paper outline-none focus:border-brass"
            />
          </div>
          {error && <p role="alert" className="text-sm text-red-300">{error}</p>}
          {notice && <p className="text-sm text-brass">{notice}</p>}
          <button
            type="submit"
            disabled={busy}
            className="min-h-[44px] w-full rounded-sm bg-brass px-4 py-3 text-sm font-medium text-oak transition-colors hover:bg-paper disabled:opacity-60"
          >
            {mode === "signin" ? "Inloggen" : "Account aanmaken"}
          </button>
        </form>

        <button
          type="button"
          onClick={() => { setMode(mode === "signin" ? "signup" : "signin"); setError(null); setNotice(null); }}
          className="mt-5 text-sm text-brass underline-offset-4 hover:underline"
        >
          {mode === "signin" ? "Nog geen account? Maak er een aan" : "Al een account? Inloggen"}
        </button>
      </div>
    </section>
  );
}
