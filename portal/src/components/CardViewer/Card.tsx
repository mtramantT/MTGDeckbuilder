import React from 'react'
import styled from 'styled-components'

interface Props {
  imageUri: string
}

const Wrapper = styled.span`
  margin-right: 5px;
`
const Card: React.FC<Props> = (props: Props) => {
  const { imageUri } = props
  return (
    <Wrapper>
      <img src={imageUri} alt='card' />
    </Wrapper>
  )
}

export default Card
