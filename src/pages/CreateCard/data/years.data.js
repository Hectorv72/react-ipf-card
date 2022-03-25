const YearsData = () => {
  const list = []
  const date = new Date(Date.now()).getFullYear()
  const init = date - 100
  list.push('---')
  for (let i = init; i <= date; i++) {
    list.push(i)
  }
  return list
}
export default YearsData
