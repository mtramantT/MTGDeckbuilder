import React from 'react'
import styled from 'styled-components'
import { Card } from '../types'
import { CardImage } from './sub'
import TextRow from './sub/TextRow';

interface Props {
  card?: Card;
}

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px;
`
const Columns = styled.div`
  display: inline;
`

const CardDetails: React.FC<Props> = (props: Props) => {
  const { card } = props;
  return (
    <Wrapper>
      <div>Card Container</div>
      <div>
        <TextRow>{card?.name}</TextRow>
        <TextRow>
          <span>{card?.mana_cost}</span>
          <span>{card?.cmc}</span>
        </TextRow>
        <TextRow>{card?.type_line}</TextRow>
        <TextRow>{card?.oracle_text}</TextRow>
        <TextRow>{card?.keywords}</TextRow>
      </div>
    </Wrapper>
  )
}

export default CardDetails;
