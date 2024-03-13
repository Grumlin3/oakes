import { createTheme } from '@mantine/core'

/**
 * Theme overrides for the Mantine framework
 *
 * @note - @mantine/colors-generator is an expensive import, rather than compiling it, use the commented line to log
 *         out the desired color list and then uncomment it again.
 */
export const theme = createTheme({
  fontFamily: 'CircularXXWeb, sans-serif',
  fontFamilyMonospace: 'Pt Mono, Courier, monospace',
  fontSizes: {
    xs: '12px',
    sm: '16px',
    md: '18px',
    lg: '20px',
    xl: '22px',
  },
  headings: {
    fontFamily: 'Friends, sans-serif',
    sizes: {
      h3: { lineHeight: '30px', fontSize: '25px' },
    },
  },
  white: '#fff',
  black: '#000',
  primaryColor: 'flatfile-electric',
  defaultRadius: 0,
  colors: {
    'flatfile-electric': [
      '#efedff',
      '#dbd9fa',
      '#b3aeed',
      '#8982e2',
      '#655cd8',
      '#5044d2',
      '#4438d0',
      '#352bb9',
      '#2e25a6',
      '#241f94',
    ],
    dark: ['#fff', '#efeff3', '#efeff3', '#454545', '#454545', '#000', '#000', '#000', '#000', '#000'],
    gray: ['#F6F8FC', '#E8EDF4', '#D7DEE8', '#CAD0DC', '#B4BCCC', '#8B93A4', '#616A7D', '#404857', '#303744', '#000'],
  },

  primaryShade: { light: 6 },

  shadows: {
    md: '4px 4px 0px #000',
    xl: '5px 5px 3px rgba(0, 0, 0, .25)',
  },

  // defaultRadius: 0,
  spacing: {},
})