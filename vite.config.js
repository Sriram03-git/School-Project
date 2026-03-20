import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  server: {
    port: 5173,
    strictPort: true,
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        admissions: resolve(__dirname, "admissions.html"),
        contact: resolve(__dirname, "contact.html"),
        events: resolve(__dirname, "events.html"),
        facilities: resolve(__dirname, "facilities.html"),
        gallery: resolve(__dirname, "gallery.html"),
        programs: resolve(__dirname, "programs.html"),
      },
    },
  },
});
