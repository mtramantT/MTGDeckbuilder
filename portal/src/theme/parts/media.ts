export interface AppMedia {
  mobile: (style: TemplateStringsArray) => string;
  tablet: (style: TemplateStringsArray) => string;
  desktop: (style: TemplateStringsArray) => string;
  wideScreen: (style: TemplateStringsArray) => string;
}

const breakpoints = {
    sm: '400px', // Mobile
    md: '600px', // Tablet
    lg: '960px', // Desktop 
    xlg: '1280px', // Widescreen
}
  
export const applyMediaStyle = (breakpoint: string, styles: TemplateStringsArray) => `
    @media only screen and (min-width: ${breakpoint}) {
        ${styles}
    }
`

const mobile = (style: TemplateStringsArray) => applyMediaStyle(breakpoints.sm, style);
const tablet = (style: TemplateStringsArray) => applyMediaStyle(breakpoints.md, style);
const desktop = (style: TemplateStringsArray) => applyMediaStyle(breakpoints.lg, style);
const wideScreen = (style: TemplateStringsArray) => applyMediaStyle(breakpoints.xlg, style);

const media: AppMedia = {mobile, tablet, desktop, wideScreen}
export default media;