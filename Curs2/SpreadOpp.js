const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];

// const justPrint = () => console.log(newNumbers);

const addNum = value => {
  const new2Numbers = [...numbers, Number(value)];
  console.log(new2Numbers);
};

const person2 = {
  name: 'mumu',
};

const newPerson2 = {
  ...person2,
  age: 27,
};

const justPrint = () => console.log(newPerson2);
