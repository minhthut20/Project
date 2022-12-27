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

// con mắt ở phần nhập mật khẩu 
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");
togglePassword.addEventListener("click", function () {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    this.classList.toggle("bi-eye");
});


//check email có tồn tại hay chưa
let email = document.querySelector("#email")
// let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let alertEmail = document.querySelector("#alertEmail");
email.addEventListener('input', function () {
    let arr = JSON.parse(localStorage.getItem("listUser"))
    for (i = 0; i < arr.length; i++) {
        if (email.value == arr[i].id) {
            alertEmail.innerHTML = "Valid Email";
            alertEmail.style.color = "green";
            return true
        }
        else if (i == arr.length - 1) {
            alertEmail.innerHTML = "Invalid email"
            alertEmail.style.color = "red"
            return false
        }
    }
})

//ghi du lieu vao login key 
function writeLoginStatus() {
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let loginKey = [email, password]
    console.log(loginKey);
    localStorage.setItem("loginKey", JSON.stringify(loginKey))
}



//check tài khoản đki rồi thì mới vào được trang chủ
let accountList = localStorage.getItem("key")
let arr = JSON.parse(accountList)
function checkPassword() {
    let arr = JSON.parse(localStorage.getItem("listUser"))
    for (i = 0; i < arr.length; i++) {
        if (arr[i].id == email.value) {
            if (arr[i].pass == password.value) {
                alert("Logged in successfully")
                window.location.href = "/index.html"
                writeLoginStatus()
                return true
            }
            else {
                alert("Incorrect password")
                return false
            }
        }
        else if (i == arr.length - 1) {
            alert("This Account Does Not Exist")
            return false
        }
    }
}

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