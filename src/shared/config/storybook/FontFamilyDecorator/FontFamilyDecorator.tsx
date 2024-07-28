import { Pixelify_Sans, Rubik } from 'next/font/google';
import { StoryFn } from '@storybook/react';

import { cn } from '@/shared/lib/classNames/classNames';

const rubik = Rubik({ subsets: ['latin'], variable: '--font-rubik' });

const pixelifySans = Pixelify_Sans({
  subsets: ['latin'],
  variable: '--font-pixelifySans'
});

const FontDamilyDecorator = (StoryComponent: StoryFn) => (
  <div className={cn(rubik.variable, pixelifySans.variable)}>
    <StoryComponent />
  </div>
);

export { FontDamilyDecorator };
