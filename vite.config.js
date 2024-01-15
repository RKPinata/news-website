import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
/** The alias is an implementation of absolute path imports in vite
 * read more: https://vitejs.dev/config/#resolve-alias
 * jsconfig.json is also a necessary file to tell vscode that you are using absolute path imports
 * notice the alias "@" is also configured in jsconfig.json 
 * 
 * ps. Try to use absolute path in your projects, it will make your life easier
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
