import React from 'react'
import { ThemeProvider } from 'styled-components'
import AppContainer from './AppWrappers/AppContainer'
import mediaQueries from './AppWrappers/Media'
import Nav from './AppWrappers/UI/Nav'

const tempTheme = { mediaQueries }

function App() {
  return (
    <ThemeProvider theme={tempTheme}>
      <AppContainer>
        <div>
          <Nav>
            <div>T-Portal Logo</div>
          </Nav>
        </div>
      </AppContainer>
    </ThemeProvider>
  )
}

export default App
