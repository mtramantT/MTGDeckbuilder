import styled from 'styled-components';

// Example of using prop extension
// type Props = {
//   test: string;
// };
// const AppContainer = styled.div<Props>`
//   background-color: ${(props) => props.theme.colors.secondary};
//   color: ${(props) => props.test};
// `;

const AppContainer = styled.div`
    display: flex;
`;

export default AppContainer;