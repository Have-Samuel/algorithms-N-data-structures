const Mark = {
    name: 'Mark',
    mass: 98,
    height: 1.69,
    markBMI: function() {
        this.markBMI = this.mass / (this.height * this.height);
        return this.markBMI;
    }
};

const John = {
    name: 'John',
    mass: 92,
    height: 1.95,
    johnBMI: function() {
        this.johnBMI = this.mass / (this.height * this.height);
        return this.johnBMI;
    }
};

console.log(Mark.markBMI(), John.johnBMI());



