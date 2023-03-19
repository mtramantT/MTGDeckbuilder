interface CardSymbol {
    symbol: string;
    svg_uri: string;
}

export const isCardSymbol = (obj: any): obj is CardSymbol => {
    return (
        obj !== null && 
            typeof obj === 'object' && 
            'symbol' in obj &&
            'svg_url' in obj
    );
}

export type CardSymbols = CardSymbol[];
export default CardSymbol;
