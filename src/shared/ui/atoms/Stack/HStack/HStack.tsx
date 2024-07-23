import React from 'react';

import { Flex } from '../Flex';
import { FlexProps } from '../model/types';

type HStackProps = Omit<FlexProps, 'direction'>;

export const HStack = (props: HStackProps) => {
  return (
    <Flex
      direction='row'
      {...props}
    />
  );
};
