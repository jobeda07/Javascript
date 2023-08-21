let student = {
    name: 'lizqa',
    roll: 02,
    class: 'one',
    marks: {
        math: 86,
        english: 83,
        bangla:73,
    }
    
}
let marks = student.marks;
let math = student.marks.math;
let bangla = student['marks']['bangla'];

console.log(bangla);