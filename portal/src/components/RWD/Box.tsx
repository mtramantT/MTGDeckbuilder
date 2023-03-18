import styled from 'styled-components'

const Box = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 16px;
  padding: 16px;

  ${(props) => props.theme.mediaQueries.tablet`
    flex: 0 1 50%;
    margin-right: 16px;
    margin-bottom: 0;
  `}

  ${(props) => props.theme.mediaQueries.desktop`
    flex: 0 1 33.33%;
  `}
`

export default Box
