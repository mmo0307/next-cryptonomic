import '@styles/globals';
import '@styles/custom';

import type { StoryContext, StoryFn } from '@storybook/react';

export const StyleDecorator = (storyFn: StoryFn<any>, context: StoryContext) =>
  storyFn(context.args, context);
