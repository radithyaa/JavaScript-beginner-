//Start

let usernamee = window.prompt("what's your name?")
let firstname = 'ahja';
let age = 15;
let students = true;
let student = 20
let result = 25 + 9 / ( 2 + 1)
let username;
let boolean = Boolean('pizza')
const PI = 3.14159
let radius
let circumference
let x = Math.PI
let y = 5
let z = 9
let maximum
let minimum
let a
let b
let c
let sidea
let sideb
let sidec
let count = 0
let rollx
let rolly
let rollz
let namee = "ahjaa"
let phonenumber = '0877-7317-9300'
let fullname = 'ahja radithya'
let secondname
let thirdname

//student = student % 7
student %= 7
radius = window.prompt('radius:')
radius = Number(radius)
circumference = 2 * PI * radius
//x = Math.round(x)
//x = Math.floor(x)
//x = Math.ceil(x)
//x = Math.pow(x, 2)
//x = Math.sqrt(x)
//x = Math.abs(x)
//maximum = Math.max(x, y, z)
minimum = Math.min(x, y, z)
sidea = window.prompt('Enter the side A:')
sideb = window.prompt('Enter the side B:')
sidec = Math.sqrt(Math.pow(sidea, 2) + Math.pow(sideb, 2))
phonenumber = phonenumber.replace('-', ' ')
secondname = fullname.slice(0, fullname.indexOf(' '))


document.getElementById('p1').innerHTML = 'Hello ' + firstname;
document.getElementById('p2').innerHTML = 'You are ' + age + ' years old';
document.getElementById('p3').innerHTML = 'Enrolled: ' + students;
document.getElementById('mybutton').onclick = function(){
    username = document.getElementById('mytext').value
    console.log(username)
    document.getElementById('mylabel').innerHTML = 'Hello ' + username
}

document.getElementById('Submitbutton').onclick = function(){
    a = document.getElementById('atextbox').value
    b = document.getElementById('btextbox').value
    a = Number(a)
    b = Number(b)
    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))
    document.getElementById('clabel').innerHTML = 'Side C: ' + c
    console.log('Side C:', c)
}

document.getElementById('decreasebtn').onclick = function(){
    count -= 1
    document.getElementById('countlabel').innerHTML = count
}
document.getElementById('resetbtn').onclick = function(){
    count = 0
    document.getElementById('countlabel').innerHTML = count
}
document.getElementById('increasebtn').onclick = function(){
    count += 1
    document.getElementById('countlabel').innerHTML = count
}

document.getElementById('rollbtn').onclick = function(){
    rollx = Math.floor(Math.random() * 6 ) + 1
    rolly = Math.floor(Math.random() * 6 ) + 1
    rollz = Math.floor(Math.random() * 6 ) + 1

    document.getElementById('xlabel').innerHTML = rollx
    document.getElementById('ylabel').innerHTML = rolly
    document.getElementById('zlabel').innerHTML = rollz
}


console.log(usernamee)
console.log("i like burger");
console.log("It's really good");
console.log('Hello', firstname);
console.log('you are', age, 'years old');
console.log('Enrolled:', students);
console.log('student:', student)
console.log('result:', result)
console.log(boolean, typeof boolean)
console.log(circumference)
console.log(minimum)
console.log('The side c is: ', sidec)
console.log(namee.length)
console.log(namee.charAt(0))
console.log(namee.indexOf(j))
console.log(namee.lastIndexOf(a))
console.log(namee.trim(a))
console.log(namee.toUpperCase)
console.log(namee.toLowerCase)
console.log(phonenumber)
console.log(secondname)