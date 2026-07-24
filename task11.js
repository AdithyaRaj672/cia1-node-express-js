//task 11 - Write a function that takes patient details as parameters and returns whether the patient is a minor or an adult.
function checkPatient(age, name) {
    if (age < 18) {
        return name + " is a Minor";
    } else {
        return name + " is an Adult";
    }
}

console.log(checkPatient(15, "Rahul"));
console.log(checkPatient(25, "Anita"));

//Output:
//Rahul is a Minor
//Anita is an Adult