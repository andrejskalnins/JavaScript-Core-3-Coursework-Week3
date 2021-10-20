let hogwarts = [
  {
    firstName: "Harry",
    lastName: "Potter",
    house: "Gryffindor",
    pet: "Owl",
    occupation: "Student",
  },
  {
    firstName: "Ron",
    lastName: "Weasley",
    house: "Gryffindor",
    pet: "Scabbers",
    occupation: "Student",
  },
  {
    firstName: "Hermione",
    lastName: "Granger",
    house: "Gryffindor",
    pet: "Cat",
    occupation: "Student",
  },
  {
    firstName: "Draco",
    lastName: "Malfoy",
    house: "Slytherin",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Cedric",
    lastName: "Diggory",
    house: "HufflePuff",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Severus",
    lastName: "Snape",
    house: "Slytherin",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Filius",
    lastName: "Flitwick",
    house: "Ravenclaw",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Pomona",
    lastName: "Sprout",
    house: "Hufflepuff",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Minerva",
    lastName: "McGonagall",
    house: "Gryffindor",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Albus",
    lastName: "Dumbledore",
    house: "Gryffindor",
    pet: "Phoenix",
    occupation: "Teacher",
  },
];

// Task 1
function getGryffindorStudentNames(array) {
  let [...houseGryffindor] = array.filter(
    (item) => item.house === "Gryffindor"
  );
  houseGryffindor.forEach(({ firstName, lastName }) => {
    console.log(`${firstName} ${lastName}`);
  });
}
getGryffindorStudentNames(hogwarts);

// Task 2
// Question: Are either of these correct use of array destructuring as per exercise instructions?

// Version 1
function professorWhoOwnsAPet([{ occupation, pet, firstName, lastName }]) {
  if (occupation === "Teacher" && pet !== null) {
    console.log(firstName + lastName);
  }
}
professorWhoOwnsAPet(hogwarts);

// Version 2

function findProfessorWhoOwnsAPet(array) {
  const [{ ...professorWithAPet }] = array.filter(
    (person) => person.occupation === "Teacher" && person.pet !== null
  );
  console.log(professorWithAPet.firstName, professorWithAPet.lastName);
}

findProfessorWhoOwnsAPet(hogwarts);
