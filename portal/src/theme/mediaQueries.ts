import {default as media} from "../AppWrappers/Media";

const mediaQueries = {
    mediaQueries: media,
    applyAllMedia: () => '',
}

export type MediaQueries = typeof mediaQueries;
export default mediaQueries;