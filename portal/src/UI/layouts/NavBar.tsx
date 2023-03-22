import React, { ReactNode } from 'react';
import Nav from '../components/Nav';

interface Props {
  children: {
    logo: ReactNode;
    items: ReactNode;
  };
}

const NavBar: React.FC<Props> = (props: Props) => {
  const { logo, items } = props.children;
  return (
    <Nav>
      <div>{logo}</div>
      <div>{items}</div>
      <div>Button</div>
    </Nav>
  );
};

export default NavBar;
