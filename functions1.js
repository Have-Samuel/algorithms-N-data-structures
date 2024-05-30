// Functions: 1
// Description: This function is used to get the current date and time.
// let currentDate = new Date();
// function calculateAge(year) {
//     return new Date().getFullYear() - year;
// }

// let jonhAge = calculateAge(1990);
// let mikeAge = calculateAge(1948);
// let maryAge = calculateAge(1969);
// console.log(jonhAge, mikeAge, maryAge);

// Function that retires the Reitirement age
// function yearsUntilRetirement(year, firstName) {
//     let age = calculateAge(year);
//     let retirement = 65 - age;
//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`);
//     } else {
//         console.log(`${firstName} is already retired`);
//     }
// }

// yearsUntilRetirement(1994, 'John');
// yearsUntilRetirement(1928, 'Mike');
// yearsUntilRetirement(1999, 'Mary');

// function Expressions
const whatDoYouDo = function (job, firstName) {
    switch(job) {
        case 'teacher':
            return `${firstName} teaches kids how to code`;
        case 'driver':
            return `${firstName} drives a cab in Lisbon.`;
        case 'designer':
            return `${firstName} designs beautiful websites.`;
        default: 
            return `${firstName} does something else.`;
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));
