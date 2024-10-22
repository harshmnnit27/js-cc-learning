

const mySym = Symbol("key1")


const user ={

    name : "harsh",
    "full name":"harsh chaurasiya",
    age:23,
    [mySym]:"mykey1",
    location : "allahabad",
    email: "harsh@gmauil.com",
    isLoggedIn : false



}

// console.log(user.email)
// console.log(user["email"])
// console.log(user["full name"])
// console.log(user[mySym])

// user.email = "harsh@gmail.com",
// Object.freeze(user),
// user.email = "ayush@gmail.com"


// console.log(user)


user.greeting = function(){
    console.log("Hello user");
}

user.greetingtwo = function(){
    console.log(`hello user , ${this["full name"]} `)

}

console.log(user.greeting());
console.log(user.greetingtwo());



