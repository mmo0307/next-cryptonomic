import { Meta, StoryObj } from '@storybook/react';

import { Text } from './ui';

const meta = {
  title: 'shared/Text',
  component: Text
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    tag: 'div',

    font: 'rubik',

    theme: 'subheader-2',

    align: 'left',

    variant: 'primary',

    children: 'TEXT TEXT'
  }
};

export const PrimaryRight: Story = {
  args: {
    ...Primary.args,

    align: 'right'
  }
};

export const PrimaryCenter: Story = {
  args: {
    ...Primary.args,

    align: 'center'
  }
};

export const H1: Story = {
  args: {
    ...Primary.args,

    theme: 'h1'
  }
};

export const H2: Story = {
  args: {
    ...Primary.args,

    theme: 'h2'
  }
};

export const H3: Story = {
  args: {
    ...Primary.args,

    theme: 'h3'
  }
};

export const H4: Story = {
  args: {
    ...Primary.args,

    theme: 'h4'
  }
};

export const H5: Story = {
  args: {
    ...Primary.args,

    theme: 'h5'
  }
};

export const H6: Story = {
  args: {
    ...Primary.args,

    theme: 'h6'
  }
};

export const Subheader1: Story = {
  args: {
    ...Primary.args,

    theme: 'subheader-1'
  }
};

export const Subheader2: Story = {
  args: {
    ...Primary.args,

    theme: 'subheader-2'
  }
};

export const Body1: Story = {
  args: {
    ...Primary.args,

    theme: 'body-1'
  }
};

export const Body2: Story = {
  args: {
    ...Primary.args,

    theme: 'body-2'
  }
};

export const Caption: Story = {
  args: {
    ...Primary.args,

    theme: 'caption'
  }
};

export const Overline: Story = {
  args: {
    ...Primary.args,

    theme: 'overline'
  }
};

export const Error: Story = {
  args: {
    ...Primary.args,

    variant: 'error'
  }
};

export const Pixelify: Story = {
  args: {
    ...Primary.args,

    font: 'pixelify'
  }
};
