import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactNode, useState } from 'react';
import styled from 'styled-components';
import Nav from '../components/Nav';
import NavLink from '../components/NavLink';

interface Props {
  children: {
    logo: ReactNode;
    items: ReactNode;
  };
}

const NavLinks = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin-left: 5px;
  margin-right: 5px;
`;

const Hamburger = styled.div`
  ${(props) => props.theme.media.tablet.min`
    display: none;
  `}
`;

const SideMenu = styled.div<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  min-height: 100vh;
  background-color: #b2bdce;
  width: 150px;

  ${(props) => props.theme.media.tablet.min`
    display: none;
  `}
`;

const NavBar: React.FC<Props> = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { logo, items } = props.children;

  return (
    <>
      <Nav>
        <div>{logo}</div>
        <NavLinks>
          {Array.isArray(items)
            ? items.map((item) => <NavLink to={`/${item}`}>{item}</NavLink>)
            : items}
        </NavLinks>
        <Hamburger>
          <FontAwesomeIcon icon={faBars} onClick={() => setIsOpen(!isOpen)} />
        </Hamburger>
      </Nav>
      <SideMenu isOpen={isOpen}>This is the sidebar</SideMenu>
    </>
  );
};

export default NavBar;
