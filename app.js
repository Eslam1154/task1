const fs = require('fs')

// const x = require ("./data")
// console.log(x)

// 1) create a person object
const person ={
    fname:'ahmed',
    lname:'hossam',
    age:20,
    city:'alex'
}
// 2) convert object to json
const personJson = JSON.stringify(person)
// 3) store in file
fs.writeFileSync("person.json",personJson)
// 4) read file
console.log(fs.readFileSync("person.json").toString())
// 5) convert to obj
const personObject = JSON.parse(personJson)
// console.log(personObject)

// 6) update data 
personObject.fname = "adel"
personObject.lname = "ahmed"
personObject.age = 40
personObject.city = "cairo"

// console.log(personObject)

// 7) convrt obj to json
const updatePersonObject = JSON.stringify(personObject)
// 8) store in file
fs.writeFileSync("updatePerson.json",updatePersonObject)
console.log(fs.readFileSync("updatePerson.json").toString())