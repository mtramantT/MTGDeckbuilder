import { useContext, useEffect, useState } from 'react'
import CardSymbologyContext from '../context/CardSymbologyContext'
import { CardSymbols } from '../types'

// should i also add the context here?

const defaultState = [] as CardSymbols

const useCardSymbology = (/* arguments here */) => {
  const symbolContext = useContext(CardSymbologyContext)

  // Uncomment below if you need to update when list is empty.
  const [symbols, setSymbols] = useState<CardSymbols>(symbolContext)
  useEffect(
    () => {
      const fetchCall = () => {
        fetch('http://localhost:8080/scryfall/symbolology/symbols')
          .then((response) => response.text())
          .then((text) => {
            const data = JSON.parse(text)
            setSymbols(data)
          })
      }
      fetchCall()
    },
    [
      /* variables to watch for changes here */
    ],
  )

  return { symbols, setSymbols }
}

export default useCardSymbology
