//call
let password = document.querySelector('#password')
let confirm_Password = document.querySelector('#confirmPassword')
let captchaText = document.querySelector('#captcha-text')
let submitBtn = document.querySelector('#submitBtn')
let toggle_pass_Btn = document.querySelector('#togglePass');
let toggle_confirm_Btn = document.querySelector('#toggleConfirm');


// addevent listioner for passwordand confirmpassword

toggle_pass_Btn.addEventListener('click', function () {
    if (password.type === "password") {
        password.type = "text"; // Show password
        toggle_pass_Btn.textContent = "🙈"; // Update icon
    } else {
        password.type = "password"; //  Hide password
        toggle_pass_Btn.textContent = "👁️"; //  Update icon
    }
});

toggle_confirm_Btn.addEventListener('click', function () {
    if (confirm_Password.type === "password") {
        confirm_Password.type = "text";
        toggle_confirm_Btn.textContent = "🙈";

    } else {
        confirm_Password.type = "password"
        toggle_confirm_Btn.textContent = "👁️";
    }
})

function password_same() {
    let p = password.value;
    let cp = confirm_Password.value;

    if (p !== cp) {
        document.querySelector('#registerForm .error').textContent = "❌ Passwords do not match";
    } else {
        document.querySelector('#registerForm .error').textContent = ""; // clear error
    }
}


function capthcha_changes() {
    let arr = ['az341', 'ghyU23', 'GHYu7', 'JmKui23', 'Ulcoe7']

    let random = Math.floor(Math.random() * arr.length);
    captchaText.textContent = arr[random]
}
capthcha_changes()

function isStrongPassword() {
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return regex.test(password.value);
}

submitBtn.addEventListener('click', () => {
    let errorBox = document.querySelector('#registerForm .error');

    if (!isStrongPassword()) {
        errorBox.textContent = "❌ Weak password. Use 8+ chars with upper, lower, number, special.";
        return
    }

    if (password.value !== confirm_Password.value) {
        errorBox.textContent = "❌ Passwords do not match";
        return;
    }

    //captcha
    let captchainput = document.querySelector('#captchaInput');


    if (captchaText.textContent !== captchainput.value) {
        errorBox.textContent = "❌ Captcha is incorrect";
        setTimeout(() => errorBox.textContent = "", 9000);
        return; // Stops here, does NOT store
    }

    // If this line is reached, captcha is correct
    errorBox.textCont = "✅ Captcha correct! Data stored.";
}
);




