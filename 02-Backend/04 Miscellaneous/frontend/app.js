//^OOPS

// Object 1 → getMarks()
// Object 2 → getMarks()
// Object 3 → getMarks()

// ❌ Same method copied many times.

let arr1 = [1,2,3];
let arr2 = [1,2,3];

arr1.sayHello = () => {
    console.log("hello !! , i am arr");
};
arr2.sayHello = () => {
    console.log("hello !! , i am arr");
};



//~ Factory Function
function PersonMaker(name, age) {
    const person = {
        name: name,
        age: age,
        talk() {
            console.log(`Hi ! my name is ${this.name}`);
        },
    };

    return person;

}

let p1 = PersonMaker("Aymaan", 20);
console.log(p1);
console.log(p1.talk());

let p2 = PersonMaker("Adam", 25);
console.log(p2);
console.log(p2.talk());



//* New Operator
//constructor - A constructor is a special function used with the new operator to create and initialize objects , doesn't return anything & start with capital.

function Person(name, age) {
    this.name = name;   // Stores name in the new object
    this.age = age;     // Stores age in the new object
}

// Shared method stored in the prototype (one copy for all objects)
Person.prototype.talk = function () {
    console.log(`Hi!!, my name is ${this.name}`);
};

// Create first object
let p3 = new Person("Aymaan", 25);
console.log(p3);

// Create second object
let p4 = new Person("Aynaya", 5);
console.log(p4);

//  true because both objects share the same talk() method from the prototype
console.log(p3.talk === p4.talk);


// Factory Function
// p3.talk ≠ p4.talk
// false ❌

// Prototype
// p3.talk = p4.talk
// true ✅

//* Classes

// Class is a blueprint for creating objects
class Person1 {

    // Constructor initializes object properties
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Shared method (stored in the prototype)
    talk() {
        console.log(`Hi! My name is ${this.name}`);
    }
}

// Create first object
let p5 = new Person1("Adam", 25);
console.log(p5);

// Create second object
let p6 = new Person1("Aymaan", 25);
console.log(p6);

// Call the shared method
p5.talk();
p6.talk();




//* Inheritance
class student {
    constructor(name, age , marks) {
        this.name = name;
        this.age = age;
        this.marks = marks;
    }
    talk () {
        console.log(`hi, I am ${this.name}`);
    }
}
let stu1 = new student("adam", 25, 95);
console.log(stu1.name );
console.log(stu1.age);
console.log(stu1.marks);


class teacher {
    constructor(name, age , subject) {
        this.name = name;
        this.age = age;
        this.subject = subject;
    }
    talk () {
        console.log(`hi, I am ${this.name}`);
    }
}
let teacher1 = new teacher("Shradha", 25, "coding");
console.log(teacher1.name );
console.log(teacher1.age);
console.log(teacher1.subject);

//~ Same code using Inheritance

// Parent class (stores common properties and methods)
class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Shared method for all child classes
    talk() {
        console.log(`Hi, I am ${this.name}`);
    }
}

// Student inherits common code from Person2
class Student2 extends Person2 {
    constructor(name, age, marks) {
        super(name, age);      // Calls the parent constructor
        this.marks = marks;    // Student's own property
    }
}

// Create Student object
let stu4 = new Student2("Adam", 25, 95);

console.log(stu4.name);
console.log(stu4.age);
console.log(stu4.marks);

stu4.talk();   // Inherited method



// Teacher inherits common code from Person2
class Teacher2 extends Person2 {
    constructor(name, age, subject) {
        super(name, age);         // Calls the parent constructor
        this.subject = subject;   // Teacher's own property
    }
}

// Create Teacher object
let teacher4 = new Teacher2("Shradha", 25, "Coding");

console.log(teacher4.name);
console.log(teacher4.age);
console.log(teacher4.subject);

teacher4.talk();   // Inherited method