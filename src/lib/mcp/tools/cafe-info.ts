import { defineTool } from "@lovable.dev/mcp-js";
import { cafeInfo } from "../../menu/cafe";

export default defineTool({
  name: "cafe_info",
  title: "Café-informatie",
  description:
    "Get Stadscafé's address, phone number, email, Instagram, opening hours and reservation policy.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(cafeInfo, null, 2) }],
    structuredContent: { cafe: cafeInfo },
  }),
});
