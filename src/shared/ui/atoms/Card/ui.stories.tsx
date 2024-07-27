import { Meta, StoryObj } from '@storybook/react';

import { Card } from './ui';

const meta = {
  title: 'shared/Card',
  component: Card
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }
};
