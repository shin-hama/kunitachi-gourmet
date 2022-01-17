import * as React from 'react'
import type { GatsbySSR } from 'gatsby'

import { MyThemeProvider } from '../contexts/MyThemeProvider'

export const wrapRootElement: GatsbySSR['wrapRootElement'] = ({ element }) => {
  return <MyThemeProvider>{element}</MyThemeProvider>
}
