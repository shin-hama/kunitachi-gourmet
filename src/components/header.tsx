import * as React from 'react'
import { Link } from 'gatsby'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import HeaderImage from '../images/header.jpg'

const UndecoratedLink = styled(Link)({
  textDecoration: 'none',
})

const Header = () => {
  return (
    <UndecoratedLink to="/">
      <Box
        sx={{
          backgroundImage: `url(${HeaderImage})`,
          backgroundSize: 'cover',
          height: '40vh',
          display: 'flex',
        }}>
        <Box
          sx={{
            mt: 'auto',
            mb: 'auto',
            width: '100%',
            textAlign: 'center',
            backgroundColor: 'rgba(0,0,0, 0.2)',
          }}>
          <Typography variant="h1" color="white">
            国立グルメブログ
          </Typography>
        </Box>
      </Box>
    </UndecoratedLink>
  )
}

export default Header
