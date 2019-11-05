exports.mutateSource = ({markdownNode}) => {
  const defaultValue = "This is the default value.";
  if (!markdownNode.frontmatter.myMarkdownField) {
    markdownNode.frontmatter.myMarkdownField = defaultValue;
  }
}
