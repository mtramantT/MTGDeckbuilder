import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { GridContainer } from '../../AppWrappers/UI'
// import GridContainer, { getGridProps } from '../RWD/GridContainer'
import Card from './Card'

interface Props {}

const Border = styled.div`
  padding: 10px;
  border: 1px solid black;
  background-color: #f1f3f8;
`
const CardViewer: React.FC<Props> = (props: Props) => {
  const [cards, setCards] = useState<string[]>([])
  useEffect(() => {
    const fetchCall = () => {
      fetch('http://localhost:8080/scryfall/cards/cards')
        .then((response) => response.text())
        .then((body) => {
          const data = JSON.parse(body)
          setCards(
            data.data
              .splice(0, 5)
              .map(
                (card: { image_uris: { small: string; normal: string } }) => card.image_uris.small,
              ),
          )
        })
    }
    fetchCall()
  }, [])

  return (
    <Border>
      {/* <GridContainer desktop={getGridProps(5)}>
        {cards.map((card) => (
          <Card imageUri={card} />
        ))}
      </GridContainer> */}
      <GridContainer>
        {cards.map((card) => (
          <Card imageUri={card} />
        ))}
      </GridContainer>
    </Border>
  )
}

export default CardViewer
