import { auth, defineMcp } from "@lovable.dev/mcp-js";
import cafeInfoTool from "./tools/cafe-info";
import listBeersTool from "./tools/list-beers";
import listDrinksTool from "./tools/list-drinks";
import listSnacksTool from "./tools/list-snacks";

// The OAuth issuer must be the direct auth host; the project ref is inlined at build time.
const projectRef = import.meta.env['VITE_SUPABASE_PROJECT_ID'] ?? "project-ref-unset";

export default defineMcp({
  name: "dordrecht-s-warm-welcome",
  title: "Dordrecht's Warm Welcome",
  version: "0.1.0",
  instructions:
    "Tools for StadsCafe in Dordrecht. Use `list_beers` for the beer menu, `list_drinks` for wine, gin & tonic, spirits, coffee and soft drinks, `list_snacks` for the hapas, and `cafe_info` for address, opening hours and contact details. StadsCafe does not take reservations.",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
  }),
  tools: [listBeersTool, listDrinksTool, listSnacksTool, cafeInfoTool],
});
