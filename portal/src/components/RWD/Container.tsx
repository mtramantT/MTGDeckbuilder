import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;

  ${(props) => props.theme.mediaQueries.tablet`
    flex-direction: row;
  `}

  ${(props) => props.theme.mediaQueries.desktop`
    padding: 32px;
  `}
`

export default Container
