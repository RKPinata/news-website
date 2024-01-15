import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
/** The alias is an implementation of absolute path imports in vite
 * read more: https://vitejs.dev/config/#resolve-alias
 * path.resolve(__dirname, "./src") is the absolute path of the src folder
 * so we can use @ to import files in src folder
 * The path module in the provided code is imported from the Node.js standard library
 * read more: https://nodejs.org/api/path.html
 *
 * ps. There are other ways to implement absolute path in vite with jsconfig.json or tsconfig.json
 * psx2. Try to use absolute path in your projects, it will make your life easier
 * Thank you very much tehepero
 */

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});

/* git commit -m "add absolute import in vite config" "     */
