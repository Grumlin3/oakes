import { createTheme } from '@mantine/core'

export const theme = createTheme({
  fontSizes: {
    xs: '12px',
    sm: '16px',
    md: '18px',
    lg: '20px',
    xl: '22px',
  },
  white: '#fff',
  black: '#000',
  primaryColor: 'theme',
  defaultRadius: 0,
  colors: {
    // 'theme': [
    //   "#eef3ff",
    //   "#dce4f5",
    //   "#b9c7e2",
    //   "#94a8d0",
    //   "#748dc1",
    //   "#5f7cb8",
    //   "#5474b4",
    //   "#44639f",
    //   "#39588f",
    //   "#2d4b81"
    // ]
    theme: [
      "#e6f9fe",
      "#daeef4",
      "#b7d9e4",
      "#91c4d3",
      "#72b1c5",
      "#5da5bd",
      "#50a1ba",
      "#3f8ca4",
      "#317c94",
      "#176c84"
    ]
  },
  primaryShade: { light: 9 },
  shadows: {
    md: '4px 4px 0px #000',
    xl: '5px 5px 3px rgba(0, 0, 0, .25)',
  },
  spacing: {},
})