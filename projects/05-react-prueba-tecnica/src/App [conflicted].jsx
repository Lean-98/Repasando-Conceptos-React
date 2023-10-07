import React, { useEffect, useState } from 'react'
import './style.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMG_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`



export function App () {
  const [fact, setFact] = useState('lorem ipsum cat random')
  const [ imgUrl, setImgUrl ] = useState(null)

  // const obtainFactsRandom = async () => {
  //   try {
  //     const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
  //     if (!res.ok) throw('The request could not be made')
  //     const json = await res.json()
  //     console.log(json)
  //     setFact(json.fact)
  //     return { fact }
  //   } catch (err) {
  //     throw err
  //   }
  // }

  const handleFacts = () => {
    setFact(!fact)
  }

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
        const firstWord = fact.split(' ', 1).join(' ')
        // console.log(firstWord)

        fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
          .then(res => res.json())
          .then(data => {
            const { _id, url } = data
            // console.log({ _id, url })
            // setImgcat(imgUrl)
          })
      })
  }, [])

  return (
    <>
      <h1>App of Cats</h1>
      <div className='container'>
        {fact && <p className='desc'>{fact}</p>}
        {imgUrl && <img src={imgUrl} alt='random cat' />}
        <button onClick={handleFacts} className='btn'>Next quote</button>
      </div>
    </>
  )
}
