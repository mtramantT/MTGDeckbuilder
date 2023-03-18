import styled, { css } from 'styled-components'

export type GridProps = Partial<{ columns: number; growth: string, gridGap: string }>

interface Props {
  mobile?: GridProps
  desktop?: GridProps
  tablet?: GridProps
}

const GridContainer = styled.div<Props>`
  display: grid;
  grid-template-columns: ${(props) => props.mobile?.growth};
  grid-gap: ${(props) => props.mobile?.gridGap};
  ${(props) =>
    props.theme.mediaQueries.tablet(
      `grid-template-columns: repeat(${props.tablet?.columns}, ${
        props.tablet?.growth
      });
      grid-gap: ${props.tablet?.gridGap}`,
    )}
  ${(props) =>
    props.theme.mediaQueries.desktop(
      `grid-template-columns: repeat(${props.desktop?.columns}, ${
        props.desktop?.growth
      });
      grid-gap: ${props.desktop?.gridGap}
      `,
    )}
`

GridContainer.defaultProps = {
  mobile: { columns: 1, growth: '1fr', gridGap: '5px' },
  tablet: { columns: 2, growth: '1fr', gridGap: '5px' },
  desktop: { columns: 3, growth: '1fr', gridGap: '5px' },
}

export const getGridProps = (columns: number, growth?: string, gridGap?: string): GridProps => {
  return { 
    columns, 
    growth: growth || '1fr', 
    gridGap: gridGap || '5px' }
}

export default GridContainer
