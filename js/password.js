let listUser = JSON.parse(localStorage.getItem("listUser"))
if (listUser == null) {
    listUser = [];
    localStorage.setItem('listUser', JSON.stringify(listUser))
}

let loginKey = JSON.parse(localStorage.getItem("loginKey"))
if (loginKey == null) {
    loginKey = [];
    localStorage.setItem('loginKey', JSON.stringify(loginKey))
}
// con mắt ở phần nhập mã bảo mật
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");
togglePassword.addEventListener("click", function () {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    this.classList.toggle("bi-eye");
});

// con mắt ở phần nhập  mật khẩu moi
const togglePassword1 = document.querySelector("#togglePassword1");
const password1 = document.querySelector("#password1");
togglePassword1.addEventListener("click", function () {
    const type = password1.getAttribute("type") === "password" ? "text" : "password";
    password1.setAttribute("type", type);
    this.classList.toggle("bi-eye");
});

// con mat o phan nhap lai mk moi
const togglePassword2 = document.querySelector("#togglePassword2");
const password2 = document.querySelector("#password2");
togglePassword2.addEventListener("click", function () {
    const type = password2.getAttribute("type") === "password" ? "text" : "password";
    password2.setAttribute("type", type);
    this.classList.toggle("bi-eye");
});


//check email có trùng ở local k 
let email = document.querySelector("#email")
let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let alertEmail = document.querySelector("#alertEmail");
email.addEventListener('input', checkEmail)
checkEmail()

function checkEmail() {
    let arr = JSON.parse(localStorage.getItem("listUser"))
    console.log(arr);
    //check đúng email chưa
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id == email.value) {
            console.log(arr[i]);
            alertEmail.innerHTML = "Email Valid";
            alertEmail.style.color = "green"
            return true;
        }
    }
}

//check mã bảo mật có ở local k
function checkPass() {
    let arr = JSON.parse(localStorage.getItem("listUser"))
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].secutity == password.value) {
            alert0.innerHTML = "Password Valid"
            alert0.style.color = "green"
            console.log(123123);
        }
    }
}


password1.addEventListener('input', checkPass)
function checkPass() {
    let decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*\s).{8,15}$/;
    let alert1 = document.getElementById("alert1");
    if (password1.value.match(decimal)) {
        document.getElementById("alert1").innerHTML = "";
        alert1.style.color = 'green';
        return true;
    }
    else {
        document.getElementById("alert1").innerHTML = "";
        alert1.style.color = 'red';
        return false;
    }
}

//check mk moi trung nhau k 
password2.addEventListener('input', checkpass2)
function checkpass2() {
    let alert2 = document.getElementById("alert2");
    if (password1.value == password2.value) {
        alert2.innerHTML = "Password  match"
        alert2.style.color = "green";
        return true;
    }
    else {
        alert2.innerHTML = "Password do NOT match"
        alert2.style.color = "red";
        return false;
    }
}



function totalcheck() {
    // console.log(checkPass() == true && checkpass2() == true && checkEmail() == true);
    if (checkPass() == true && checkpass2() == true && checkEmail() == true) {
        updatePassword()
        return true
    }
    else {
        return false
    }
}

//luu mk moi vao local
function updatePassword() {
    let arr = JSON.parse(localStorage.getItem("listUser"))
    for (i = 0; i < arr.length; i++) {
        if (arr[i].id == email.value) {
            let newPass = password2.value
            alert("Password Reset successful")
            arr[i].pass = newPass;
            localStorage.setItem('listUser', JSON.stringify(arr));
            window.location.href = "/page/login.html"

            let loginKey = []
            localStorage.setItem("loginKey", JSON.stringify(loginKey))
            return true
        }
    }
}













