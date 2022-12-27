function renderListProduct() {
    let listProduct = JSON.parse(localStorage.getItem("listProduct"))
    let listProductManager = document.querySelector(".listProductManager")
    let data = ""
    for (i = 0; i < listProduct.length; i++) {
        data += `
                    <tr>
                        <td>${listProduct[i].id}</td>
                        <td class = "changeImage"><img src="${listProduct[i].image}"></td>
                        <td>${listProduct[i].nameProduct}</td>
                        <td>${listProduct[i].price}</td>
                        <td>${listProduct[i].quantity}</td>
                        <td><button onclick="delete_btn(${i})" class = "delete-btn">Delete</button><button onclick="edit_btn(${i})" class = "edit_btn">Edit</button></td>
                    </tr>`
    }
    listProductManager.innerHTML = data;
}
renderListProduct()

// nút delete 
function delete_btn(index) {
    let listProduct = JSON.parse(localStorage.getItem("listProduct"))
    listProduct.splice(index, 1)
    localStorage.setItem("listProduct", JSON.stringify(listProduct))
    renderListProduct()
}
let createImg = document.getElementById("createImg");
let createName = document.getElementById("createName");
let createPrice = document.getElementById("createPrice");

function edit_btn(index) {
    let listProduct = JSON.parse(localStorage.getItem("listProduct"))
    createImg.value = listProduct[index].image
    createName.value = listProduct[index].nameProduct
    createPrice.value = listProduct[index].price
    localStorage.setItem('key', JSON.stringify(index))
}

function update() {
    let index = JSON.parse(localStorage.getItem("key"));
    let listProduct = JSON.parse(localStorage.getItem("listProduct"))
    listProduct[index].image = createImg.value
    listProduct[index].nameProduct = createName.value
    listProduct[index].price = createPrice.value
    localStorage.setItem('listProduct', JSON.stringify(listProduct))
    renderListProduct()

}
let updateBtn = document.getElementById("updateBtn")
updateBtn.addEventListener("click", update)

// quan ly user
function renderUser() {
    let arr = JSON.parse(localStorage.getItem("listUser"));
    let listUserManager = document.querySelector(".listUserManager")
    data = "";
    for (let i = 0; i < arr.length; i++) {
        data += `
                <tr>
                    <td>${i + 1}</td>
                    <td>${arr[i].id}</td>
                    <td>${arr[i].pass}</td>
                    <td>${arr[i].security}</td>
                </tr>
            `
    }
    listUserManager.innerHTML = data;
}
renderUser()

let renderProduct = document.getElementById("render-Product")
let userContent = document.getElementById("user-content")
function showRenderProduct() {
    if (renderProduct.style.display == "none") {
        renderProduct.style.display = "block"
        userContent.style.display = "none"
    }
    else {
        renderProduct.style.display = "none"
    }
}

function showUserProduct() {
    if (userContent.style.display == "none") {
        userContent.style.display = "block"
        renderProduct.style.display = "none"
    }
    else {
        renderProduct.style.display = "none"
    }
}
