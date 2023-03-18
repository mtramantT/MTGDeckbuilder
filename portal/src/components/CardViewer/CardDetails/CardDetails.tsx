import React from 'react'
import styled from 'styled-components'
import { Card } from '../types'
import { CardImage } from './sub'
import TextRow from './sub/TextRow'

interface Props {
  card?: Card
}

const Wrapper = styled.div`
  /* box-sizing: border-box; */
  display: flex;
  /* align-items: center; */
  gap: 20px;
  padding: 10px;
`

const Description = styled.div`
  position: relative;
  height: 100%;
`

const TextBox = styled.div`
  background-color: #8e8e8f;
  color: white;
  padding: 10px 5px;
  position: absolute;
  border: 1px solid black;
  width: 400px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  font-size: 24px;
`

const Name = styled(TextBox)`
  top: 10px;
`
const ManaCost = styled(TextBox)`
  top: 74px;
`

const CardType = styled(TextBox)`
  top: 274px;
`

const Keywords = styled(TextBox)`
  top: 335px;
`

const OracleText = styled(TextBox)`
  font-size: 20px;
  top: 400px;
`

const CardDetails: React.FC<Props> = (props: Props) => {
  const { card } = props
  return (
    <Wrapper>
      <div>
        <img src={card?.image_uris.normal} />
      </div>
      <Description>
        <Name>{card?.name}</Name>
        <ManaCost>
          <span>{card?.mana_cost}</span>
          <span>{card?.cmc}</span>
        </ManaCost>
        <Keywords>{card?.keywords}</Keywords>
        <CardType>{card?.type_line}</CardType>
        <OracleText>
          {card?.oracle_text.split('\n').map((line) => (
            <div>{line}</div>
          ))}
        </OracleText>
      </Description>
    </Wrapper>
  )
}

export default CardDetails
