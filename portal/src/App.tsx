import React from 'react'
import { ThemeProvider } from 'styled-components'
import AppBoundary from './AppBoundary'
import CardDetails from './components/CardViewer/CardDetails/CardDetails'
import CardViewer from './components/CardViewer/CardViewer'
import Box from './components/RWD/Box'
import { theme } from './components/RWD/constants'
import Container from './components/RWD/Container'

// Const fetchCall = () => {
//   Const id = "85a9d667-5cc0-4a3a-a722-24616993943e?85a9d667-5cc0-4a3a-a722-24616993943e";
//   fetch(`http://localhost:8080/scryfall/cards/cards`).then((response) => response.text()).then((body) => console.log(body))
// }

const tempUri =
  'https://cards.scryfall.io/normal/front/a/4/a4da49b6-69eb-4dea-b52e-26dd69e05d0c.jpg?1573512468'
const tempUri2 =
  'https://cards.scryfall.io/small/front/a/4/a4da49b6-69eb-4dea-b52e-26dd69e05d0c.jpg?1573512468'

const sampleCard = {
  name: 'Cosmos Elixir',
  mana_cost: '{4}',
  cmc: 4.0,
  type_line: 'Artifact',
  oracle_text: 'At the beginning of your end step, draw a card if your life total is greater than your starting life total. Otherwise, you gain 2 life.',
  power: null,
  toughness: null,
  image_uris: {
      small: 'https://cards.scryfall.io/small/front/8/5/85a9d667-5cc0-4a3a-a722-24616993943e.jpg?1628380188',
      normal: 'https://cards.scryfall.io/normal/front/8/5/85a9d667-5cc0-4a3a-a722-24616993943e.jpg?1628380188',
  }
}

function App() {
  return (
    <div>
      MTG DeckBuilder Portal
      {/* <button onClick={() => fetchCall()}>click me</button> */}
      <ThemeProvider theme={theme}>
        {/* <Container>
        <Box>Box 1</Box>
      </Container> */}
        <AppBoundary>
          <div>
            {/* <CardViewer /> */}
            <div>
              <CardDetails card={sampleCard}/>
            </div>
          </div>
        </AppBoundary>
      </ThemeProvider>
    </div>
  )
}

export default App
