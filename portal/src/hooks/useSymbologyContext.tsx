import React, { useState } from 'react'

interface Props {}

interface Symbols {
  symbol: string
  svg_url: string
}

const useSymbologyContext = (query: string[]) => {
  const [symbols, setSymbols] = useState<Symbols[]>([])
  const SymbolContext = React.createContext([])
  return SymbolContext
}

export default useSymbologyContext
