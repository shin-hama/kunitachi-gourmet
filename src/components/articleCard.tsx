import * as React from 'react'
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import UndecoratedLink from './atoms/UndecoratedLink'
import Timestamp from './molecules/Timestamp'

type Props = {
  title: string
  slug: string
  publishedAt: string
  image?: ImageDataLike
}
const ArticleCard: React.FC<Props> = ({
  title,
  slug,
  publishedAt,
  image: imageData,
}) => {
  const image = imageData && getImage(imageData)
  return (
    <Card>
      <UndecoratedLink to={slug}>
        <Grid container spacing={1}>
          <Grid item xs={4}>
            {image && (
              <GatsbyImage image={image} alt="" style={{ height: '100%' }} />
            )}
          </Grid>
          <Grid item xs={8}>
            <Box marginTop={1} marginBottom={1}>
              <Timestamp timestamp={publishedAt} />
              <Typography variant="h4">{title}</Typography>
            </Box>
          </Grid>
        </Grid>
      </UndecoratedLink>
    </Card>
  )
}

export default ArticleCard
