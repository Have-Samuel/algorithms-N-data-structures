function tipCalculator(bill) {
    let percentage;
    if (bill < 50) {
        percentage = 0.2;
    } else if (bill >= 50 && bill < 200) {
        percentage = 0.15;
    } else {
        percentage = 0.1;
    }
    return percentage *bill;    
}

let bills = [224, 48, 68];
console.log(tipCalculator(40));

const finalTip = [tipCalculator(bills[0]),
                 tipCalculator(bills[1]),
                 tipCalculator(bills[2])];

const sum = [finalTip[0] + bills[0],
             finalTip[1] + bills[1],
             finalTip[2] + bills[2]]
console.log(finalTip, sum);