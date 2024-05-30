// Keep changing the scores to test the different conditions
const johnTeamAvg = (89 + 120 + 103) / 3;
// johnTeamAvg = 104
const mikeTeamAvg = (95  + 94 + 123) / 3;
// mikeTeamAvg = 104
const maryTeamAvg = (97 + 134 + 105) / 3;
// maryTeamAvg = 112

// if (johnTeamAvg > mikeTeamAvg) {
//     console.log('John\'s team wins with an average of ' + johnTeamAvg);
// } else if (mikeTeamAvg > johnTeamAvg) {
//     console.log('Mike\'s team wins with an average of ' + mikeTeamAvg);
// } else if (maryTeamAvg > johnTeamAvg && maryTeamAvg > mikeTeamAvg) {
//     console.log('Mary\'s team wins with an average of ' + maryTeamAvg);
// }
//  else {
//     console.log('It\'s a draw');
// }

// More Elaborate Solution
if (johnTeamAvg > mikeTeamAvg && johnTeamAvg > maryTeamAvg) {
    console.log('John\'s team wins with an average of ' + johnTeamAvg);
} else if (mikeTeamAvg > johnTeamAvg && mikeTeamAvg > maryTeamAvg) {
    console.log('Mike\'s team wins with an average of ' + mikeTeamAvg);
} else if (maryTeamAvg > johnTeamAvg && maryTeamAvg > mikeTeamAvg) {
    console.log('Mary\'s team wins with an average of ' + maryTeamAvg);
} else {
    console.log('It\'s a draw');
}
