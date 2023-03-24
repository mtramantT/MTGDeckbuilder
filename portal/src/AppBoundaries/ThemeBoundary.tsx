import React, { ReactNode } from 'react';
import styled, { createGlobalStyle, css, ThemeProvider } from 'styled-components';
import theme from '../theme';

interface Props {
   children: ReactNode;
}

const GlobalStyleWrapper = createGlobalStyle`
   @font-face {
      font-family: 'Kameron';
      src: url('./fonts/kameron-regular.ttf') format('truetype');
      font-weight: 400;
   }

   @font-face {
      font-family: 'Kameron';
      src: url('./fonts/kameron-bold.ttf') format('truetype');
      font-weight: 700;
   }
  body {
    box-sizing: border-box;
    margin: 0;
    width: 100%;
    ${({ theme }) => css`
       background-color: ${theme.colors.primary};
       color: ${theme.colors.font};
    `}
    font-family: 'Kameron', sans-serif;
  }
`;
const Wrapper = styled.div`
   min-height: 100vh;
`;

const ThemeBoundary: React.FC<Props> = (props: Props) => {
   const { children } = props;
   return (
      <ThemeProvider theme={theme}>
         <GlobalStyleWrapper />
         <Wrapper>{children}</Wrapper>
      </ThemeProvider>
   );
};

export default ThemeBoundary;
