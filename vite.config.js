// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,                              // listen on 0.0.0.0 so the tunnel can reach it
    allowedHosts: ['saikatech-dev.loca.lt'], // <-- your LocalTunnel subdomain
    // If HMR doesn’t connect through the tunnel, uncomment:
    // hmr: { host: 'saikatech-dev.loca.lt', protocol: 'wss', clientPort: 443 },
  },
  preview: {
    host: true, // if you use `npm run preview` (port 4173), this lets tunnels hit it
  },
})

