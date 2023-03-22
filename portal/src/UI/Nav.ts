import styled from 'styled-components';

type Props = {
  // add your component props here
};

const Nav = styled.nav<Props>`
    background-color: ${(props) => props.theme.colors.secondary};
    padding: 0.66rem 0.5rem;
`;

export default Nav;