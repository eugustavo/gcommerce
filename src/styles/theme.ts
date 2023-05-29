import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    bgAlert: '#2B3445',
    bgHeader: '#FFFFFF',
    bgPink: '#D23F57',
    textLow: '#7D879C',
  },
  fonts: {
    body: 'Open Sans',
    heading: 'Open Sans',
  },
  styles: {
    global: {
      body: {
        bg: '#F4F7FB',
        color: '#2B3445',
      },
    },
  },
})
