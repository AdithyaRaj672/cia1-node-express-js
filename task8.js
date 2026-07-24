// Task 8 - Use push() to add a new patient to the array.
//Write a loop to find the patient with the highest `age`
let patients = [
    { name: "Amit", age: 30 },
    { name: "Riya", age: 22 },
    { name: "John", age: 45 }
];

patients.push({ name: "Sneha", age: 50 });

let oldest = patients[0];

for (let patient of patients) {
    if (patient.age > oldest.age) {
        oldest = patient;
    }
}

console.log("Oldest Patient:", oldest);

//Output:
//Oldest Patient: {name: 'Sneha', age: 50}