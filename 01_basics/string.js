const name="harsh"
const repo = 100

// console.log(name + repo + "value")

console.log(`Hello my name is ${name} and my repo count is ${repo}`);

const gameName = new String('harshc')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length)
console.log(gameName.toUpperCase());

const newstring = gameName.substring(0,4)
console.log(newstring)

const url = "https://hitesh.com/hitesh%20ch"
console.log(url.replace('%20', '-'))