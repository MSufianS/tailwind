import plugin from 'tailwindcss/plugin'

export default plugin(({ addUtilities }) =>
  addUtilities({
    '.ale-bg-white': {
      '@apply bg-white dark:bg-muted-900': {},
    },
    '.ale-bg-50': {
      '@apply bg-muted-50 dark:bg-muted-950': {},
    },
    '.ale-bg-100': {
      '@apply bg-muted-100 dark:bg-muted-900': {},
    },
    '.ale-bg-200': {
      '@apply bg-muted-200 dark:bg-muted-800': {},
    },
    '.ale-bg-300': {
      '@apply bg-muted-300 dark:bg-muted-700': {},
    },
    '.ale-bg-400': {
      '@apply bg-muted-400 dark:bg-muted-600': {},
    },
    '.ale-bg-500': {
      '@apply bg-muted-500 dark:bg-muted-500': {},
    },
    '.ale-bg-600': {
      '@apply bg-muted-600 dark:bg-muted-400': {},
    },
    '.ale-bg-700': {
      '@apply bg-muted-700 dark:bg-muted-300': {},
    },
    '.ale-bg-800': {
      '@apply bg-muted-800 dark:bg-muted-200': {},
    },
    '.ale-bg-900': {
      '@apply bg-muted-900 dark:bg-muted-100': {},
    },
    '.ale-bg-950': {
      '@apply bg-muted-950 dark:bg-muted-50': {},
    },
    '.ale-bg-black': {
      '@apply bg-muted-900 dark:bg-white': {},
    },
  }),
)
