function testName(name) {
  //   let Myname = 'Max';
  console.log(name);
  //   Myname = 'sdfsd';
  //   console.log(Myname);
}

const printMyName = name => console.log(name);

const printName2 = () => {
  const name = 'test2';
  console.log(name);
};

const printNameAge = (name, age) => {
  console.log(`Your name is: ${name} and your age is ${age}`);
};

const multiply = number => number * 2;

function printValue(numar) {
  console.log(multiply(numar));
}

// class Human {
//   constructor(gender) {
//     this.gender = gender;
//   }

//   printGender() {
//     console.log(this.gender);
//   }
// }
class Human {
  //   gender = 'mail';

  printGender = gender => {
    console.log(gender);
  };
}

// class Person extends Human {
//   constructor(name, gender) {
//     super();
//     // this.name = 'Je suis';
//     this.variabila = name;
//     this.gender = gender;
//   }

//   printMyName() {
//     // console.log(this.name);
//     console.log(this.variabila);
//   }
// }
class Person extends Human {
  //   variabila = 'nume';

  //   gender = 'female';

  printMyName = nume => {
    // console.log(this.name);
    console.log(nume);
  };
}

// const person = new Person();
// const person = (name, gender) => {
//   //   const variabila2 = new Person(name, name2);
//   const variabila1 = new Person(name, gender);
//   variabila1.printMyName();
//   variabila1.printGender();
// };
const person = (nume, gender) => {
  //   const variabila2 = new Person(name, name2);
  const variabila1 = new Person();
  variabila1.printMyName(nume);
  variabila1.printGender(gender);
};
