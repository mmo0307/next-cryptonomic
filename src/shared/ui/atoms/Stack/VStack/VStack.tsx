import React from 'react';

import { Flex } from '../Flex';
import { FlexProps } from '../model/types';

type VStackProps = Omit<FlexProps, 'direction'>;

export const VStack = ({ align = 'start', ...props }: VStackProps) => (
  <Flex
    {...props}
    direction='column'
    align={align}
  />
);
