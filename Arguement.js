function details(name, phone, age, location) {
    console.log("The person details are :" + " " + name + " " + age + " " + phone + " " + location);

    console.log(arguments)

    console.log('The person details are : ${namde} ${age} ${phone}');
}

details('ankur', undefined, 30)