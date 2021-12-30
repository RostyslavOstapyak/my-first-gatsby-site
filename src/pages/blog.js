import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

const BlogPage = ({ data }) => {

    console.log(data);
    return (
        <Layout pageTitle="My Blog Posts">
            <ul>
                {
                    data.allFile.nodes.map(node => {
                        if (node.sourceInstanceName === 'blog') return (
                            <li key={node.name}>
                                {node.name}
                            </li>
                        )
                        return null
                    })
                }
            </ul>
        </Layout>
    )
}

export const query = graphql`
  query {
    allFile {
      nodes {
        name
        sourceInstanceName
      }
    }
  }
`

export default BlogPage