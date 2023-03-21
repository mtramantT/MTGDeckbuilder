import React, { ReactNode } from 'react'
import styled, { createGlobalStyle, css, ThemeProvider } from 'styled-components'
import theme from '../theme/theme'

interface Props {
  children: ReactNode
}

const GlobalStyleWrapper = createGlobalStyle`
  body {
    ${({ theme }) => css`
      background-color: ${theme.colors.primary};
      color: ${theme.colors.font};
    `}
  }
`
const Wrapper = styled.div`
  min-height: 100vh;
`

const ThemeBoundary: React.FC<Props> = (props: Props) => {
  const { children } = props
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyleWrapper />
      <Wrapper>{children}</Wrapper>
    </ThemeProvider>
  )
}

export default ThemeBoundary