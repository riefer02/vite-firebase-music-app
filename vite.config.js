import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  optimizeDeps: { include: ["firebase/firestore", "firebase/app"] },
  plugins: [vue()],
});
