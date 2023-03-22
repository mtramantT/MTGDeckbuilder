import styled from 'styled-components';
import {NavLink as Link} from 'react-router-dom'

type Props = {
  // add your component props here
};

const NavLink = styled(Link)<Props>`
  // add your styles here
`;

export default NavLink;