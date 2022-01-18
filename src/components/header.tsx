import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const UndecoratedLink = styled(Link)({
  textDecoration: 'none',
})

const Header = () => {
  return (
    <UndecoratedLink to="/">
      <Box sx={{ display: 'grid' }}>
        <StaticImage
          src={'../images/header.jpg'}
          alt=""
          style={{
            gridArea: '1/1',
            // You can set a maximum height for the image, if you wish.
            // maxHeight: 600,
          }}
          layout="fullWidth"
          // You can optionally force an aspect ratio for the generated image
          aspectRatio={3 / 1}
          formats={['auto', 'webp', 'avif']}
        />
        <Box
          sx={{
            // By using the same grid area for both, they are stacked on top of each other
            gridArea: '1/1',
            position: 'relative',
            // This centers the other elements inside the hero component
            placeItems: 'center',
            display: 'grid',
          }}>
          <Box
            sx={{
              width: '100%',
              textAlign: 'center',
              backgroundColor: 'rgba(0,0,0, 0.2)',
            }}>
            <Typography variant="h1" color="white">
              国立グルメブログ
            </Typography>
          </Box>
        </Box>
      </Box>
    </UndecoratedLink>
  )
}

export default Header
