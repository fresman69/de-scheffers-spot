import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { drinks } from "../../menu/drinks";

export default defineTool({
  name: "list_drinks",
  title: "Drankenkaart opvragen",
  description:
    "List the non-beer drinks at StadsCafe (wine, sparkling, gin & tonic, spirits, coffee/tea, soft drinks), optionally filtered by category or search term.",
  inputSchema: {
    category: z.string().optional().describe("Filter on a drink category, case-insensitive."),
    search: z.string().optional().describe("Free-text search on drink name or description."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ category, search }) => {
    const cat = category?.trim().toLowerCase();
    const term = search?.trim().toLowerCase();
    const items = drinks.filter((d) => {
      if (cat && d.category.toLowerCase() !== cat) return false;
      if (term && !`${d.name} ${d.description ?? ""}`.toLowerCase().includes(term)) return false;
      return true;
    });
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { count: items.length, drinks: items },
    };
  },
});
