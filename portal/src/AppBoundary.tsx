import React from 'react'
import styled from 'styled-components'

const AppBoundary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: auto;

  ${(props) => props.theme.mediaQueries.tablet`
    flex-direction: row;
    justify-content: center;
    align-content: center;
  `}

  ${(props) => props.theme.mediaQueries.desktop`
    flex-direction: row;
    padding: 32px;
    justify-content: center;
    align-content: center;
  `}
`

export default AppBoundary
