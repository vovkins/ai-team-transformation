import { defineConfig } from 'vite'

export default defineConfig({
  vite: {
    plugins: [
      {
        name: 'inject-css',
        transformIndexHtml(html) {
          return html.replace(
            '</head>',
            '<link rel="stylesheet" href="/ai-team-transformation/overrides.css"></head>'
          )
        }
      }
    ]
  }
})
