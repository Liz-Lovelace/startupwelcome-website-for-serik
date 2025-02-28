import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/*
const preloadLandingVideo = () => {
  return {
    name: 'preload-landing-video',
    transformIndexHtml(html, ctx) {
      // Only add during build (not dev)
      if (!ctx.chunk) return html
      
      // Find the entry chunk
      const entryChunk = Object.values(ctx.bundle).find(chunk => chunk.isEntry)
      if (!entryChunk) return html
      
      // Find the video asset in the chunk's imports
      const videoAsset = Object.values(ctx.bundle).find(chunk => 
        chunk.fileName && chunk.fileName.includes('landing-video-360p')
      )
      
      if (!videoAsset) return html
      
      // Add preload tag
      return html.replace(
        /<\/head>/,
        `  <link rel="preload" as="video" href="/${videoAsset.fileName}" type="video/mp4">\n  </head>`
      )
    }
  }
}
*/

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // preloadLandingVideo()
  ],
  root: './frontend',
  build: {
    outDir: '../dist',
    emptyOutDir: true
  },
})
