import React from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import { theme } from '../theme';

interface Props { }

const Wrapper = styled.div`
    min-height: 100vh;
    ${({ theme }) =>
        css`
            background-color: ${theme.colors.primary};
            color: ${(props) => props.theme.colors.font};
        `
    }
`;

const ThemeBoundary: React.FC<Props> = (props: Props) => {
    return (
        <ThemeProvider theme={theme}>
            <Wrapper>Test</Wrapper>
        </ThemeProvider>
    );
}

export default ThemeBoundary;
