const dob = document.getElementById("dob");
const age = document.getElementById("age");
const form = document.getElementById("form");
const successBox = document.getElementById("successBox");
const successImg = document.getElementById("successImg");
const phoneInput = document.getElementById("phone");

/* Ensure +91 always stays */
phoneInput.addEventListener("input", () => {
    if (!phoneInput.value.startsWith("+91")) {
        phoneInput.value = "+91";
    }
});

/* Age calculation */
dob.addEventListener("change", () => {
    let birthDate = new Date(dob.value);
    let today = new Date();

    let calculatedAge = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        calculatedAge--;
    }

    age.value = calculatedAge;
});

/* Form submit */
form.addEventListener("submit", (e) => {
    e.preventDefault();

    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let phone = phoneInput.value;
    let email = document.getElementById("email").value;

    let phonePattern = /^\+91\d{10}$/;
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    if (!phone.match(phonePattern)) {
        alert("Enter valid Indian phone number!");
        return;
    }

    if (!email.match(emailPattern)) {
        alert("Enter valid email!");
        return;
    }

    /* Change success image dynamically */
    successImg.src = "https://cdn-icons-png.flaticon.com/512/190/190411.png";

    /* Show success */
    successBox.style.display = "block";

    /* Change background */
    document.body.classList.add("success-bg");

    /* Reset form (keep +91) */
    form.reset();
    age.value = "";
    phoneInput.value = "+91";
});