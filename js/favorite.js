function verifyIdUser() {
  let arr = JSON.parse(localStorage.getItem("listUser"))
  let loginKey = JSON.parse(localStorage.getItem("loginKey"))
  let userId = false
  console.log(arr);
  for (i = 0; i < arr.length; i++) {
    if (arr[i].id == loginKey[0]) {
      userId = i
      break
    }
  }
  return userId;
}

function getListFavorite() {
  let id = verifyIdUser()

  let arr = JSON.parse(localStorage.getItem("listUser"))

  let listFavorite = arr[id].listFavorite;
  var favoriteList = document.getElementById("cart");
  // Hiển thị các card đổ từ dữ liệu
  let data = "";
  for (var i = 0; i < listFavorite.length; i++) {
    let item = `<div class="card-head"><img src="${listFavorite[i].image}"></div>
                <div class="card-body">
                    <div class="product-desc">
                      <span class="product-title">${listFavorite[i].nameProduct}</span>
                    </div>
                    <div class="product-properties">
                      <span class="product-price"><b>${listFavorite[i].price}</b> VND</span>
                    </div>
                    <div>
                      <span class="remove_btn">Remove</span>
                    </div>
                </div>`;
    data += item;
  }
  favoriteList.innerHTML = data;
}
getListFavorite();

function remove() {
  let remove_btn = document.querySelectorAll(".remove_btn");
  for (let i = 0; i < remove_btn.length; i++) {
    remove_btn[i].addEventListener("click", function () {
      let id = verifyIdUser()
      let arr = JSON.parse(localStorage.getItem("listUser"))
      let listFavorite = arr[id].listFavorite;

      listFavorite.splice(i, 1)
      arr[id].listFavorite = listFavorite
      localStorage.setItem("listUser", JSON.stringify(arr))
      getListFavorite()
      remove()
    })
  }
}
remove()

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