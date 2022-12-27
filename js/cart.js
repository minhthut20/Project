function verifyIdUser() {
    let arr = JSON.parse(localStorage.getItem("listUser"))
    let loginKey = JSON.parse(localStorage.getItem("loginKey"))
    let userId
    for (i = 0; i < arr.length; i++) {
        if (arr[i].id == loginKey[0]) {
            userId = i
            break
        }
    }
    return userId;
}

// lấy danh sách listCart dưới localStorage
function getListPrice() {
    var totalPrice = document.getElementById("btn-total");
    var total = 0;
    var listCart = document.getElementById("productCart");
    let id = verifyIdUser()

    let arr = JSON.parse(localStorage.getItem("listUser"))
    let listPriceCart = arr[id].listCart;
    if (listPriceCart.length == "") {
        listCart.innerHTML = "";
        return
    }
    let data = `<tr>
           <td>Image Product</td>
           <td>Product's name</td>
           <td>Unit Price</td>
           <td>Quantity</td>
           <td>Into Money</td>
           <td>Action</td>
           </tr>
       `;
    for (var i = 0; i < listPriceCart.length; i++) {
        data += `<tr>
        <td><img src="${listPriceCart[i].image}"></td>
        <td>${listPriceCart[i].nameProduct}</td>
           <td> ${listPriceCart[i].price}</td>
           <td class="quantityCart"><input class = "modified" type="text" value= "${listPriceCart[i].quantity}" onchange="modified(${i})"</td>
           <td>${listPriceCart[i].price * listPriceCart[i].quantity}</td>
           <td class="deleteCart"><button class="btn-danger" onClick="deleteCart(${i})">Xóa</button></td>
           </tr>
       `;
        // tổng tiền 
        listCart.innerHTML = data;
        total += listPriceCart[i].price;
    }
    totalPrice.innerHTML = total;
}
getListPrice();

//thanh toán
function caculateTotal() {
    let sum = 0;
    let id = verifyIdUser()

    let arr = JSON.parse(localStorage.getItem("listUser"))
    let listPriceCart = arr[id].listCart;
    for (let i = 0; i < listPriceCart.length; i++) {
        sum += listPriceCart[i].price * listPriceCart[i].quantity
    }
    // var buttonTotal = document.getElementById("btn-total");
    buttonTotal.value = sum
    return sum
}

let total = document.getElementById("total")
var listCart = document.getElementById("productCart");
var buttonTotal = document.getElementById("btn-total");
buttonTotal.value = caculateTotal()

function payment_btn() {
    let alertPopUp = document.querySelectorAll(".alert-pop-up")
    alertPopUp[0].style.visibility = 'visible'
}

function confirm_btn() {
    let alertPopUp = document.querySelectorAll(".alert-pop-up")
    alertPopUp[0].style.visibility = 'hidden'
    let id = verifyIdUser()

    let arr = JSON.parse(localStorage.getItem("listUser"))
    arr[id].listCart = []

    localStorage.setItem("listUser", JSON.stringify(arr))
    window.location.href = "/index.html"
    getListPrice()
    caculateTotal()
}

// xóa khỏi list Cart
function deleteCart(index) {
    let id = verifyIdUser()
    let arr = JSON.parse(localStorage.getItem("listUser"))
    let listPriceCart = arr[id].listCart

    listPriceCart.splice(index, 1);
    arr[id].listCart = listPriceCart
    localStorage.setItem("listUser", JSON.stringify(arr));
    getListPrice();
    caculateTotal()
}

//sửa list Cart
function modified(index) {
    let id = verifyIdUser()
    let arr = JSON.parse(localStorage.getItem("listUser"))
    let listPriceCart = arr[id].listCart

    let modifiedValue = document.getElementsByClassName("modified")[index]

    
    listPriceCart[index].quantity = modifiedValue.value;
    arr[id].listCart = listPriceCart
    localStorage.setItem("listUser", JSON.stringify(arr));
    getListPrice();
    caculateTotal()
}

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