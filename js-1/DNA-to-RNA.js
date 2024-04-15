let dna = "GCAT";
function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  // Returning the RNA sequence by replacing all 'T' with 'U'
  // Using the replace method with a regular expression to replace all 'T' with 'U'
  // The 'g' flag is used to replace all occurrences of 'T' in the string
  // We didn't use the 'i' flag because the DNA sequence is case-sensitive
  // The 'i' flag is used to perform case-insensitive matching
  // The 'g' flag is used to perform a global match (find all matches rather than stopping after the first match)
  // The 'gi' flag is used to perform a global, case-insensitive match
  return dna.replace('T', "U");
}
console.log(DNAtoRNA(dna)); // GCAU

// Solving using for loop
