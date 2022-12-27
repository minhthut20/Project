//Khoi tao local

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



// xác thực phần email
let email = document.querySelector("#email")
let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let alertEmail = document.querySelector("#alertEmail");
email.addEventListener('input', checkEmail)

function checkEmail() {
    let arr = JSON.parse(localStorage.getItem("listUser"))
    //check mail đã đki hay không
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id == email.value) {
            alertEmail.innerHTML = "Email đã tồn taị";
            alertEmail.style.color = "red"
            return false;
        }
    }
    // check mail đúng định dạng hay không
    if (email.value.match(mailformat)) {
        alertEmail.innerHTML = "Valid Email";
        alertEmail.style.color = "green"
        return true;
    }
    else {
        alertEmail.innerHTML = "Invalid email address"
        alertEmail.style.color = "red"
        return false;
    }
}


// con mắt ở phần nhập mật khẩu 
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");
togglePassword.addEventListener("click", function () {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    this.classList.toggle("bi-eye");
});

// con mắt ở phần nhập lại mật khẩu
const togglePassword1 = document.querySelector("#togglePassword1");
const password1 = document.querySelector("#password1");
togglePassword1.addEventListener("click", function () {
    const type = password1.getAttribute("type") === "password" ? "text" : "password";
    password1.setAttribute("type", type);
    this.classList.toggle("bi-eye");
});

//con mắt phần mã bảo mật
const togglePassword2 = document.querySelector("#togglePassword2");
const password2 = document.querySelector("#password2");
togglePassword2.addEventListener("click", function () {
    const type = password2.getAttribute("type") === "password" ? "text" : "password";
    password2.setAttribute("type", type);
    this.classList.toggle("bi-eye");
});


// check định dạng của mật khảu
password.addEventListener('input', checkPass)
function checkPass() {
    let decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*\s).{8,15}$/;
    let alert0 = document.getElementById("alert0");
    if (password.value.match(decimal)) {
        document.getElementById("alert0").innerHTML = "*Require a-z, A-Z, 0-9, and length 8-15";
        alert0.style.color = 'green';
        return true;
    }
    else {
        document.getElementById("alert0").innerHTML = "*Require a-z, A-Z, 0-9, and length 8-15";
        alert0.style.color = 'red';
        return false;
    }
}

// check trùng khớp mật khẩu
password1.addEventListener('input', checkpass2)
function checkpass2() {
    let alert1 = document.getElementById("alert1");
    if (password.value == password1.value) {
        alert1.innerHTML = "Password  match"
        alert1.style.color = "green";
        return true;
    }
    else {
        alert1.innerHTML = "Password do NOT match"
        alert1.style.color = "red";
        return false;
    }
}

// check lại tổng hợp 3 điều kiện email, pasword, confirm
function totalcheck() {
    if (checkPass() == true && checkpass2() == true && checkEmail() == true) {
        return true
    }
    else {
        return false
    }
}

// lưu vào local Storage
let singup = document.querySelector("#submit")
var getUser = localStorage.getItem("listUser");
// check đk local storage có dữ liệu hay không
if (getUser == null) {
    var arr = [];
} else {
    var arr = JSON.parse(getUser);
}
// lưu mật khẩu vào localStorage
singup.addEventListener('click', function () {
    if (totalcheck() == true) {
        let Account = function (id, pass, security) {
            this.id = id
            this.pass = pass
            this.security = security
        }
        let account = new Account(email.value, password.value, password2.value)
        arr.push(account)
        localStorage.setItem('listUser', JSON.stringify(arr));
        window.location.href = "/page/login.html"
    }
})

//doi dao dien ddang nhap dang xuat
function changeLoginGUI() {
    let arr = JSON.parse(localStorage.getItem("listUser"))
    let loginKey = JSON.parse(localStorage.getItem("loginKey"))
    for (i = 0; i < arr.length; i++) {
        if (arr[i].id == loginKey[0] && arr[i].pass == loginKey[1]) {
            let pop = document.querySelector(".pop-up-icon")
            pop.childNodes[9].innerHTML = "Change Password"
            pop.childNodes[9].setAttribute("href", "/page/changpass.html")
            console.log(pop.childNodes[9])
        }
    }
}
changeLoginGUI()