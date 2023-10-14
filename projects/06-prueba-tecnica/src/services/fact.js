const ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
export const getRandomFact = async () => {
  const res = await fetch(ENDPOINT_RANDOM_FACT)
  const data = await res.json()
  const { fact } = data
  // console.log({ fact })
  return fact
}
