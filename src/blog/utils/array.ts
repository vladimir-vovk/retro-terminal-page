export const random = (array: any[]) => {
  if (!array?.length) {
    return
  }

  const i = Math.floor(Math.random() * array.length)
  return array[i]
}
