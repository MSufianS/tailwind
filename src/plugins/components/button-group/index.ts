import plugin from 'tailwindcss/plugin'
import { defaultConfig, key } from './button-group.config'

const config = {
  theme: {
    ale: {
      [key]: defaultConfig,
    },
  },
}

export default plugin(
  ({ addComponents }) =>
    addComponents({
      '.ale-button-group, [role="group"]': {
        '@apply flex': {},

        // Button
        '> .ale-button:not(:only-child), > .ale-button-action:not(:only-child), > .ale-button-icon:not(:only-child)':
          {
            '@apply !border-e-0': {},
            '&:focus': {
              '@apply !z-10 relative': {},
            },
            '&:not(:first-child):not(:last-child)': {
              '@apply !rounded-none': {},
            },
            '&:first-child': {
              '@apply !rounded-e-none': {},
            },
            '&:last-child': {
              '@apply !border-e !rounded-s-none': {},
            },
          },

        // Input
        '.ale-input-wrapper:not(:first-child):not(:last-child)': {
          '.ale-input': {
            '@apply !border-e-0 !rounded-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        '.ale-input-wrapper:first-child:not(:last-child)': {
          '.ale-input': {
            '@apply !border-e-0 !rounded-e-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        '.ale-input-wrapper:last-child:not(:first-child)': {
          '.ale-input': {
            '@apply !border-e !rounded-s-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        // InputNumber
        '.ale-input-number-wrapper:not(:first-child):not(:last-child)': {
          '.ale-input-number': {
            '@apply !border-e-0 !rounded-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        '.ale-input-number-wrapper:first-child:not(:last-child)': {
          '.ale-input-number': {
            '@apply !border-e-0 !rounded-e-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        '.ale-input-number-wrapper:last-child:not(:first-child)': {
          '.ale-input-number': {
            '@apply !border-e !rounded-s-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        // InputFileRegular
        '.ale-input-file-regular:not(:first-child):not(:last-child)': {
          '.ale-input-file-inner': {
            '@apply !border-e-0 !rounded-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        '.ale-input-file-regular:first-child:not(:last-child)': {
          '.ale-input-file-inner': {
            '@apply !border-e-0 !rounded-e-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        '.ale-input-file-regular:last-child:not(:first-child)': {
          '.ale-input-file-inner': {
            '@apply !border-e !rounded-s-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        // Select
        '.ale-select-wrapper:not(:first-child):not(:last-child)': {
          '.ale-select': {
            '@apply !border-e-0 !rounded-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        '.ale-select-wrapper:first-child:not(:last-child)': {
          '.ale-select': {
            '@apply !border-e-0 !rounded-e-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        '.ale-select-wrapper:last-child:not(:first-child)': {
          '.ale-select': {
            '@apply !border-e !rounded-s-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        // Autocomplete
        '.ale-autocomplete:not(:first-child):not(:last-child)': {
          '.ale-autocomplete-input': {
            '@apply !border-e-0 !rounded-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        '.ale-autocomplete:first-child:not(:last-child)': {
          '.ale-autocomplete-input': {
            '@apply !border-e-0 !rounded-e-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        '.ale-autocomplete:last-child:not(:first-child)': {
          '.ale-autocomplete-input': {
            '@apply !border-e !rounded-s-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        // Dropdown
        '.ale-dropdown:not(:first-child):not(:last-child)': {
          '.ale-button': {
            '@apply !border-e-0 !rounded-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        '.ale-dropdown:first-child:not(:last-child)': {
          '.ale-button': {
            '@apply !border-e-0 !rounded-e-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        '.ale-dropdown:last-child:not(:first-child)': {
          '.ale-button': {
            '@apply !border-e !rounded-s-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        // Listbox
        '.ale-listbox:not(:first-child):not(:last-child)': {
          '.ale-listbox-button': {
            '@apply !border-e-0 !rounded-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        '.ale-listbox:first-child:not(:last-child)': {
          '.ale-listbox-button': {
            '@apply !border-e-0 !rounded-e-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },

        '.ale-listbox:last-child:not(:first-child)': {
          '.ale-listbox-button': {
            '@apply !border-e !rounded-s-none': {},

            '&:focus': {
              '@apply !z-10 relative': {},
            },
          },
        },
      },
    }),
  config,
)
