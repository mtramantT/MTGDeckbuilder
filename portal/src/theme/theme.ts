import colors, { Colors } from "./parts/colors";
import media, { Media } from "./parts/media";

export interface Theme {
    colors: Colors;
    media: Media;
}

const theme: Theme = { colors, media }

export default theme;
