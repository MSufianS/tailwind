import { withAleUI } from './src'

export default withAleUI({
  content: [
    './src/**/*.component.ts',
    './src/**/*.variants.ts',
    './src/**/*.stories.ts',
    './src/**/*.doc.mdx',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
})
