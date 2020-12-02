import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Box, BoxProps } from '../components/Box';

export default {
  title: 'components/Box',
  component: Box,
} as Meta;

export const Example: Story<BoxProps> = (args) => (
  <Box css={{ width: 80, height: 80, backgroundColor: '$blue400' }} {...args} />
)

