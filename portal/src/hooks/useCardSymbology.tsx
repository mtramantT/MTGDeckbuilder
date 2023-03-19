import { createContext, useContext, useEffect, useState } from 'react'
import { CardSymbols } from '../types'

const CardSymbologyContext = createContext([] as CardSymbols)

const useCardSymbology = (/* arguments here */) => {
  const [symbols, setSymbols] = useState<CardSymbols>([] as CardSymbols)

  const fetchCall = () => {
    fetch('http://localhost:8080/scryfall/symbolology/symbols')
      .then((response) => response.text())
      .then((text) => {
        const data = JSON.parse(text)
        setSymbols(data)
      })
  }

  useEffect(() => {
    if (!symbols || symbols.length === 0) {
      fetchCall()
    }
  }, [])

  return { CardSymbologyContext, symbols }
}

export default useCardSymbology
