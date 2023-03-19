// theme.ts

// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({ config })

export default theme

const colors = {
  primary: {
    100: "#F7FAFC",
    200: "#EDF2F7",
    300: "#E2E8F0",
    400: "#CBD5E0",
    500: "#A0AEC0",
    600: "#718096",
    700: "#4A5568",
    800: "#2D3748",
    900: "#1A202C",
  },
  secondary: {
    100: "#E6FFFA",
    200: "#B2F5EA",
    300: "#81E6D9",
    400: "#4FD1C5",
    500: "#38B2AC",
    600: "#319795",
    700: "#2C7A7B",
    800: "#285E61",
    900: "#234E52",
  },
};

const fonts = {
  body: "system-ui, sans-serif",
  heading: "Georgia, serif",
  mono: "Menlo, monospace",
}

const light = {
  colors: {
    text: "black",
    background: "#EDF2F7",
    primary: colors.primary[500],
    secondary: colors.secondary[500],
  },
};

const dark = {
  colors: {
    text: "#EDF2F7",
    background: "#2D3748",
    primary: colors.primary[200],
    secondary: colors.secondary[200],
  },
};