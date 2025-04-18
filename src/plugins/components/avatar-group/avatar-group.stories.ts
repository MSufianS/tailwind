import type { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import type { AvatarGroupAttrs } from './avatar-group.types'
import { AvatarGroup } from './avatar-group.component'

const demoAvatars = [
  {
    src: 'https://sufian.online/ale-ui/img/avatars/10.svg',
    srcDark: 'https://sufian.online/ale-ui/img/avatars/10.svg',
    text: 'Kendra Wilson',
  },
  {
    src: 'https://sufian.online/ale-ui/img/avatars/12.svg',
    srcDark: 'https://sufian.online/ale-ui/img/avatars/12.svg',
    text: 'Ella Milburn',
  },
  {
    src: 'https://sufian.online/ale-ui/img/avatars/8.svg',
    srcDark: 'https://sufian.online/ale-ui/img/avatars/8.svg',
    text: 'John Baxter',
  },
  {
    src: 'https://sufian.online/ale-ui/img/avatars/24.svg',
    srcDark: 'https://sufian.online/ale-ui/img/avatars/24.svg',
    text: 'Anna Lopez',
  },
  {
    src: 'https://sufian.online/ale-ui/img/avatars/25.svg',
    srcDark: 'https://sufian.online/ale-ui/img/avatars/25.svg',
    text: 'Melany Smith',
  },
]

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta = {
  title: 'Ale UI/Base/Avatar group',
  // tags: ['autodocs'],
  render: (args) => AvatarGroup(args),
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xxs', 'xs', 'sm', 'md', 'lg'],
      defaultValue: 'sm',
    },
    limit: {
      control: { type: 'number' },
      defaultValue: 4,
    },
    avatars: {
      control: {
        // @ts-ignore
        type: 'array',
      },
      defaultValue: demoAvatars,
    },
  },
} satisfies Meta<AvatarGroupAttrs>

export default meta
type Story = StoryObj<AvatarGroupAttrs>

// first export is the Primary story

// #region Main
export const Main: Story = {
  name: 'Main example',
  args: {
    // set default values used for UI preview
    size: 'lg',
    limit: 4,
    avatars: demoAvatars,
  },
}
// #endregion

// #region Size:XXs
export const SizeXxs: Story = {
  name: 'Size: xxs',
  args: {
    size: 'xxs',
    limit: 4,
    avatars: demoAvatars,
  },
}
// #endregion

// #region Size:Xs
export const SizeXs: Story = {
  name: 'Size: xs',
  args: {
    size: 'xs',
    limit: 4,
    avatars: demoAvatars,
  },
}
// #endregion

// #region Size:Sm
export const SizeSm: Story = {
  name: 'Size: sm',
  args: {
    size: 'sm',
    limit: 4,
    avatars: demoAvatars,
  },
}
// #endregion

// #region Size:Md
export const SizeMd: Story = {
  name: 'Size: md',
  args: {
    size: 'md',
    limit: 4,
    avatars: demoAvatars,
  },
}
// #endregion

// #region Size:Lg
export const SizeLg: Story = {
  name: 'Size: lg',
  args: {
    size: 'lg',
    limit: 4,
    avatars: demoAvatars,
  },
}
// #endregion
