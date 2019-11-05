const path = require("path")

const markdownPageTemplate = path.resolve(`src/templates/simplePageFromMarkdown.js`);

exports.createPages = async function({ actions, graphql }) {

  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      if (node.frontmatter.path){
        createPage({
          path: node.frontmatter.path,
          component: markdownPageTemplate,
        });
      }
    });

  });


}
