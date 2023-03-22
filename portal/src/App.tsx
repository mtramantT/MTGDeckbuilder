import React from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'
import { ThemeBoundary } from './AppBoundaries'
import RouterBoundary from './AppBoundaries/RouterBoundary'
import { Nav } from './UI'

function App() {
  return (
    <ThemeBoundary>
      <RouterBoundary />
    </ThemeBoundary>
  )
}

export default App
