/* eslint-disable no-unused-vars */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: "/",
    server: {
      proxy: {
        "/register": {
          target: "http://localhost:5000",
          changeOrigin: true,
          secure: false,
        },
        "/getUsers": {
          target: "http://localhost:5000",
          changeOrigin: true,
          secure: false,
        },
      },
    },
  };

  return config;
});
