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
// con mắt ở phần nhập mật khẩu cu
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

//check mật khẩu cũ có trùng ở local không
password.addEventListener(`input`, checkPass)
function checkPass() {
    let arr = JSON.parse(localStorage.getItem("listUser"))
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].pass == password.value) {
            alert0.innerHTML = "Password Valid"
            alert0.style.color = "green"
            return true
        }
        else {
            alert0.innerHTML = "Incorrect password"
            alert0.style.color = "red"
            return false
        }
    }
}


// check mk moi co giong mk cu k
password1.addEventListener('input', checkpass1)
function checkpass1() {
    let alert1 = document.getElementById("alert1");
    if (password.value != password1.value) {
        alert1.innerHTML = "Enter Different Old Password"
        alert1.style.color = "green";
        checkpass2()
        return true;
    }
    else {
        alert1.innerHTML = "New Password same Old Passwod"
        alert1.style.color = "red";
        checkpass2()
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
        checkpass1()
        return true;
    }
    else {
        alert2.innerHTML = "Password do NOT match"
        alert2.style.color = "red";
        checkpass1()
        return false;
    }
}

// check lại tổng hợp 3 điều kiện email, pasword, confirm
function totalcheck() {
    if (checkpass1() == true && checkpass2() == true && checkEmail() == true) {
        updatePassword()
        return true
    }
    else {
        return false
    }
}

// lưu vào local Storage
let singup = document.querySelector("#submit")
let getUser = localStorage.getItem("listUser");
// check đk local storage có dữ liệu hay không
if (getUser == null) {
    let arr = [];
} else {
    let arr = JSON.parse(getUser);
}

//luu mk moi vao local
function updatePassword() {
    let arr = JSON.parse(localStorage.getItem("listUser"))
    for (i = 0; i < arr.length; i++) {
        if (arr[i].id == email.value) {
            if (arr[i].pass == password.value) {
                let newPass = password2.value
                alert("Update in successfully")
                arr[i].pass = newPass;
                localStorage.setItem('listUser', JSON.stringify(arr));
                window.location.href = "/index.html"
                writeLoginStatus()
                return true
            }
        }
    }
}

//ghi du lieu vao login key 
function writeLoginStatus() {
    let email = document.getElementById("email").value
    let password2 = document.getElementById("password2").value
    let loginKey = [email, password2]
    console.log(loginKey);

    localStorage.setItem("loginKey", JSON.stringify(loginKey))
}

//log out 
function logOutGUI() {
    let arr = []
    localStorage.setItem("loginKey", JSON.stringify(arr))
    window.location.href = "/index.html"
}
