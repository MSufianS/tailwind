import type { AleUIConfig } from './schema'
import typography from '@tailwindcss/typography'
import containerQueries from '@tailwindcss/container-queries'

import { base, components, utilities } from './plugins'
import { defaultTheme } from './themes'

const AleUISymbol = '__is_ale_ui'

/**
 * Test if a tailwind config has the ale-ui preset already added
 */
export function hasPreset(config: AleUIConfig) {
  if (config.presets && Array.isArray(config.presets)) {
    return config.presets.some((preset) => preset && AleUISymbol in preset)
  }

  return false
}

/**
 * Create a ale-ui preset, optionally with a custom theme and custom plugins list
 */
export function createPreset({
  theme = defaultTheme,
  plugins = [
    // tailwindcss plugins
    typography,
    containerQueries,
    // ale-ui plugins
    base,
    components,
    utilities,
  ],
}: {
  theme?: AleUIConfig['theme']
  plugins?: AleUIConfig['plugins']
} = {}) {
  const config = {
    darkMode: 'class',
    content: [],
    plugins,
    theme,
  } satisfies AleUIConfig

  // set a hidden symbol so we can detect if the user has already added the preset
  Object.defineProperty(config, AleUISymbol, {
    value: true,
    enumerable: false,
    writable: false,
  })

  return config
}

/**
 * The default ale-ui preset
 */
export const preset = createPreset()
