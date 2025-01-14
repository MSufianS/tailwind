import type { AleUIConfig } from './schema'
import { preset, hasPreset } from './preset'

export * from './preset'

/**
 * Inject the Ale-ui preset into a tailwind config if not already present
 */
export function withAleUI(config: AleUIConfig) {
  if (hasPreset(config)) {
    return config
  }

  config.presets ??= []
  config.presets.push(preset)

  return config
}
