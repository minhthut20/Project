// tạo lớp sản phẩm
function Product(id, image, nameProduct, price, quantity) {
    this.id = id;
    this.image = image;
    this.nameProduct = nameProduct;
    this.price = price;
    this.quantity = quantity;
}

// Khởi tạo các đối tượng sản phẩm
let newProduct1 = new Product(
    1,
    "/assets/vong1.jpg",
    " Aphrodite",
    6000000,
    1
);
let newProduct2 = new Product(
    2,
    "/assets/vong2.jpg",
    "Hathor",
    4500000,
    1
);
let newProduct3 = new Product(
    3,
    "/assets/vong3.jpg",
    "Freya",
    5600000,
    1
);
let newProduct4 = new Product(
    4,
    "/assets/vong4.jpg",
    "Cliodna",
    4000000,
    1
);
let newProduct5 = new Product(
    5,
    "/assets/nhan1.jpg",
    "Lakshmi",
    3800000,
    1
);
let newProduct6 = new Product(
    6,
    "/assets/nhan2.jpg",
    " Xochiquetzal",
    5200000,
    1
);
let newProduct7 = new Product(
    7,
    "/assets/nhan3.jpg",
    " Oshun",
    5500000,
    1
);
let newProduct8 = new Product(
    8,
    "/assets/nhan4.jpg",
    "Hera",
    4900000,
    1
);
let newProduct9 = new Product(
    9,
    "/assets/khuyen1.jpg",
    "Poseidon",
    4900000,
    1
);
let newProduct10 = new Product(
    10,
    "/assets/khuyen2.jpg",
    "Demeter",
    4900000,
    1
);
let newProduct11 = new Product(
    11,
    "/assets/khuyen3.jpg",
    "Athena",
    4900000,
    1
);
let newProduct12 = new Product(
    12,
    "/assets/khuyen4.jpg",
    "Artemis",
    4900000,
    1
);

// push các sản phẩm vảo mảng rồi lưu xuống localStorage
var arrayProduct = [];
arrayProduct.push(newProduct1);
arrayProduct.push(newProduct2);
arrayProduct.push(newProduct3);
arrayProduct.push(newProduct4);
arrayProduct.push(newProduct5);
arrayProduct.push(newProduct6);
arrayProduct.push(newProduct7);
arrayProduct.push(newProduct8);
arrayProduct.push(newProduct9);
arrayProduct.push(newProduct10);
arrayProduct.push(newProduct11);
arrayProduct.push(newProduct12);
console.log(arrayProduct);

// localStorage.setItem("listProduct", JSON.stringify(arrayProduct));

let listUser = JSON.parse(localStorage.getItem("listUser"))
if (listUser == null) {
   listUser = []
    localStorage.setItem("listUser", JSON.stringify(listUser))
}

let listProduct = JSON.parse(localStorage.getItem("listProduct"))
if (listProduct == null) {
  
    localStorage.setItem("listProduct", JSON.stringify(arrayProduct))
}


function markFavorite() {
    if (checkLoginStatus()){
        let id = verifyIdUser()
        let arr = JSON.parse(localStorage.getItem("listUser"))
        let listFavorite = arr[id].listFavorite;
        let listProduct = JSON.parse(localStorage.getItem("listProduct"));
    
        for (let i = 0; i < listFavorite.length; i++) {
            for (let j = 0; j < listProduct.length; j++) {
                if (listFavorite[i].id == listProduct[j].id) {
                    console.log(i, j);
                    let loc = document.querySelector(`.prd_${j + 1}`);
                    let changFavorite = loc.childNodes[5].childNodes[3].childNodes[3];
                    changFavorite.classList.add("readyFavorite")
                }
            }
        }
    }
}
//Lấy danh sách listProduct dưới localStorage

