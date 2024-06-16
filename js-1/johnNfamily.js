function tipCalculator(bill) {
    let percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage *bill;    
}

let bills = [204, 38, 94];
console.log(tipCalculator(40));
console.log(tipCalculator(100));
console.log(tipCalculator(300));
// 1.console.Result: 8, 15, 30

const finalTip = [tipCalculator(bills[0]),
                 tipCalculator(bills[1]),
                 tipCalculator(bills[2])];
// 2.console.Result: [30.6, 7.6, 18.8]

const sum = [finalTip[0] + bills[0],
             finalTip[1] + bills[1],
             finalTip[2] + bills[2]]
// 3.console.Result: [234.6, 45.6, 112.8]
console.log(finalTip, sum);