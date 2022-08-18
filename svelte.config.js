import adapter from '@sveltejs/adapter-auto'
import preprocess from 'svelte-preprocess'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import nested from 'postcss-nested'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    preprocess({
      postcss: {
        plugins: [autoprefixer, cssnano({ preset: 'default' }), nested],
      },
    }),
  ],
  kit: {
    adapter: adapter({ postcss: true }),
  },
}

export default config
