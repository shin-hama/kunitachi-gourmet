import * as React from 'react'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'

import Header from './header'
import Footer from './footer'

type Props = {
  children: React.ReactElement[]
}
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Stack spacing={4}>
        <Header />
        <Container>{children}</Container>
        <Footer />
      </Stack>
    </div>
  )
}

export default Layout
