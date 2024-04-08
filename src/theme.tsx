import { createTheme } from '@mantine/core'

export const colors = [
  "#e5f4ff",
  "#cde2ff",
  "#9bc2ff",
  "#64a0ff",
  "#3984fe",
  "#1d72fe",
  "#0969ff",
  "#0058e4",
  "#004ecc",
  "#0043b5"
]

export const siteTheme = createTheme({
  fontSizes: {
    xs: '12px',
    sm: '16px',
    md: '18px',
    lg: '20px',
    xl: '22px',
  },
  // fontFamily: 'Barlow Semi Condensed", sans-serif',
  white: '#fff',
  black: '#000',
  primaryColor: 'theme',
  defaultRadius: 0,
  colors: {
    theme: [
      "#e5f4ff",
      "#cde2ff",
      "#9bc2ff",
      "#64a0ff",
      "#3984fe",
      "#1d72fe",
      "#0969ff",
      "#0058e4",
      "#004ecc",
      "#0043b5"
    ]
  },
  primaryShade: { light: 9 },
  shadows: {
    md: '4px 4px 0px #000',
    xl: '5px 5px 3px rgba(0, 0, 0, .25)',
  },
  spacing: {},
})