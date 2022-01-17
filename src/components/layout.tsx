import * as React from 'react'
import { WindowLocation } from '@reach/router'
import Container from '@mui/material/Container'

import Header from './header'

type Props = {
  location: WindowLocation
  title?: string
  children: React.ReactElement[]
}
const Layout: React.FC<Props> = ({ location, title, children }) => {
  return (
    <div>
      <header className="global-header">
        <Header />
      </header>
      <Container>
        <main>{children}</main>
      </Container>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
