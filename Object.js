let personalDetailes =
{

    name: 'Ankur',
    age: 26,
    "phone no": [9140422586, 7662855102],
    place: ['New Delhi', 'Bangalore'],
    details: function () {
        console.log("The details are :" + " " + this.name + " " + this.age);
    },
    spouse: {
        name: 'neha',
        age: 25
    }

}

//dot notation
console.log("---------------DOT NOTATION--------------");
console.log(personalDetailes.name);
personalDetailes.details()
console.log(personalDetailes.spouse.name);
console.log("---------------BRACKET NOTATION--------------");
//bracket notation
console.log(personalDetailes["phone no"][1]);
console.log(personalDetailes["phone no"][0]);
console.log(personalDetailes['age']);
console.log(personalDetailes['place'][1]);
console.log("---------------DELETE--------------");
//delete property
delete personalDetailes["phone no"][1]
console.log(personalDetailes["phone no"][1]);
console.log("---------------MODIFY--------------");
//modify property
personalDetailes.age = 27
console.log(personalDetailes.age);
console.log("---------------ADD NEW--------------");
//add new property
personalDetailes.food = 'bhattore'
console.log(personalDetailes);

