// Functions: 1
// Description: This function is used to get the current date and time.
let currentDate = new Date();
function calculateAge(year) {
    return new Date().getFullYear() - year;
}

let jonhAge = calculateAge(1990);
let mikeAge = calculateAge(1948);
let marryAge = calculateAge(1969);
console.log(jonhAge, mikeAge, marryAge);

