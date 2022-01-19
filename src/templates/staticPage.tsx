import * as React from 'react'
import { graphql, PageProps } from 'gatsby'

// import Bio from "../components/bio"
import Layout from '../components/layout'
import Seo from '../components/seo'
import Timestamp from '../components/molecules/Timestamp'

const BlogPostTemplate: React.FC<
  PageProps<GatsbyTypes.StaticPageBySlugQuery>
> = ({ data }) => {
  const post = data.contentfulStaticPages

  if (post === undefined) {
    return <></>
  }
  console.log(post)

  return (
    <Layout>
      <Seo
        title={post.title || ''}
        description={post.body?.childMarkdownRemark?.excerpt || ''}
      />
      <article itemScope itemType="http://schema.org/Article">
        <header>
          <h1 itemProp="headline">{post.title}</h1>
          <Timestamp timestamp={post.createdAt || ''} size="lg" />
        </header>
        <section
          dangerouslySetInnerHTML={{
            __html: post.body?.childMarkdownRemark?.html || '',
          }}
          itemProp="articleBody"
        />
        <hr />
        <footer>{/* <Bio /> */}</footer>
      </article>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query StaticPageBySlug($id: String!) {
    contentfulStaticPages(id: { eq: $id }) {
      body {
        childMarkdownRemark {
          excerpt
          html
        }
      }
      title
      createdAt(formatString: "YYYY-MM-DD")
    }
  }
`
