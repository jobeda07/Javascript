class Instructor{
    name;
    designation = 'web design';
    team = 'web team';
    location;
    constructor(name) {
        this.name = name;
    }
    start(time) {
        console.log(`start time at ${time} `);
    }
    
}
let amir = new Instructor ('liza');
console.log(amir);
amir.start('9.00');