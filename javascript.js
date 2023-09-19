// check validity on fName
fName.addEventListener("keyup", () => {
    if (fName.checkValidity()) {
        fName.classList.remove("error");
    }
    else {
        fName.classList.add("error");
    }
});

// check validity on email
email.addEventListener("keyup", () => {
    if (email.checkValidity()) {
        email.classList.remove("error");
    }
    else {
        email.classList.add("error");
    }
});

// check validity on phone
phone.addEventListener("keyup", () => {
    if (phone.checkValidity()) {
        phone.classList.remove("error");
    }
    else {
        phone.classList.add("error");
    }
});

// check validity on passwords
pwd.addEventListener("keyup", () => {
    if (cpwd.value == pwd.value) {
        pwd.classList.remove("error");
        cpwd.classList.remove("error");
    }
    else {
        pwd.classList.add("error");
        cpwd.classList.add("error");
    }
});
cpwd.addEventListener("keyup", () => {
    if (cpwd.value == pwd.value) {
        pwd.classList.remove("error");
        cpwd.classList.remove("error");
    }
    else {
        pwd.classList.add("error");
        cpwd.classList.add("error");
    }
});

// check validity on submit
let submit = document.querySelector(".submitBtn");
submit.addEventListener("click", () => {
    if (!fName.checkValidity()) {
        fName.classList.add("error");
    }
    if (!email.checkValidity()) {
        email.classList.add("error");
    }
    if (!phone.checkValidity()) {
        phone.classList.add("error");
    }
    if (pwd.value != cpwd.value || !pwd.checkValidity() || !cpwd.checkValidity()) {
        pwd.classList.add("error");
        cpwd.classList.add("error");
    }
});
