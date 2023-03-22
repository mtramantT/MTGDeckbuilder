import React from 'react'
import { ThemeBoundary } from './AppBoundaries'
import { Nav } from './UI'
import AppContainer from './UI/AppContainer'

function App() {
  return (
    // <ThemeProvider theme={tempTheme}>
    //   <div style={{ backgroundColor: '#d9e8ff', minHeight: '100vh' }}>
    //     <Nav>
    //       <div>T-Portal Logo</div>
    //     </Nav>
    //   </div>
    // </ThemeProvider>
    <ThemeBoundary>
      <Nav>
        <div>Portal-Logo</div>
      </Nav>
    </ThemeBoundary>
  )
}

export default App
