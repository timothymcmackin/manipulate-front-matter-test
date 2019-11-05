import { graphql } from 'gatsby';
import React from "react";
import Layout from "../components/layout"

export default function Template({ data }) {
  const { markdownRemark: page } = data;
  return(
    <Layout>
    <h1>{page.frontmatter.title}</h1>
    <div
      className="content"
      dangerouslySetInnerHTML={{ __html: page.html }}
    />
    <p>Front matter fields:
    <ul>
      {Object.keys(page.frontmatter).map((key) => {
        return (<li key={key}>{key}: {page.frontmatter[key] ? page.frontmatter[key] : "null"}</li>);
      })}
    </ul>
    </p>
    </Layout>
  )
}

export const pageQuery = graphql`
query pageQuery($path: String!) {
  markdownRemark(frontmatter: { path: { eq: $path } }) {
    html
    frontmatter {
      path
      title
      myMarkdownField
    }
  }
}
`;
