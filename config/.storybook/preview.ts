import type { Preview } from '@storybook/react';
import {
  FontDamilyDecorator,
  StyleDecorator,
  TranslationDecorator
} from '../../src/shared/config/storybook';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [FontDamilyDecorator, TranslationDecorator, StyleDecorator]
};

export default preview;
