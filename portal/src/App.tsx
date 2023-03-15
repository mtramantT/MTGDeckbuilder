import React from 'react';
import { ThemeProvider } from 'styled-components';
import CardViewer from './components/CardViewer/CardViewer';
import Box from './components/RWD/Box';
import { theme } from './components/RWD/constants';
import Container from './components/RWD/Container';
import styled, { ThemeProvider } from "styled-components";

const fetchCall = () => {
  const id = "85a9d667-5cc0-4a3a-a722-24616993943e?85a9d667-5cc0-4a3a-a722-24616993943e";
  fetch(`http://localhost:8080/scryfall/cards/cards/${id}`).then((response) => response.text()).then((body) => console.log(body))
}

function App() {
  return (
    <div>
      MTG DeckBuilder Portal
      <button onClick={() => fetchCall()}>click me</button>
      <ThemeProvider theme={DefaultTheme}>
      <Container>
        <Box>Box 1</Box>
        <Box>Box 2</Box>
        <Box>Box 3</Box>
      </Container>
    </ThemeProvider>
    </div>
  )
};

export default App;
