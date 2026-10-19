import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Project Pages live at /<repo>/; a true user site (<username>.github.io) stays at /.
const [owner, repo] = process.env.GITHUB_REPOSITORY?.split('/') ?? [];
const isUserSite =
  Boolean(owner && repo) &&
  repo.toLowerCase() === `${owner.toLowerCase()}.github.io`;
const base = repo && !isUserSite ? `/${repo}/` : '/';

export default defineConfig({
  base,
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
