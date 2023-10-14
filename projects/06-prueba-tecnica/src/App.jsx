import { useFact } from './hooks/useFact'
import { useUrlGifCat } from './hooks/useUrlGifCat'

function App () {
  const { fact, refreshFact } = useFact()
  const { urlGif } = useUrlGifCat({ fact })

  const handleFact = async () => {
    refreshFact()
  }

  return (
    <>
      <main>
        <h1>App of Cats</h1>
        {fact && <p className='fact__desc'>{fact}</p>}
        {urlGif && <img className='fact__img' src={urlGif} alt={`Image with the first three words of a random fact.${urlGif}`} />}
        <button onClick={handleFact}>Next Fact</button>
      </main>
    </>
  )
}

export default App
