const breakpoints = {
  sm: '600px',
  md: '960px',
  lg: '1280px',
}

export const theme = {
  colors: {
    primary: '#0070f3',
    background: '#f1f1f1',
  },
  mediaQueries: {
    tablet: (style: TemplateStringsArray) =>
      `@media screen and (min-width: ${breakpoints.sm}) { ${style} }`,
    desktop: (style: TemplateStringsArray) =>
      `@media screen and (min-width: ${breakpoints.md}) { ${style} }`,
    large: (style: TemplateStringsArray) =>
      `@media screen and (min-width: ${breakpoints.lg}) { ${style} }`,
  },
}
