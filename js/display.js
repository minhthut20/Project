function checkLoginStatus() {
    let arr = JSON.parse(localStorage.getItem("listUser"))
    let loginKey = JSON.parse(localStorage.getItem("loginKey"))
    let flag = false
    for (i = 0; i < arr.length; i++) {
        if (arr[i].id == loginKey[0] && arr[i].pass == loginKey[1]) {
            flag = true
            break
        }
    }
    return flag
}

//doi dao dien ddang nhap dang xuat
function changeLoginGUI() {
    if (checkLoginStatus()) {
        let pop = document.querySelector(".pop-up-icon")
        pop.childNodes[9].innerHTML = "Change Password"
        pop.childNodes[9].setAttribute("href", "/page/changpass.html")
        pop.childNodes[11].setAttribute("onclick", "logOutGUI()")
    }
}

changeLoginGUI()

//log out 
function logOutGUI() {
    let arr = []
    localStorage.setItem("loginKey", JSON.stringify(arr))
    window.location.href = "/index.html"
}