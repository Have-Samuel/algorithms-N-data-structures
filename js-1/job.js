const whatDoYouDo = function (job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code.';
        case 'driver':
                return firstName + ' drive uber in Lisbon.';
        case 'designer':
                return firstName + ' designs beautiful websites.';
        default:
                return firstName + ' does something else.';
    }
}

console.log(whatDoYouDo('driver', 'Robs'));
console.log(whatDoYouDo('teacher', 'Paul'));
console.log(whatDoYouDo('designer', 'Sibo'));