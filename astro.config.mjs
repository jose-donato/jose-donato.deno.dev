import deno from "@astrojs/deno";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
	output: "server",
	integrations: [tailwind()],
	adapter: deno(),
});
