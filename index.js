/* let person = {
    name: "Fatih",
    age: 24,
    country: "Turkey"
}

console.log(person.name + " is " + person.age + " years old and lives in " + person.country); */

/* let customerAge = 15;

if (customerAge < 6) {
    console.log("free")
} else if (customerAge < 18) {
    console.log("child discount")
} else if (customerAge < 27) {
    console.log("student discount")    
} else if (customerAge < 67) {
    console.log("full price")
} else {
    console.log("senior citizen discount")
} */

/* let largeCountries = ["China","India","USA","Indonesia","Pakistan"];

console.log("Biggest countiries in the world:")
for (let i = 0; i < largeCountries.length; i++) {
    console.log("-" + largeCountries[i]);  
} */

/* let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"];

largeCountries.shift();
largeCountries.unshift("China");

largeCountries.pop();
largeCountries.push("Pakistan");

console.log(largeCountries); */

/* let dayOfMonth = 13;
let weekday = "Friday";

if(dayOfMonth===13 && weekday==="Friday"){
    console.log("Boooo..!!!!");
} else {
    console.log("It's a normal day.");
} */

/* let hands = ["rock","paper","scissors"];



function OneOfThree() { 
    console.log(hands[Math.floor(Math.random() * 3)]);
}

OneOfThree(); */

/* let fighters = ["Ejderha", "Civciv", "Timsah","Bok", "Goril", "Kaplumbağa", "Köpek", "Yengeç", "Arı", "Fil", "Kurbağa", "Örümcek"];

let stageEl = document.getElementById("stage");
let fightButton = document.getElementById("fightButton");

fightButton.addEventListener("click", function() {
    let randomPicker = Math.floor((Math.random() * fighters.length));
    let randomPicker2 = Math.floor((Math.random() * fighters.length));
    stageEl.textContent = fighters[randomPicker] + " vs " + fighters[randomPicker2];
    // emoji fighters and display them as i.e. "🦀 vs 🐢" in the "stage" <div>.
}) */

let fruit = ["Apple","Orange","Apple","Apple","Orange"];
let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");


for (let i = 0; i < fruit.length; i++) {
    if (fruit[i] === "Apple") {
    appleShelf.textContent += "Elma ";
    } else if (fruit[i] === "Orange") {
        orangeShelf.textContent += "Orange ";
    }
    
}