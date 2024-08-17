let loggedin1
let username1
let password1
let guessinput = document.getElementById(`guessinput`)
let guesslabel = document.getElementById(`guesslabel`)
let guessbutton = document.getElementById(`guessbutton`)
let guessp = document.getElementById(`guessp`)
let answer = Math.floor(Math.random() * 100)

/*while (!loggedin1) {
    username1 = window.prompt(`Enter your username:`)
    password1 = window.prompt(`Enter your password:`)
    
    if(username1 === `myusername` && password1 === `mypassword`){
    loggedin1 = true
    console.log(`you are Logged in!`)
    }   else{
        loggedin1 = false
        console.log(`Invalid credentials! Please try again`)
    }
}*/

for(let i = 1; i <=20; i++){
    if(i == 13){
        continue
    }   else{
        console.log(i)
    }
}

guessbutton.onclick = function() {
    guessinput = (guessinput.value)
    if(guessinput === answer){
        guessp.textContent = `Good job! you're answer true`
    }   else{
        guessp.textContent = `You're false, the true answer is ${answer}`
        console.log(answer)
    }
}

function iseven(number){
    return number % 2 === 0 ? true : false
}

function validemail(email){
    return email.includes(`@`) ? true : false 
}

console.log(iseven(3))
console.log(validemail(`ahzathenation@gmail.document`))
