'use client';
import { Builder, builder } from '@builder.io/react';

import Counter from './components/Counter/Counter';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

Builder.registerComponent(Counter, {
  name: 'Counter',
  inputs: [
    {
      name: 'initialCount',
      type: 'number'
    }
  ]
});
