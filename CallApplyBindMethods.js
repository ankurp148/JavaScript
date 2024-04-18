let patient1 = {
    pname: 'abc',
    phone: [987654321, 879456321],
    location: 'delhi',
    disease: 'cold'
}

let patient2 = {
    pname: 'xyz',
    phone: [787657321, 679456321],
    location: 'goa',
    disease: 'fever'
}

function patientDetails(a, b) {
    console.log(`The patient details are : ${this.pname} ${this.phone} ${this.disease} ${this.location} ${a + b}`);
}

//call
console.log("----------CALL------------");
patientDetails.call(patient1, 8, 9)
patientDetails.call(patient2, 48, 19)

console.log("----------APPLY------------");
//apply
patientDetails.apply(patient1, [8, 6])

console.log("----------BIND------------");
//bind
let d = patientDetails.bind(patient1, 10, 10)
console.log(d);
d()