 let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

const  markBMI = markMass / (markHeight * markHeight);
78 / (1.69 * 1.69);
console.log(markBMI);

const johnBMI = johnMass / (johnHeight * johnHeight);
92 / (1.95 * 1.95);
console.log(johnBMI);

const markHigherBMI = markBMI > johnBMI;
console.log(`Is Mark\'s BMI hiher than John\'s?' ${markHigherBMI}`);