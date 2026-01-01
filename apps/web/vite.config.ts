// apps/web/vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@org/drawnix': resolve(__dirname, '../../libs/drawnix/src/index.ts'),
      '@org/text': resolve(__dirname, '../../libs/text/src/index.ts'),
      '@org/board': resolve(__dirname, '../../libs/board/src/index.ts'),
      '@org/models': resolve(__dirname, '../../libs/models/src/index.ts'),
      '@org/shared-test-utils': resolve(__dirname, '../../libs/shared-test-utils/src/index.ts'),
    }
  },
  optimizeDeps: {
    include: [
      '@org/drawnix',
      '@org/text',
      '@org/board',
    ]
  },
  build: {
    rollupOptions: {
      external: [
        // 如果这些是 peerDependencies，需要外部化
        'react',
        'react-dom',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
});
