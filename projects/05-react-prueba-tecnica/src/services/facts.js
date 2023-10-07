const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
  try {
    const resp = await fetch(CAT_ENDPOINT_RANDOM_FACT)
    if (!resp.ok) throw('Request could not be made')
    const data = await resp.json()
    const { fact } = data
    return fact
  } catch (err) {
    throw err
  }
}
