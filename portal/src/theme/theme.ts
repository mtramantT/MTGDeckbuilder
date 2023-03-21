import colors from "./colors";
import mediaQueries from "./mediaQueries";

const theme = { colors, mediaQueries }

export type AppTheme = typeof theme;
export default theme;
