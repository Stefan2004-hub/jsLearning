const number = 1;
const number2 = number;

const personRef = {
  name: 'mumu',
};

// const personRef2 = personRef;
const personRef2 = {
  ...personRef,
};

personRef.name = 'changed name';

const printRef = () => console.log(personRef2);
