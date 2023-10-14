import { useEffect, useState } from 'react'
const PREFIX_URL_GIF_CAT = 'https://cataas.com'

export function useUrlGifCat ({ fact }) {
  const [urlGif, setUrlGif] = useState()
  useEffect(() => {
    if (!fact) return
    const threeFirstWords = fact.split(' ', 3).join(' ')
    // console.log(threeFirstWords)
    fetch(
      `https://cataas.com/cat/gif/says/${threeFirstWords}?size=50&color=red&json=true`
    )
      .then((res) => res.json())
      .then((data) => {
        const { url } = data
        setUrlGif(url)
      })
  }, [fact])

  return { urlGif: `${PREFIX_URL_GIF_CAT}${urlGif}` }
}
