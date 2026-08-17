import { defineTool } from "@lovable.dev/mcp-js";
import { hapas } from "../../menu/hapas";

export default defineTool({
  name: "list_snacks",
  title: "Borrelkaart opvragen",
  description: "List the hapas / bar snacks served at Stadscafé.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(hapas, null, 2) }],
    structuredContent: { count: hapas.length, snacks: hapas },
  }),
});
