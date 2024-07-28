import { useArgs } from '@storybook/preview-api';
import { Meta, StoryObj } from '@storybook/react';

import { CodeProps } from './model/types';
import { Code } from './ui';

const meta = {
  title: 'shared/Code',
  component: Code
} satisfies Meta<typeof Code>;

export default meta;

type Story = StoryObj<typeof meta>;

function Render(args: CodeProps) {
  const [{ value }, updateArgs] = useArgs();

  function onChange(value: string) {
    updateArgs({ value });
  }

  return (
    <Code
      {...args}
      onChange={onChange}
      value={value}
    />
  );
}

export const Default: Story = {
  args: {},

  render: Render
};

export const Error: Story = {
  ...Default,

  args: {
    ...Default.args,

    error: true
  }
};
