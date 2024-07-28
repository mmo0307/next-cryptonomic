import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { Drawer } from './ui';

const meta = {
  title: 'shared/Drawer',
  component: Drawer
} satisfies Meta<typeof Drawer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,

    children: (
      <div>
        {
          'Drawer content Drawer content Drawer content Drawer content Drawer content Drawer content Drawer content Drawer content Drawer content Drawer content Drawer content Drawer content Drawer content Drawer content Drawer content Drawer content Drawer content Drawer content Drawer content Drawer content Drawer content Drawer content Drawer content Drawer content Drawer content Drawer content Drawer content Drawer content Drawer contentvDrawer content'
        }
      </div>
    )
  }
};
