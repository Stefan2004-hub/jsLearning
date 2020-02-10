const numbers = [1, 7, 3];
const newNumbers = [...numbers, 4, 5];

const numbersList = {
      persons:[
          {id: 'id1', name:'Max', age:28},
          {id: 'id2',name:'Manu', age:29},
{id: 'id3',name:'Bunicu', age:56}]};

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


changeNameValue = (id) => {
	// const personIndex = numbers.findIndex(number => number === id);
	// const person = numbers[personIndex]
	// return person;
	const personIndex = numbersList.persons.findIndex(p => p.id === id);
	const person = numbersList.persons[personIndex];
	return person;
};



const afiseaza = () => console.log(changeNameValue('id3'));