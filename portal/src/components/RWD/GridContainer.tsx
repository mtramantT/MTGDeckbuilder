import styled, { css } from 'styled-components'

export type GridProps = Partial<{columns: number, growth: string}>

interface Props {
    mobile?: GridProps;
    desktop?: GridProps;
    tablet?: GridProps;
}

const GridContainer = styled.div<Props>`
  display: grid;
  grid-template-columns: ${props => props.mobile?.growth || '1fr'};
  ${(props) => props.theme.mediaQueries.tablet(`grid-template-columns: repeat(${props.tablet?.columns || 2}, ${props.tablet?.growth || '1fr'})`)}
  ${(props) =>props.theme.mediaQueries.desktop(`grid-template-columns: repeat(${props.desktop?.columns || 3}, ${props.desktop?.growth || '1fr'})`)}
`

export const getGridProps = (columns?: number, growth?: string): GridProps => {
    return {columns, growth};
}

GridContainer.defaultProps = {
    mobile: {columns: 1, growth: '1fr'},
    tablet: {columns: 2, growth: '1fr'},
    desktop: {columns: 3, growth: '1fr'}
}

export default GridContainer
