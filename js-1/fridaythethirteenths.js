function fridayTheThirteenths(start, end) {
//  let friday13 = 0;
    let friday13 = [];
    for (let year = start; year <= end; year++) {
        for (let month = 0; month < 12; month++) {
            let date = new Date(year, month, 13);
            if (date.getDay() === 2) {
            friday13.push(date);
            }
        }
    }
return friday13;
}
console.log(fridayTheThirteenths(2018, 2020));