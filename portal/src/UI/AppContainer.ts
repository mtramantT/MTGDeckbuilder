import styled, { css } from 'styled-components';

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
    flex-flow: column nowrap;
    min-height: 100vh;
    padding: 0 16px;

    ${(props) => 
        css`
            ${props.theme.media.tablet.min`
                padding: 0 32px;
            `};
            ${props.theme.media.desktop.min`
                padding: 0 64px;
            `}
            ${props.theme.media.wideScreen.min`
                padding: 0 128px;
            `}
        `
    }
`;

export default AppContainer;