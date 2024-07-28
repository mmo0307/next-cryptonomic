import { Meta, StoryObj } from '@storybook/react';

import { Chip } from './ui';

const meta = {
  title: 'shared/Chip',
  component: Chip
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Create your NFT avatar'
  }
};
