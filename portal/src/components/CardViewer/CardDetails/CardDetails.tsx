import React from 'react'
import styled from 'styled-components'
import { Card } from '../types'
import {CardImage} from './sub'

interface Props {
  imgUri: string;
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
  const { imgUri } = props
  return (
    <Wrapper>
      <CardContainer>Card Container</CardContainer>
      <TextContainer>Text Container</TextContainer>
    </Wrapper>
  )
}

export default CardDetails
