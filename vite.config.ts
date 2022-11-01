import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'src/pages/main/index.html')
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve('./src') // @代替src
    }
  }
});
