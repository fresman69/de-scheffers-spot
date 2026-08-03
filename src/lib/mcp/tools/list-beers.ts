import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { beers } from "../../menu/beers";

export default defineTool({
  name: "list_beers",
  title: "Bierkaart opvragen",
  description:
    "List the beers on the StadsCafe beer menu, optionally filtered by category (e.g. Tripel, Sour / Geuze, 0.0 / Alcoholarm) or a search term.",
  inputSchema: {
    category: z.string().optional().describe("Filter on a beer category, case-insensitive."),
    search: z.string().optional().describe("Free-text search on beer name or description."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ category, search }) => {
    const cat = category?.trim().toLowerCase();
    const term = search?.trim().toLowerCase();
    const items = beers.filter((b) => {
      if (cat && b.category.toLowerCase() !== cat) return false;
      if (term && !`${b.name} ${b.description ?? ""}`.toLowerCase().includes(term)) return false;
      return true;
    });
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { count: items.length, beers: items },
    };
  },
});
