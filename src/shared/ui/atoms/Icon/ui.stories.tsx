import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';

import { Icon } from './ui';

import CloseIcon from '@/shared/assets/icons/close.svg';

const meta = {
  title: 'shared/Icon',
  component: Icon
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    Svg: CloseIcon
  }
};

export const ClickAble: Story = {
  args: {
    Svg: CloseIcon,

    clickable: true,

    onClick: action('onClick')
  }
};
