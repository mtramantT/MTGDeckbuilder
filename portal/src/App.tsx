import React from 'react';
import { ThemeBoundary } from './AppBoundaries';
import RouterBoundary from './AppBoundaries/RouterBoundary';

function App() {
  return (
    <ThemeBoundary>
      <RouterBoundary />
    </ThemeBoundary>
  );
}

export default App;
