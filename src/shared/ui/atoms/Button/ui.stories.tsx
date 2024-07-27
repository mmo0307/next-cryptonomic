import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Button } from './ui';

import CloseIcon from '@/shared/assets/icons/close.svg';

const meta = {
  title: 'shared/Button',
  component: Button
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

//Primary
export const Primary: Story = {
  args: {
    children: 'Button'
  }
};

export const PrimaryDisabled: Story = {
  args: {
    children: 'Button',

    disabled: true
  }
};

export const PrimaryMedium: Story = {
  args: {
    children: 'Button',

    size: 'medium'
  }
};

export const PrimaryLarge: Story = {
  args: {
    children: 'Button',

    size: 'large'
  }
};

//Default
export const Default: Story = {
  args: {
    ...Primary.args,

    variant: 'default'
  }
};

export const DefaultDisabled: Story = {
  args: {
    ...Primary.args,

    disabled: true,

    variant: 'default'
  }
};

export const DefaultMedium: Story = {
  args: {
    ...Primary.args,

    variant: 'default',

    size: 'medium'
  }
};

export const DefaultLarge: Story = {
  args: {
    ...Primary.args,

    variant: 'default',

    size: 'large'
  }
};

//Dashed
export const Dashed: Story = {
  args: {
    ...Primary.args,

    variant: 'dashed'
  }
};

export const DashedDisabled: Story = {
  args: {
    ...Primary.args,

    disabled: true,

    variant: 'dashed'
  }
};

export const DashedMedium: Story = {
  args: {
    ...Primary.args,

    variant: 'dashed',

    size: 'medium'
  }
};

export const DashedLarge: Story = {
  args: {
    ...Primary.args,

    variant: 'dashed',

    size: 'large'
  }
};

//Link
export const Link: Story = {
  args: {
    ...Primary.args,

    variant: 'link'
  }
};

export const LinkDisabled: Story = {
  args: {
    ...Primary.args,

    disabled: true,

    variant: 'link'
  }
};

export const LinkMedium: Story = {
  args: {
    ...Primary.args,

    variant: 'link',

    size: 'medium'
  }
};

export const LinkLarge: Story = {
  args: {
    ...Primary.args,

    variant: 'link',

    size: 'large'
  }
};

//LinkLine
export const LinkLine: Story = {
  args: {
    ...Primary.args,

    variant: 'link-line'
  }
};

export const LinkLineDisabled: Story = {
  args: {
    ...Primary.args,

    disabled: true,

    variant: 'link-line'
  }
};

export const LinkLineMedium: Story = {
  args: {
    ...Primary.args,

    variant: 'link-line',

    size: 'medium'
  }
};

export const LinkLineLarge: Story = {
  args: {
    ...Primary.args,

    variant: 'link-line',

    size: 'large'
  }
};

//ButtonIcon
export const ButtonIcon: Story = {
  args: {
    ...Primary.args,

    icon: <CloseIcon />
  }
};

export const ButtonIconDisabled: Story = {
  args: {
    ...Primary.args,

    disabled: true,

    icon: <CloseIcon />
  }
};

export const ButtonIconMedium: Story = {
  args: {
    ...Primary.args,

    size: 'medium',

    icon: <CloseIcon />
  }
};

export const ButtonIconLarge: Story = {
  args: {
    ...Primary.args,

    size: 'large',

    icon: <CloseIcon />
  }
};

//ButtonWithAddons
export const ButtonWithAddons: Story = {
  args: {
    ...Primary.args,

    addonLeft: <CloseIcon />,

    addonRight: <CloseIcon />
  }
};

export const ButtonWithAddonsDisabled: Story = {
  args: {
    ...Primary.args,

    disabled: true,

    addonLeft: <CloseIcon />,

    addonRight: <CloseIcon />
  }
};

export const ButtonWithAddonsMedium: Story = {
  args: {
    ...Primary.args,

    size: 'medium',

    addonLeft: <CloseIcon />,

    addonRight: <CloseIcon />
  }
};

export const ButtonWithAddonsLarge: Story = {
  args: {
    ...Primary.args,

    size: 'large',

    addonLeft: <CloseIcon />,

    addonRight: <CloseIcon />
  }
};
