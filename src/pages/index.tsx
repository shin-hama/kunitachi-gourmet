import * as React from "react"
import { PageProps, Link, graphql } from "gatsby"

// import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

type DataProps = {
  site: {
    buildTime: string
  }
}
const BlogIndex: React.FC<PageProps<GatsbyTypes.BlogIndexQuery>> = ({ data, location }) => {
  const siteTitle = data.site?.siteMetadata?.title || `Title`
  const posts = data.allMicrocmsBlogPosts.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        {/* <Bio /> */}
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      {/* <Bio /> */}
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.title || post.slug

          return (
            <li key={post.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={post.slug || "/"} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.publishedAt}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: post.description || "",
                    }}
                    itemProp="description"
                  />
                </section>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndex {
    site {
      siteMetadata {
        title
      }
    }
    allMicrocmsBlogPosts(sort: { fields: [publishedAt], order: DESC }) {
      nodes {
        description
        slug
        publishedAt(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`
