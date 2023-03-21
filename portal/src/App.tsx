import React from 'react'
import { ThemeProvider } from 'styled-components'
import ThemeBoundary from './AppBoundaries/themeBoundary'
import AppContainer from './AppWrappers/AppContainer'
import mediaQueries from './AppWrappers/Media'
import Nav from './AppWrappers/UI/Nav'

const tempTheme = { mediaQueries }

function App() {
  return (
    // <ThemeProvider theme={tempTheme}>
    //   <div style={{ backgroundColor: '#d9e8ff', minHeight: '100vh' }}>
    //     <Nav>
    //       <div>T-Portal Logo</div>
    //     </Nav>
    //   </div>
    // </ThemeProvider>
    <ThemeBoundary />
  )
}

export default App;
