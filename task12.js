//task 12 - Rewrite the function from the previous task as an arrow function and call it with a different set of values.
const hospitalPatient = (patientName, age, disease, roomNumber) => {
    console.log("Hospital Patient Details");
    console.log("------------------------");
    console.log("Patient Name:", patientName);
    console.log("Age:", age);
    console.log("Disease:", disease);
    console.log("Room Number:", roomNumber);
};
hospitalPatient("Priya Sharma", 35, "Pneumonia", 210);

//Output:
//Hospital Patient Details
//------------------------
//Patient Name: Priya Sharma
//Age: 35
//Disease: Pneumonia
//Room Number: 210