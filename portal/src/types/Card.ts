export interface Card {
    name: string
    type_line: string
    mana_cost: string
    cmc: number
    oracle_text: string
    power: any
    toughness: any
    image_uris: ImageUris
    keywords: string[]
  }
  
export interface ImageUris {
    small: string
    normal: string
}
  
export const isCard = (obj: any): obj is Card => {
    return (
        obj !== null &&
        typeof obj === 'object' &&
        'name' in obj &&
        'type_line' in obj &&
        'mana_cost' in obj &&
        'cmc' in obj &&
        'oracle_text' in obj &&
        'power' in obj &&
        'toughness' in obj &&
        'image_uris' in obj &&
        'keywords' in obj
    );
}

export type Cards = Card[];
