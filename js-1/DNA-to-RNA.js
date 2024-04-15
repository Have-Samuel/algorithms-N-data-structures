let dna = "GCAT";
// function DNAtoRNA(dna) {

//   return dna.replace('T', "U");
// }
// console.log(DNAtoRNA(dna)); // GCAU

// let dna = "GCAT";
function DNAtoRNA2(dna) {
  let result = '';
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === 'T') {
      result += 'U';
    } else {
      result += dna[i];
      console.log(result);
    }
  }
  return result;
}

console.log(DNAtoRNA2(dna)); // GCAU