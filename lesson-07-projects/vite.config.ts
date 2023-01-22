/* eslint-disable import/no-default-export */
/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: { port: 3000 },
  plugins: [react()],
  base: '/lesson-07-projects',
});
