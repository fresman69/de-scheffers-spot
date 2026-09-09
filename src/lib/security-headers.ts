// Baseline security headers for a public, read-only showcase site.
// Applied to every response in src/server.ts.

const CSP = [
  "default-src 'self'",
  // Inline scripts are required for SSR hydration payloads and JSON-LD.
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  // Lettertypen worden lokaal geserveerd; geen externe fontdiensten.
  "font-src 'self' data:",
  "img-src 'self' data: blob: https:",
  "connect-src 'self' https://*.supabase.co https://*.lovable.app wss://*.supabase.co",
  // OpenStreetMap map embed on /contact.
  "frame-src https://www.openstreetmap.org",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

export function withSecurityHeaders(response: Response): Response {
  const headers = new Headers(response.headers);
  // Dev tooling (HMR, preview bridge) needs eval; only enforce CSP in production.
  if (import.meta.env.PROD && !headers.has("content-security-policy")) {
    headers.set("content-security-policy", CSP);
  }
  headers.set("x-content-type-options", "nosniff");
  headers.set("referrer-policy", "strict-origin-when-cross-origin");
  headers.set("x-frame-options", "DENY");
  headers.set("permissions-policy", "geolocation=(), microphone=(), camera=(), payment=()");
  headers.set("strict-transport-security", "max-age=31536000; includeSubDomains");
  headers.set("cross-origin-opener-policy", "same-origin");

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}
