import React, { useState } from 'react';
import styled from 'styled-components';

const COLOR1 = '#c4fbfb7c';
const COLOR2 = '#ff8484d6';

interface Props {
   label?: string
   children?: string
}

type Base = RequireOne<Props, 'children' | 'label'>;
type BaseProps = Base & {};

const Wrapper = styled.div``;

const Button = styled.button<{ color: string }>`
   display: block;
   font-family: Arial, Helvetica, sans-serif;
   font-size: 24px;
   position: relative;
   height: 60px;
   width: 220px;
   border-radius: 50px;
   margin-left: auto;
   margin-right: auto;
   background-color: ${({ color }) => color};
`;


const CardSearch: React.FC<BaseProps> = (props: BaseProps) => {
   const { label, children } = props;
   const [color, setColor] = React.useState(COLOR1);
   const child = label || children;

   return (
      <Wrapper>
         Testing the card search
         <Button color={color} onMouseDown={() => setColor(COLOR2)} onMouseUp={() => setColor(COLOR1)}>{child}</Button>
      </Wrapper>
   );
};

type RequireOne<T, K extends keyof T = keyof T> = Pick<T, Exclude<keyof T, K>> & { [P in K]-?: Required<Pick<T, P>> & Partial<Record<Exclude<K, P>, undefined>> }[K];

export default CardSearch;
