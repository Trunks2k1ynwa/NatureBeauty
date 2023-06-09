import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@styles': '/src/styles',
      // Thêm các đường dẫn định danh khác vào đây
    },
  },
  server: {
    port: 3000, // Cấu hình lại cổng thành 3000
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
  reactRefresh: {
    fastRefresh: false,
  },
});