// let listProduct = JSON.parse(localStorage.getItem("listProduct"));
function getListProduct(listProduct) {
    localStorage.setItem("listProduct", JSON.stringify(arrayProduct))
    let productList = document.getElementById("listProduct");
    // Hiển thị các card đổ từ dữ liệu
    // console.log(listProduct);
    let data = "";
    for (var i = 0; i < listProduct.length; i++) {
        let item = ` <div class="productItem prd_${listProduct[i].id}"> 
                        <div> <img src="${listProduct[i].image}"></div>
                        <div class="nameProduct"><p>${listProduct[i].nameProduct}</p></div>
                        <div class="priceProduct">
                            <div><p>$${listProduct[i].price}</p></div> 
                            <div class="iconDetail">
                            <i class="fa fa-thin fa-bag-shopping iconCart " onClick="addProductCart(${i})"></i>
                            <i class="fa fa-thin fa-heart favorite" onClick="addFavorite(${i})"></i>
                            </div>
                        </div>
                    </div>`;
        data += item;
    }
    productList.innerHTML = data;
}


listProduct = JSON.parse(localStorage.getItem("listProduct"))
getListProduct(listProduct);
markFavorite();

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


// Mục giỏ hàng
function addProductCart(indexProduct) {
    if (checkLoginStatus()) {
        let id = verifyIdUser()
        let arr = JSON.parse(localStorage.getItem("listUser"))
        let listCart = arr[id].listCart;
        if (listCart == undefined) {
            // k tồn tại tạo ra mảng trống
            listCart = []
        }

        // push dữ liệu mới vào mảng đồng thời đẩy lên local Stoge
        if (listCart.length != 0) {
            let flag = true;
            let position = 0;
            for (let i = 0; i < listCart.length; i++) {
                if (listCart[i].nameProduct == arrayProduct[indexProduct].nameProduct) {
                    flag = false;
                    position = i
                    break;
                }
            }
            if (flag == false) {
                listCart[position].quantity++;
            }
            else {
                listCart.push(arrayProduct[indexProduct]);
            }

        }
        else {
            listCart.push(arrayProduct[indexProduct]);
        }


        arr[id].listCart = listCart
        window.localStorage.setItem("listUser", JSON.stringify(arr));
        alert(" Added to Cart !");
    }
    else {
        let checkConfirm = confirm(`
        Please login to use this feature
        Are you want to Login? `)
        if (checkConfirm) {
            window.location.href = "/page/login.html"
        }
    }
}

// Mục yêu thích
function addFavorite(index) {
    if (checkLoginStatus()) {

        let id = verifyIdUser()
        let arr = JSON.parse(localStorage.getItem("listUser"))
        let listFavorite = arr[id].listFavorite;
        if (listFavorite == undefined) {

            listFavorite = []
        }
        if (listFavorite.length == 0) {
            listFavorite.push(listProduct[index]);
            arr[id].listFavorite = listFavorite
            window.localStorage.setItem("listUser", JSON.stringify(arr));
            markFavorite()
            alert("Add to favorites !")
        }
        else {
            for (i = 0; i < listFavorite.length; i++) {

                if (listFavorite[i].id == listProduct[index].id) {
                    alert("The product is already in favorites")
                    break
                }
                else if (i == listFavorite.length - 1) {
                    listFavorite.push(listProduct[index]);
                    arr[id].listFavorite = listFavorite
                    window.localStorage.setItem("listUser", JSON.stringify(arr));
                    markFavorite()
                    alert("Add to favorites !");
                    break
                }
            }
        }
    }
    else {
        let checkConfirm = confirm(`
        Please login to use this feature
        Are you want to Login? `)
        if (checkConfirm) {
            window.location.href = "/page/login.html"
        }
    }
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


// tìm kiếm sản phẩm theo tên đưa ra
function search() {
    let listProduct = JSON.parse(localStorage.getItem("listProduct"));
    let data = [];
    let search = document.getElementById("search").value.toLowerCase();
    for (let i = 0; i < listProduct.length; i++) {
        if (listProduct[i].nameProduct.toLowerCase().indexOf(search) != -1) {
            console.log(listProduct[i].nameProduct.toLowerCase().indexOf(search));
            data.push(listProduct[i]);
        }
    }
    getListProduct(data);
}


