import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'

const BlogPage = () => {

  const data = useStaticQuery(
    graphql`
query MyQuery {
  allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      body
      id
    }

  }
}

`
  )

  return (
    <Layout pageTitle="My Blog Posts">
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>Posted: {node.frontmatter.date}</p>
            <MDXRenderer>
              {node.body}
            </MDXRenderer>
          </article>
        ))
      }
    </Layout>
  )
}


export default BlogPage