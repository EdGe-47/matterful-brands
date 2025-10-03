export const getRowGapAsNumber = (element) => {
  const styles = getComputedStyle(element)
  const rowGap = styles.rowGap

  return parseFloat(rowGap)
}

export const getHeightAsNumber = (element) => {
  const styles = getComputedStyle(element)
  const height = styles.height

  return parseFloat(height)
}