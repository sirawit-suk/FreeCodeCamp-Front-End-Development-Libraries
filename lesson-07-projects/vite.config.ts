/* eslint-disable import/no-default-export */
/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return {
    server: { port: 3000 },
    plugins: [react()],
    base: process.env.VITE_BASE_URL,
  };
});
