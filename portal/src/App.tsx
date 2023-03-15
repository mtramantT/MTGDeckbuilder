import React from 'react';

const fetchCall = () => {
  const id = "85a9d667-5cc0-4a3a-a722-24616993943e?85a9d667-5cc0-4a3a-a722-24616993943e";
  fetch(`http://localhost:8080/scryfall/cards/cards/${id}`).then((response) => response.text()).then((body) => console.log(body))
}

function App() {
  return (
    <div>
      MTG DeckBuilder Portal
      <button onClick={() => fetchCall()}>click me</button>
    </div>
  )
};

export default App;
