import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
   children: ReactNode;
}

const Wrapper = styled.div`
   display: flex;
   background-color: ${(props) => props.theme.colors.secondary};
   padding: 1.25rem 0.5rem;
`;

const Nav: React.FC<Props> = (props: Props) => {
   const { children } = props;
   return <Wrapper>{children}</Wrapper>;
};

export default Nav;
