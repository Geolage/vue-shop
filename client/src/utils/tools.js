// 数组乱序
export const _shuffleArr = arr => {
  let randonArr = []
  let array = arr.slice()
  while (array.length !== 0) {
    let rIndex = Math.floor(array.length * Math.random())
    randonArr.push(array[rIndex])
    array.splice(rIndex, 1)
  }
  return randonArr
}
