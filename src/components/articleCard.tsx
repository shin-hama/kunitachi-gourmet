import * as React from 'react'
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import UndecoratedLink from './atoms/UndecoratedLink'

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
        <Grid container>
          <Grid item xs={4}>
            {image && <GatsbyImage image={image} alt="" />}
          </Grid>
          <Grid item xs={8}>
            <CardContent>
              <Typography>{publishedAt}</Typography>
              <Typography variant="h2">{title}</Typography>
            </CardContent>
          </Grid>
        </Grid>
      </UndecoratedLink>
    </Card>
  )
}

export default ArticleCard
