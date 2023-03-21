import colors, { AppColors } from "./parts/colors";
import media, { AppMedia } from "./parts/media";

export interface AppTheme {
    colors: AppColors;
    media: AppMedia;
}

const theme: AppTheme = { colors, media }

export default theme;
