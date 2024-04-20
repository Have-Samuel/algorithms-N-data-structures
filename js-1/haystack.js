// Finding the needle out of the Array
let arry = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"];

const findNeedle = (arry) => {
    for (let i = 0; i < arry.length; i++) {
        if (arry[i] === 'needle') {
            console.log(`found the needle at position, ${i}`)
        }
    }
    return arry;
}
console.log(findNeedle(arry));

