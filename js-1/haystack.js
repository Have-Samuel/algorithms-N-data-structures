// looping through the Array
let haystack = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"];

for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === "needle") {
        console.log("Found the needle at position " + i);
        
    }
}