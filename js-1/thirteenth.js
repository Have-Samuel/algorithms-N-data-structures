function fridayTheThirteenths(start, end) {
  // let satrt = new Date(start);
  // let end = new Date(end);

  let friday13 = [];
  // loop through the years
  for (let i = start; i <= end; i++) {
    let date = new Date(i, 0, 13);
    if (date.getDay() === 5) {
      friday13.push(date);
    }
  }
  return friday13;
}

console.log(fridayTheThirteenths(1990, 2020));

// const valentines = new Date("1990-04-26");
// const day = valentines.getDay();
// const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"/* , … */];

// console.log(dayNames[day]);

// const xmas = new Date("1995-12-25");
// const year = xmas.getYear();

// console.log(xmas.getFullYear())