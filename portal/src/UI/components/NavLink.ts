import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom'

type Props = {
  // add your component props here
};

const NavLink = styled(Link)<Props>`
  color: ${props => props.theme.colors.font};
  text-decoration: none;
`;

export default NavLink;