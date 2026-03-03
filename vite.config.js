import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite config — tells Vite to use the React plugin
// which enables JSX transforms and Fast Refresh in dev mode
export default defineConfig({
  plugins: [react()],

  // Makes src/ the root for absolute imports (optional but clean)
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});