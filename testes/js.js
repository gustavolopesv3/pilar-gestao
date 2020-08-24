
let arrays = [1,2,3,5,6]

let unshuffled = arrays

let shuffled = unshuffled
  .map((a) => ({sort: Math.random(), value: a}))
  .sort((a, b) => a.sort - b.sort)
  .map((a) => a.value)