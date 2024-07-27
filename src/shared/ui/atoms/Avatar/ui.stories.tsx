import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './ui';

import CloseIcon from '@/shared/assets/icons/close.svg';

const meta = {
  title: 'shared/Avatar',
  component: Avatar
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};

export const WithIcon: Story = {
  args: {
    ...Default.args,

    icon: <CloseIcon />
  }
};
