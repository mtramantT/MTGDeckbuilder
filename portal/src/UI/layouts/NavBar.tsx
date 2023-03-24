import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactNode, useState } from 'react';
import styled from 'styled-components';
import { isObject } from '../../types';
import Nav from '../components/Nav';
import NavLink from '../components/NavLink';

interface Props {
   children: {
      logo: ReactNode | CustomLogo;
      items: string[];
   };
}

interface CustomLogo {
   to: string;
   component: ReactNode;
}

const NavLinks = styled.div`
   display: none;
   flex-flow: row nowrap;
   margin-left: 5px;
   margin-right: 5px;
   ${(props) => props.theme.media.tablet.min`
    display: flex;
  `}
`;

const Hamburger = styled.div`
   margin-left: 10px;
   padding-top: 1px;
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

const SubNav = styled.div<{ isOpen: boolean }>`
   display: ${(props) => (props.isOpen ? 'flex' : 'none')};
   position: absolute;
   background-color: #b2bdce;
   width: 100%;
   min-height: 4vh;
   align-items: center;
   padding: 0 5px;

   ${(props) => props.theme.media.tablet.min`
    display: none;
  `}
`;

const NavBar: React.FC<Props> = ({ children }: Props) => {
   const [isOpen, setIsOpen] = useState(false);
   const { logo, items } = children;

   return (
      <div style={{ position: 'relative' }}>
         <Nav>
            <NavLink to='/'>{!isCustomLogo(logo) && logo}</NavLink>
            <NavLinks>
               {Array.isArray(items)
                  ? items.map((item) => {
                       console.log(item);
                       return <NavLink to={`/${item}`}>{item}</NavLink>;
                    })
                  : items}
            </NavLinks>
            <Hamburger>
               <FontAwesomeIcon icon={faBars} onClick={() => setIsOpen(!isOpen)} />
            </Hamburger>
         </Nav>
         <SubNav isOpen={isOpen}>This is the sidebar</SubNav>
      </div>
   );
};

// Helpers
const isCustomLogo = (val: any): val is CustomLogo =>
   isObject(val) && 'to' in val && 'component' in val;

export default NavBar;
