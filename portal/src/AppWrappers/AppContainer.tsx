import React, { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  children: ReactNode
}

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  min-height: 100vh;
  padding: 0 16px;

  ${(props) => props.theme.mediaQueries.tablet`
    padding: 0 32px;
  `}
  ${(props) => props.theme.mediaQueries.desktop`
    padding: 0 64px;
  `}
  ${(props) => props.theme.mediaQueries.wideScreen`
    padding: 0 128px;
  `}
`

const AppContainer: React.FC<Props> = (props: Props) => {
  const { children } = props
  return <Container>{children}</Container>
}

export default AppContainer;
