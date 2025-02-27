import { createStyled } from '@stitches/react';
export * from '@stitches/react';

export const theme = {
  colors: {
    $gray50: '#ffffff',
    $gray75: '#fafafa',
    $gray100: '#f5f5f5',
    $gray200: '#eaeaea',
    $gray300: '#e1e1e1',
    $gray400: '#cacaca',
    $gray500: '#b3b3b3',
    $gray600: '#8e8e8e',
    $gray700: '#6e6e6e',
    $gray800: '#4b4b4b',
    $gray900: '#2c2c2c',
    $blue400: '#2680eb',
    $blue500: '#1473e6',
    $blue600: '#0d66d0',
    $blue700: '#095aba',
    $red400: '#e34850',
    $red500: '#d7373f',
    $red600: '#c9252d',
    $red700: '#bb121a',
    $orange400: '#e68619',
    $orange500: '#da7b11',
    $orange600: '#cb6f10',
    $orange700: '#bd640d',
    $green400: '#2d9d78',
    $green500: '#268e6c',
    $green600: '#12805c',
    $green700: '#107154',
  },
  space: {
    $1: '5px',
    $2: '10px',
    $3: '15px',
    $4: '20px',
    $5: '25px',
    $6: '35px',
    $7: '45px',
    $8: '65px',
    $9: '80px',
  },
  sizes: {
    $1: '5px',
    $2: '10px',
    $3: '15px',
    $4: '20px',
    $5: '25px',
    $6: '35px',
    $7: '45px',
    $8: '65px',
    $9: '80px',
  },
  fontSizes: {
    $1: '12px',
    $2: '13px',
    $3: '15px',
    $4: '17px',
    $5: '19px',
    $6: '21px',
    $7: '27px',
    $8: '35px',
    $9: '59px',
  },
  fonts: {
    $body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";',
    $monospace: '"SFMono-Regular","Consolas","Liberation Mono","Menlo",monospace',
  },
  fontWeights: {
    $body: '400',
    $heading: '600',
  },
  shadows:{
    $smallest: '0px 3px 6px rgba(0,0,0,0.1)',
    $small: '0 5px 10px rgba(0,0,0,0.12)',
    $medium: '0 8px 30px rgba(0,0,0,0.12)',
    $large: '0 30px 60px rgba(0,0,0,0.12)',
  },
  radii: {
    $1: '3px',
    $2: '5px',
    $3: '15px',
    $round: '50%',
    $pill: '9999px',
  },
}

export const { styled, css } = createStyled({
  tokens: theme,
  breakpoints: {
    bp1: (rule) => `@media (min-width: 520px) { ${rule} }`,
    bp2: (rule) => `@media (min-width: 900px) { ${rule} }`,
  },
})

export const darkTheme= css.theme({
  colors: {
    $gray50: '#252525',
    $gray75: '#2f2f2f',
    $gray100: '#323232',
    $gray200: '#3e3e3e',
    $gray300: '#4a4a4a',
    $gray400: '#5a5a5a',
    $gray500: '#6e6e6e',
    $gray600: '#909090',
    $gray700: '#b9b9b9',
    $gray800: '#e3e3e3',
    $gray900: '#ffffff',
    $blue400: '#2680eb',
    $blue500: '#378ef0',
    $blue600: '#4b9cf5',
    $blue700: '#5aa9fa',
    $red400: '#e34850',
    $red500: '#ec5b62',
    $red600: '#f76d74',
    $red700: '#ff7b82',
    $orange400: '#e68619',
    $orange500: '#f29423',
    $orange600: '#f9a43f',
    $orange700: '#ffb55b',
    $green400: '#2d9d78',
    $green500: '#33ab84',
    $green600: '#39b990',
    $green700: '#3fc89c',
  },
})

css.global({
  body: { 
    backgroundColor: '$gray200',
    color: '$gray900',
    fontFamily: '$body',
  },
});
