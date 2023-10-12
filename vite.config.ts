import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgr()],
  server: {
    proxy: {
    //   // '/api': 'http://221.150.47.180:4010',
    //   // '/uploads': 'http://221.150.47.180:4010',
    //   // '/feeds': 'http://221.150.47.180:4010',
      '/api': 'http://localhost:4077',
    //   '/uploads': 'http://localhost:4010',
    //   '/feeds': 'http://localhost:4010',
    },
    host: '0.0.0.0',
    port: 3000,
  },
});
