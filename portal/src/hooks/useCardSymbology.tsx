import { useContext, useEffect } from 'react'
import CardSymbologyContext from '../context/CardSymbologyContext'
import { CardSymbols } from '../types'

const defaultState = [] as CardSymbols

const useMyHook = (/* arguments here */) => {
  const symbols = useContext(CardSymbologyContext)
  // const [symbols, setSymbols] = useState<CardSymbols>(defaultState)

  // Uncomment below if you need to update when list is empty.
  useEffect(
    () => {},
    [
      /* variables to watch for changes here */
    ],
  )

  return { symbols, setSymbols }
}

export default useMyHook
