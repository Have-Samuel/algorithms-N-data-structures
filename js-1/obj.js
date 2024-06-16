const mark = {
    name: 'Mark',
    mass: 98,
    height: 1.69,
    markBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.markBMI;
    }
};

const John = {
    name: 'John',
    mass: 92,
    height: 1.95,
    johnBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.johnBMI;
    }
};


console.log(mark.markBMI(), John.johnBMI());



