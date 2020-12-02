import { styled, StitchesProps } from '../stitches.config';

export type BoxProps = StitchesProps<typeof Box>;

export const Box = styled('div', {
  boxSizing: 'border-box',
  position: 'relative'
});
