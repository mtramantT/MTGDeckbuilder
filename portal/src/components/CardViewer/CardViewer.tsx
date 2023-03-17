import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import GridContainer, { getGridProps } from '../RWD/GridContainer';

interface Props {}

const CardViewer: React.FC<Props> = (props: Props) => {
    const [ cards, setCards ] = useState<string[]>([]);
    useEffect(() => {
        const fetchCall = () => {
            fetch(`http://localhost:8080/scryfall/cards/cards`)
                .then((response) => response.text())
                .then((body) => {
                    const data = JSON.parse(body)
                    setCards(data.data.splice(0, 5).map((card: { image_uris: {small: string, normal: string}; }) => card.image_uris.normal))
                })
          }
        fetchCall();
    }, [])
    return (
        <GridContainer desktop={getGridProps(5)}>
            {cards.map((card) => <span><img src={card} alt="card" /></span>)}
        </GridContainer>
    );
}

export default CardViewer;