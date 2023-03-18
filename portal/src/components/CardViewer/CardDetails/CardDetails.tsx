import React from 'react'
import styled from 'styled-components'
import { Card } from '../types'
import {CardImage} from './sub'

interface Props {
  card: Card;
}

const Wrapper = styled.div`
  box-sizing: border-box;
  position: absolute;
`

const CardContainer = styled.span`
  position: relative;
  right: 5px;
`;
const TextContainer = styled.span`
  position: relative;
  left: 5px;
`;

const Columns = styled.div`
  display: inline;
`

const CardDetails: React.FC<Props> = (props: Props) => {
  const { card } = props
  return (
    <Wrapper>
      <CardContainer>Card Container</CardContainer>
      <TextContainer>
        <div>{card.name}</div>
        <div>{card.mana_cost}</div>
        <div>{card.cmc}</div>
        <div>{card.oracle_text}</div>
        <div>{card.name}</div>
        <div>{card.name}</div>
      </TextContainer>
    </Wrapper>
  )
}

export default CardDetails
