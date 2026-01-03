
import { defineConfig } from 'vite';

export default defineConfig({
  // Ensure strict port to avoid rapid switching if multiple instances run
  server: {
    port: 5173,
    strictPort: true,
    hmr: {
      // Explicitly define HMR connection to avoid timeouts causing reconnect loops
      protocol: 'ws',
      host: 'localhost',
    },
    // Prevent watching ephemeral files that might trigger loops
    watch: {
      ignored: ['**/node_modules/**', '**/.git/**'],
      usePolling: false, // Ensure native events are used (better for perf)
    }
  },
  // Optimize dependency pre-bundling
  optimizeDeps: {
    include: [] 
  }
});
