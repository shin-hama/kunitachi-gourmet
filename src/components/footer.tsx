import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'

import UndecoratedLink from './atoms/UndecoratedLink'

const form =
  'https://docs.google.com/forms/d/e/1FAIpQLSf3QzB_-Gfv0uwRh0_ixEiAyTtmIcgGM6P2HtTlDJIf7YrmHA/viewform?usp=sf_link'

const Footer = () => {
  const { allContentfulStaticPages } = useStaticQuery<GatsbyTypes.FooterQuery>(
    graphql`
      query Footer {
        allContentfulStaticPages {
          nodes {
            slug
            title
          }
        }
      }
    `
  )

  return (
    <Box>
      <Stack>
        <Stack
          direction="row"
          justifyContent="center"
          spacing={2}
          sx={{
            a: {
              textDecoration: 'none',
              color: 'inherit',
              font: 'inherit',
            },
          }}>
          <UndecoratedLink to="/">
            <Typography>Home</Typography>
          </UndecoratedLink>
          {allContentfulStaticPages.nodes.map(
            page =>
              page.slug && (
                <UndecoratedLink key={page.slug} to={page.slug}>
                  <Typography>{page.title}</Typography>
                </UndecoratedLink>
              )
          )}
          <a href={form} target="_blank" rel="noopener noreferrer">
            <Typography>お問い合わせ</Typography>
          </a>
        </Stack>
        <Typography>
          {`© ${new Date().getFullYear()}, Built with `}
          <a
            href="https://www.gatsbyjs.com"
            target="_blank"
            rel="noopener noreferrer">
            Gatsby
          </a>
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer
