import deno from "@astrojs/deno";
import { defineConfig, passthroughImageService } from "astro/config";

// https://astro.build/config
export default defineConfig({
	output: "server",
	adapter: deno(),
	image: {
		service: passthroughImageService(),
	},
});
