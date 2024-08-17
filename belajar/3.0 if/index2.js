let usinput = document.getElementById('usinput');
let usbutton = document.getElementById('usbutton');
let uslabel = document.getElementById('uslabel');
let ageinput = document.getElementById('ageinput');
let agebutton = document.getElementById('agebutton');
let agelabel = document.getElementById('agelabel');
let isainput = document.getElementById('isainput');
let isabutton = document.getElementById('isabutton');
let isalabel = document.getElementById('isalabel');
let haveinput = document.getElementById('haveinput');
let havebutton = document.getElementById('havebutton');
let havelabel = document.getElementById('havelabel');
let ranbutton = document.getElementById(`ranbutton`);
let ranlabel1 = document.getElementById(`ranlabel1`);
let ranlabel2 = document.getElementById(`ranlabel2`);
let ranlabel3 = document.getElementById(`ranlabel3`);
let subscribe = document.getElementById(`checkbox1`)
let visacard = document.getElementById('visacard')
let mastercard = document.getElementById('mastercard')
let paypalcard = document.getElementById('paypalcard')
let submit = document.getElementById('submit')
let subresult = document.getElementById('subresult')
let paymentresult = document.getElementById('paymentresult')
let paymenttotal = document.getElementById('paymenttotal')
let purchaseamount = 150
let email = `ahzathenation@gamil.com`

usbutton.onclick = function() {
    let username = usinput.value
    if (!isNaN(username)){
        uslabel.textContent = `You can't enter your name with number!`
    }   else{
        uslabel.textContent = `Hello ${username}`
    }
}

agebutton.onclick = function() {
    let ageinputValue = ageinput.value;
    if (ageinputValue >= 100){
        agelabel.textContent = `You're old enough to submit this`
    }   else if(ageinputValue <= 0){
        agelabel.textContent = `Your age can't be below 0`
    }   else{
        agelabel.textContent = `You're ${ageinputValue} years old`
    }

}

isabutton.onclick = function() {
    let isainputValue = isainput.value.toLowerCase();
    if (isainputValue === 'yes') {
        isalabel.textContent = 'You are a student';
    } else if (isainputValue === 'not') {
        isalabel.textContent = 'You are not a student';
    } else {
        isalabel.textContent = 'Bruhh insert a true answer';
    }
}

havebutton.onclick = function() {
    let haveinputValue = haveinput.value.toLowerCase();
    if (haveinputValue === 'have') {
        havelabel.textContent = 'You have a license';
    } else if (haveinputValue === "haven't") {
        havelabel.textContent = 'You dont have a license';
    } else {
        havelabel.textContent = 'Insert a true answer';
    }
}

ranbutton.onclick = function() {
    let randomnum1 = Math.floor(Math.random() * 6) + 1;
    ranlabel1.textContent = randomnum1;
    let randomnum2 = Math.floor(Math.random() * 6) + 1;
    ranlabel2.textContent = randomnum2
    let randomnum3 = Math.floor(Math.random() * 6) + 1;
    ranlabel3.textContent = randomnum3
}

submit.onclick = function (){
    if(subscribe.checked){
        subresult.textContent = (`You are subscribed!`)
    }   else{
        subresult.textContent = (`You are not subscribed!`)
    }

    if(visacard.checked){
        paymentresult.textContent = (`You are paying with Visa!`)
    }   else if(mastercard.checked){
        paymentresult.textContent = (`You are paying with Matercard!`)
    }   else if(paypalcard.checked){
        paymentresult.textContent = (`You are paying with Paypal!`)
    }   else{
        paymentresult.textContent = (`You must select a payment type!`)
    }

    let discount = purchaseamount >= 100 ? 10 : 0
    console.log(`Your total is $${purchaseamount - purchaseamount * discount/100}`)

}

let username = email.slice(0, email.indexOf('@'))
let extension = email.slice(email.indexOf('@'))
console.log(username)
console.log(extension)