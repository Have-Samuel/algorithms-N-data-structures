let str = "This website is for losers LOL!";

// function disemvowel(str) {
//   return str.replace(/[aeiou]/gi, '');
// }

// solving using for Loop
function disemvowel(str) {
  // let str = "This website is for losers LOL!";
  let vowels = ('aeiou');
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (!vowels.includes(str[i].toLowerCase())) {
      result += str[i];
      console.log(result);
    }
  }
  return result;
}

console.log(disemvowel(str)); // Ths wbst s fr lsrs LL!