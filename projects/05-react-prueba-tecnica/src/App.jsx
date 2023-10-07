import './style.css'
import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imgUrl } = useCatImage({ fact })

  const handleclick = async () => {
    refreshFact()
  }

  return (
    <>
      <main>
        <h1>App of Cats</h1>
        {fact && <p className='desc'>{fact}</p>}
        {imgUrl && <img src={imgUrl} alt={`Image extracted usin the first word for ${fact}`} />}
        <button onClick={handleclick} className='btn'>Next quote</button>

      </main>
    </>
  )
}
