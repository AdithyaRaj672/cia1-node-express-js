//task 6 - Create an array of at least 4 patient objects and use a loop to print each one's details
let patients = [
    { name: "Amit", age: 30 },
    { name: "Riya", age: 22 },
    { name: "John", age: 45 },
    { name: "Sneha", age: 18 }
];

for (let patient of patients) {
    console.log("Name:", patient.name, "Age:", patient.age);
}

//Output:
//Name: Amit Age: 30
//Name: Riya Age: 22
//Name: John Age: 45
//Name: Sneha Age: 18