import React from 'react'
import { ThemeBoundary } from './AppBoundaries'
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
      <AppContainer>TESTING</AppContainer>
    </ThemeBoundary>
  )
}

export default App
