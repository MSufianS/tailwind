import plugin from 'tailwindcss/plugin'

export default plugin(({ addUtilities }) =>
  addUtilities({
    '.ale-text-white': {
      '@apply text-white dark:text-black': {},
    },
    '.ale-text-50': {
      '@apply text-muted-50 dark:text-muted-950': {},
    },
    '.ale-text-100': {
      '@apply text-muted-100 dark:text-muted-900': {},
    },
    '.ale-text-200': {
      '@apply text-muted-200 dark:text-muted-800': {},
    },
    '.ale-text-300': {
      '@apply text-muted-300 dark:text-muted-700': {},
    },
    '.ale-text-400': {
      '@apply text-muted-400 dark:text-muted-600': {},
    },
    '.ale-text-500': {
      '@apply text-muted-500 dark:text-muted-500': {},
    },
    '.ale-text-600': {
      '@apply text-muted-600 dark:text-muted-400': {},
    },
    '.ale-text-700': {
      '@apply text-muted-700 dark:text-muted-300': {},
    },
    '.ale-text-800': {
      '@apply text-muted-800 dark:text-muted-200': {},
    },
    '.ale-text-900': {
      '@apply text-muted-900 dark:text-muted-100': {},
    },
    '.ale-text-950': {
      '@apply text-muted-950 dark:text-muted-50': {},
    },
    '.ale-text-black': {
      '@apply text-black dark:text-white': {},
    },
  }),
)
