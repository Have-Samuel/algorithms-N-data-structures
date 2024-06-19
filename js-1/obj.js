const mark = {
    name: 'Mark',
    mass: 78,
    height: 1.69,
    markBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

const john = {
    name: 'John',
    mass: 92,
    height: 1.95,
    johnBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};
// Using the Conditional Statements
if (john.johnBMI() > mark.markBMI()) {
    console.log(`${john.name} has a higher BMI of ${john.bmi}`);
} else if (mark.bmi > john.bmi) {
    console.log(`${mark.name} has a higher BMI of ${mark.bmi}`);
} else {
    console.log(`They have the same BMI`);
}

