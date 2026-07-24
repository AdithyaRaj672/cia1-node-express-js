//task 7 - Using the array of patients, use break or continue while looping to skip or stop at a specific condition on `age`.
let patients = [
    { name: "Amit", age: 30 },
    { name: "Riya", age: 22 },
    { name: "John", age: 65 },
    { name: "Sneha", age: 18 }
];

for (let patient of patients) {
    if (patient.age > 60) {
        console.log("Stopping at:", patient.name);
        break;
    }

    console.log(patient.name, patient.age);
}

//Output:
//Amit 30
//Riya 22
//Stopping at: John