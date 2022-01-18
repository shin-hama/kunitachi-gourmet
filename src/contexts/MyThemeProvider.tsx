import * as React from 'react'
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from '@mui/material/styles'

let theme = createTheme({
  palette: {
    primary: {
      main: '#f44336',
    },
  },
})

// responsiveFontSize() 関数で画面サイズに合わせてフォントサイズが動的に変わる設定が付与された Theme が取得可能
theme = responsiveFontSizes(theme)

export const MyThemeProvider: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
