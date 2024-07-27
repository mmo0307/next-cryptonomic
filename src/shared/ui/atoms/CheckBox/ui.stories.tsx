import { useArgs } from '@storybook/preview-api';
import { Meta, StoryObj } from '@storybook/react';

import { CheckBoxProps } from './model/types';
import { CheckBox } from './ui';

const meta = {
  title: 'shared/CheckBox',
  component: CheckBox
} satisfies Meta<typeof CheckBox>;

export default meta;

type Story = StoryObj<typeof meta>;

function Render(args: CheckBoxProps) {
  const [{ isChecked }, updateArgs] = useArgs();

  function onChange() {
    updateArgs({ isChecked: !isChecked });
  }

  return (
    <CheckBox
      {...args}
      onChange={onChange}
      value={isChecked}
    />
  );
}

export const Default: Story = {
  args: {
    label: 'CheckBox'
  },

  render: Render
};

export const Error: Story = {
  ...Default,

  args: {
    ...Default.args,

    error: true
  }
};

export const Disabled: Story = {
  ...Default,

  args: {
    ...Default.args,

    disabled: true
  }
};
