const name = document.querySelector('#name');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const password = document.querySelector('#password');
const error = document.querySelector('#error');
const signup = document.querySelector('#signup');
var nonumber = /\d/;
var validemail = /@.*\./;
var validemail1 = /\s/g;

let namedata = "";
let emaildata = "";
let phonedata = 0;
let passworddata = "";

var na = 0;
var em = 0;
var ph = 0;
var pa = 0;



name.addEventListener('input', namefunction);
email.addEventListener('input', emailfunction);
phone.addEventListener('input', phonefunction);
password.addEventListener('input', passwordfunction);
signup.addEventListener('click', signupfunction);


function namefunction(e) {
    if (e.target.value == '') {
        error.innerHTML = "Minimum 3 Characters without numbers accepted";
        error.style.color = "Red";
        na = 0;


    }

    else if ((e.target.value.length >= 3) && (nonumber.test(e.target.value)) == false) {
        error.innerHTML = "Success";
        error.style.color = "Green";
        namedata = e.target.value;
        na = na + 1;


    }
    else {
        error.innerHTML = "Minimum 3 Characters without numbers accepted";
        error.style.color = "Red";
        na = 0;

    }
}



function emailfunction(e) {
    if (e.target.value == '') {
        error.innerHTML = "Invalid format";
        error.style.color = "Red";
        em = 0;
    }
    else if ((e.target.value.length >= 5) && (validemail.test(e.target.value) == true) && (validemail1.test(e.target.value) == false) == true) {
        error.innerHTML = "Email format success";
        error.style.color = "Green";
        emaildata = e.target.value;
        em = em + 1;
    }
    else {
        error.innerHTML = "Email format failure";
        error.style.color = "Red";
        em = 0;
    }
}



function phonefunction(e) {
    if (e.target.value == '') {
        error.innerHTML = "Empty input";
        error.style.color = "Red";
        ph = 0;
    }
    else if ((e.target.value.length >= 10) && (nonumber.test(e.target.value)) == true) {
        error.innerHTML = "Success";
        error.style.color = "Green";
        phonedata = parseInt(e.target.value);
        ph = ph + 1;

    }
    else {
        error.innerHTML = "Kindly provide your 10 digit mobile number";
        error.style.color = 'Red';
        ph = 0;
    }
}


function passwordfunction(e) {
    if (e.target.value == '') {
        error.innerHTML = "Invalid format";
        error.style.color = "Red";
        pa = 0;
    }
    else if (e.target.value.length >= 6) {
        error.innerHTML = "Success";
        error.style.color = "Green";
        passworddata = e.target.value;
        pa = pa + 1;
    }
    else {
        error.innerHTML = "Kindly provide password of six characters";
        error.style.color = 'Red';
        pa = 0;
    }
}



function signupfunction(e) {
    event.preventDefault();
    if ((na >= 3) && (em > 0) && (ph > 0) && (pa > 0)) {
        alert("Details Submitted :)");
        signup.submit();

    }
    else {

        alert('Partial inputs, Pls fill all details')
        // alert(`${na}\n ${em}\n${ph}\n${pa}`);
    }

}




    // if (((namefunction == 1) && (emailfunction == true) && (phonefunction == true) && (passwordfunction == true)) == true) {
    //     // // if (((na == true) && (em == true) && (ph == true) && (pa == true)) == true) {
    //     // if ((na && em && ph && pa) == true) {
    //     alert("Details submitted");
    //     alert(`name ${namedata}\n email ${emaildata}\n Password ${passworddata}\n Phone ${phonedata}`);
    //     // event.preventDefault();
    // }
    // else {
    //     // alert("Partial Input!!, Review your details..")
    //     event.preventDefault();
    //     alert(`ELSE NA-${em},EM ${emailfunction}, PH -${phonefunction}, PA- ${passwordfunction}`)
    // }




