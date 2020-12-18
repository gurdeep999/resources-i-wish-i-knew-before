const shuffle = (array) => {
  let m = array.length, t, i

  while(m){
    i = Math.floor(Math.random() * m--)

    t = array[i]
    array[i] = array[m]
    array[m] = t
  }
  return array
}

export {
  shuffle
}