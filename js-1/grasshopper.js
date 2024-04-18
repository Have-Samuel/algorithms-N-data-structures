// function getGrade (s1, s2, s3) {
//   // Code here
//   let addedNum = (s1 + s2 + s3);
  
//     let avg = addedNum/3;
//     if (avg >= 90 && avg <= 100) {
//         return 'A';
//     }
//     if (avg >= 80 && avg < 90) {
//         return 'B';
//     }
//     if (avg >= 70 && avg < 80) {
//         return 'C';
//     }
//     if (avg >= 60 && avg < 70) {
//         return 'D';
//     }
//     if (avg >= 0 && avg < 60) {
//         return 'F';
//     }
// }

function getGrade (s1, s2, s3) {
  // Code here
  let addedNum = (s1 + s2 + s3);
  
    let avg = addedNum/3;

    switch (true) {
        case avg >= 90: 
        return 'A';
        break
        case avg >= 80 :
        return 'B';
        break
        case avg >= 70 :
        return 'C';
        break
        case avg >= 60 :
        return 'D';
        break
        case avg >= 0:
        return 'F';
        break
        default:
    }
}
