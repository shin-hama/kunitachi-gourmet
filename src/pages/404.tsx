import * as React from 'react'
import { PageProps, graphql } from 'gatsby'

import Layout from '../components/layout'
import Seo from '../components/seo'

const NotFoundPage: React.FC<PageProps<GatsbyTypes.NotFoundQuery>> = ({
  data,
}) => {
  return (
    <Layout>
      <Seo title="404: Not Found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query NotFound {
    site {
      siteMetadata {
        title
      }
    }
  }
`
