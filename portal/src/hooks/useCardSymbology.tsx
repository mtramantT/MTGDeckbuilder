import { useState, useEffect } from 'react'
import { CardSymbols } from '../types'

const defaultState = [] as CardSymbols

const useMyHook = (/* arguments here */) => {
  const [symbols, setSymbols] = useState<CardSymbols>(defaultState)

  useEffect(
    () => {
      /* code to run on mount and/or when state changes */
    },
    [
      /* variables to watch for changes here */
    ],
  )

  return { symbols, setSymbols }
}

export default useMyHook
