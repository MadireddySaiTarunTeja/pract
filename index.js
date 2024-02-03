// user input 🧮

// Easy way with Windows prompt

/** let username = window.prompt("What's your name?");
console.log(username);*/

//difficult way using html textbox

/**let username;

document.getElementById("mybutton1").onclick = function(){

    username = document.getElementById("mytext").value;
    console.log(username);

    document.getElementById("mylabel").innerHTML = "hello"  + username;
}*/

//------------------------------------------------------------------------------------------------------------------

//  type conversion 💱

/**let age = window.prompt("How old are you?");

console.log(typeof age);
age = Number(age);
console.log(typeof age);
age += 1;
console.log("Happy Birthday!" ,age ,"years Old!");*/

//-------------------------------------------------------------------------------------------------------------------

//hypotenuse calc practice program 📐

/*let a;
let b;
let c;

a = window.prompt("Enter side A:");
a = Number(a);

b = window.prompt("Enter side B:");
b = Number(b);

c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));

console.log(c);*/

// Using html textbox

/*let a;
let b;
let c;

document.getElementById("mybutton2").onclick = function(){
    a = document.getElementById("atext").value;
    a = Number(a);

    b = document.getElementById("btext").value;
    b = Number(b);

    c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));

    document.getElementById("ctext").innerHTML = "Side C: " +c ;

}*/

//------------------------------------------------------------------------------------------------------------------------------------------------------------------








