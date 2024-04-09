function countSheeps(sheep) {
  // TODO
  let count = 0;
  for (let i = 0; i < sheep.length; i++) {
    if (sheep[i] === true) {
      count = count + 1;
    }
  }
  return count;
}