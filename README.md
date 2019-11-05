This is a sample Gatsby site that I am using to illustrate the problem I'm having in https://spectrum.chat/gatsby-js/general/how-to-manipulate-markdown-front-matter~c3277875-7755-4797-b16e-faf8ba1b7a55.

To see the problem, follow these steps:
1. Clone this repository.
1. Run `yarn install` to install the dependencies.
1. Run `yarn develop` and open a web browser to http://localhost:8000.
1. Note that the page at / does not have a value specified for the `myMarkdownField` front matter field.
1. Open a web browser to [This graphql query](http://localhost:8000/___graphql?query=query%20MyQuery%20%7B%0A%20%20allMarkdownRemark%20%7B%0A%20%20%20%20nodes%20%7B%0A%20%20%20%20%20%20frontmatter%20%7B%0A%20%20%20%20%20%20%20%20path%0A%20%20%20%20%20%20%20%20title%0A%20%20%20%20%20%20%20%20myMarkdownField%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A), run it, and see that the node does in fact have a value specified for the `myMarkdownField` field.
