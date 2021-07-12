// Desctructuring Assignment

let a, b;
[a, b, ...rest] = [100, 200, 300, 400, 500, 600];

({ a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 });

// Array Desstructuring

const people = ['John', 'Beth', 'Mike'];

const [per1, per2, per3] = people;

// Parse array returned from function
function getPeople() {
   return ['John', 'Beth', 'Mike'];
}

let person1, person2, person3;
[person1, person2, person3] = getPeople();

// Object Desstructuring
const person = {
   name: 'John Doe',
   age: 32,
   city: 'Miami',
   gender: 'Male',
   sayHello: function () {
      console.log('Hello');
   },
};

const { name, age, city, sayHello } = person;
sayHello();
