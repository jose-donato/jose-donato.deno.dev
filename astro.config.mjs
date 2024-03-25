import deno from "@astrojs/deno";
import tailwind from "@astrojs/tailwind";
import { defineConfig, passthroughImageService } from "astro/config";

export default defineConfig({
	output: "hybrid",
	integrations: [tailwind()],
	adapter: deno(),
	image: {
		service: passthroughImageService(),
	},
});
