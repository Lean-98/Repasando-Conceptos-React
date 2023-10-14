import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/fact'

export function useFact () {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    getRandomFact().then((newFact) => setFact(newFact))
  }

  useEffect(() => {
    refreshFact()
  }, [])
  return { fact, refreshFact }
}
