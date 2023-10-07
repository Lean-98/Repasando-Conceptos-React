import { useEffect, useState } from 'react'
const CAT_PREFIX_IMG_URL = 'https://cataas.com'

export function useCatImage ({ fact }) {
  const [imgUrl, setImgUrl] = useState()

  //  Para recuperar la imagen cada vez que tenemos una cita nueva
  useEffect(() => {
    if (!fact) return
    const firstWord = fact.split(' ', 3).join(' ')
    // console.log(firstWord)

    fetch(
      `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`
    )
      .then((res) => res.json())
      .then((data) => {
        const { url } = data
        // console.log({ url })
        setImgUrl(url)
      })
  }, [fact])
  
  return { imgUrl: `${CAT_PREFIX_IMG_URL}${imgUrl}` }
}
