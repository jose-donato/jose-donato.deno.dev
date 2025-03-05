import deno from "@astrojs/deno";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, passthroughImageService } from "astro/config";

export default defineConfig({
	output: "server",
	adapter: deno(),
	image: {
		service: passthroughImageService(),
	},
	devToolbar: {
		enabled: false,
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
