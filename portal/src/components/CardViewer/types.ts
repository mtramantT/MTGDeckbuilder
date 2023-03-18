export interface Card {
  name: string
  type_line: string
  mana_cost: string
  cmc: number
  oracle_text: string
  power: any
  toughness: any
  image_uris: ImageUris
}

export interface ImageUris {
  small: string
  normal: string
}
