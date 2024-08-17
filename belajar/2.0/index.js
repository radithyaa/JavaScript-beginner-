let fullname = "ahza radithya dwicahyo";
let age = 15;
let isstudent = true;
let username;
const PI = 3.14159;
let radius;
let circumference;
let randomnum = Math.floor(Math.random() * 50 + 51 );
const rollbttn = document.getElementById(`rollbttn`);
const rolllabel1 = document.getElementById(`rolllabel1`);
const rolllabel2 = document.getElementById(`rolllabel2`);
const rolllabel3 = document.getElementById(`rolllabel3`);
let randomnum1
let randomnum2
let randomnum3
const max = 6
const min = 1
let agee = 17
let haslicense = false

document.getElementById(`p1`).textContent = `your name is: ${fullname}`;
document.getElementById(`p2`).textContent = `your age is: ${age}`;
document.getElementById(`p3`).textContent = `is a student: ${isstudent}`;

document.getElementById(`button`).onclick = function(){
    username = document.getElementById(`text`).value;
    console.log(username);
    document.getElementById('label').textContent = `hello ${username}`;
}

document.getElementById(`button2`).onclick = function(){
    radius = document.getElementById(`text2`).value;
    console.log(radius);
    document.getElementById('label2').textContent = `Circumference is :${ 2 * PI * radius}`;
}

rollbttn.onclick = function(){
    randomnum1 = Math.floor(Math.random() * max) + min;
    randomnum2 = Math.floor(Math.random() * max) + min;
    randomnum3 = Math.floor(Math.random() * max) + min;
    rolllabel1.textContent = randomnum1;
    rolllabel2.textContent = randomnum2;
    rolllabel3.textContent = randomnum3;
}

if(agee >= 17){
    console.log(`you are old enough to drive now!`)

    if(haslicense){
        console.log(`you has you license`)
    }
    else{
        console.log(`you don't have your license`)
    }
}
else{
    console.log(` you must be 17 y'o first`)
}
