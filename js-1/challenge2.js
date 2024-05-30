const johnTeamAvg = (89 + 120 + 103) / 3;
// johnTeamAvg = 104
const mikeTeamAvg = (116 + 94 + 123) / 3;
// mikeTeamAvg = 111
const maryTeamAvg = (97 + 134 + 105) / 3;
// maryTeamAvg = 112

if (johnTeamAvg > mikeTeamAvg) {
    console.log('John\'s team wins with an average of ' + johnTeamAvg);
} else if (mikeTeamAvg > johnTeamAvg) {
    console.log('Mike\'s team wins with an average of ' + mikeTeamAvg);
}