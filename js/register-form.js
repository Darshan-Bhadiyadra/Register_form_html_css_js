function frm() {
    // input element get
    let user = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let pass = document.getElementById('password').value;
    let cpass = document.getElementById('confirmpassword').value;

    //Errorr Variable get
    let useer = document.getElementById('useer');
    let emailer = document.getElementById('emailer');
    let passer = document.getElementById('passer');
    let cpaser = document.getElementById('cpasser');

    //prag-match regex for validation of userinput data
    let userprag =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{3,12}$/;
    let emaiprag = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let passprag = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    //by default given true instead of return true;
    isvalid = true;
    
    //@todo instead of adding css toggle class and add css in the class
    // User Input
    if (user == "" || userprag.test(user) == false) {
        let togglel = document.querySelector('#user input');
            togglel.classList.add('red');
            togglel.classList.remove('green');

        let intog = document.querySelector('#user p');
            intog.classList.add('opacity');    

        useer.textContent = "Username must be atleast 3 characters";
        isvalid = false;
    } else {   
        let togglel = document.querySelector('#user input');
            togglel.classList.remove('red');
            togglel.classList.add('green');
        useer.textContent = "";
        isvalid = false;
    }

    // Email Input
    if (email == "" || emaiprag.test(email) == false) {
        let togglel = document.querySelector('#em input');
            togglel.classList.add('red');
            togglel.classList.remove('green');

        let intog = document.querySelector('#em p');
            intog.classList.add('opacity');    

        emailer.textContent = "Email is not valid";
        isvalid = false;
    } else {
        let togglel = document.querySelector('#em input');
            togglel.classList.remove('red');
            togglel.classList.add('green');
        emailer.textContent = "";
        isvalid = false;
    }

    //Passsword Input
    if (pass == "" || passprag.test(pass) == false) {
        let togglel = document.querySelector('#pa input');
            togglel.classList.add('red');
            togglel.classList.remove('green');

        let intog = document.querySelector('#pa p');
            intog.classList.add('opacity');    

        passer.textContent = "Password must be atleast 6 characters";
        isvalid = false;
    } else {
        let togglel = document.querySelector('#pa input');
            togglel.classList.remove('red');
            togglel.classList.add('green');
        passer.textContent = "";
        isvalid = false;
    }

    // Confirm Password Input
    if (cpass == "") {
        let togglel = document.querySelector('#pa1 input');
            togglel.classList.add('red');
            togglel.classList.remove('green');

        let intog = document.querySelector('#pa1 p');
            intog.classList.add('opacity');    

        cpasser.textContent = "Password2 is required";
        isvalid = false;
    } else {
        let togglel = document.querySelector('#pa1 input');
            togglel.classList.remove('red');
            togglel.classList.add('green');
        cpasser.textContent = "";
        isvalid = false;
    }

    // Password Ans Confirm Password Input
    if (pass && cpass != "") {
        if (pass != cpass) {
            let togglel = document.querySelector('#pa1 input');
            togglel.classList.add('red');
            togglel.classList.remove('green');

            let intog = document.querySelector('#pa1 p');
            intog.classList.add('opacity');    

            cpasser.textContent = "Password not match";
            isvalid = false;
        } else {
            let togglel = document.querySelector('#pa1 input');
                togglel.classList.remove('red');
                togglel.classList.add('green');
            cpasser.textContent = "";
            isvalid = false;
        }
    }
    return false;
}