class Product {
    imge;
    name;
    price;

    constructor(imge, name, price) {
        this.imge = imge
        this.name = name
        this.price = price
    }

    getImge() {
        return this.imge
    }

    setImge(imge) {
        this.imge = imge
    }

    getName() {
        return this.name
    }

    setName(name) {
        this.name = name
    }

    getPrice() {
        return this.price
    }

    setPrice(price) {
        this.price = price
    }
}




// let productAll = [];
// let product = new Product('https://images.squarespace-cdn.com/content/v1/57c38730bebafb2d4a4f8861/1649778910557-332SXOIMMSON0LJDHOBK/Rucksack+Magazine+Volume+Nine+Cover.jpg?format=750w', 'Volume Eight: Coast (Gold Edition)', '12.00')
// productAll.push(product)
// let product1 = new Product('https://images.squarespace-cdn.com/content/v1/57c38730bebafb2d4a4f8861/1649778910557-332SXOIMMSON0LJDHOBK/Rucksack+Magazine+Volume+Nine+Cover.jpg?format=750w', 'Volume Eight: Coast (Gold Edition)', '12.00')
// productAll.push(product1)
// window.localStorage.setItem("productArr1", JSON.stringify(productAll)) // nối liên kết để lưu trên Storage
let productAll = JSON.parse(window.localStorage.getItem("productArr1")); // nối liên kết để lưu trên Storage


// hiển thị
function displayAllProduct() {
    let data = "<table class='table'>";
        data+= "<tr class='tr'>";
    for (let i = 0; i < productAll.length; i++) {
        // if (i % 5 === 0) {
        //     data += "<tr></tr>"
        // }
        data += `<td class="list-magazine">
                  <a class="list-magazine__link">
                  <img class="magazine-item" src="${productAll[i].imge}"></a>
                  <div class="about-item">${productAll[i].name} </div>
                  <div class="price-item"> £ ${productAll[i].price}</div>`
        console.log(checkAccSucces)
                if(checkAccSucces === true){
                  data +=  ` <div class="btn_product"><button class="btnJs" onclick="editProduct( ${i} )">Edit</button>
                    <button onclick="deleteProduct( ${i} )">Delete</button>`
                    document.getElementById('innerAcc').style.display ="block"
                    document.getElementById('outAcc').style.display ="none"
                }
                data+=`<button onclick="addCart( ${i} )">Add to cart</button></div>`

                data+=  `</td>`
    }
    data += "</tr>"
    data += "</table>"
    document.getElementById('mainProductHere').innerHTML = data;

}


// thêm danh mục sản phẩm mới
function addProduct() {
    let inputImg = document.getElementById("inputImg").value
    let inputName = document.getElementById("inputName").value
    let inputPrice = document.getElementById("inputPrice").value
    let productNew = new Product(inputImg, inputName, inputPrice);
    productAll.push(productNew)
    window.localStorage.setItem("productArr1", JSON.stringify(productAll)) // nối liên kết để lưu trên Storage
    displayAllProduct()
}


let demo;
function editProduct(index) {

    let pro = productAll[index]
    document.getElementById("inputImg").value = pro.imge
    document.getElementById("inputName").value = pro.name
    document.getElementById("inputPrice").value = pro.price
    demo = index
    openTable1()
    window.localStorage.setItem("productArr1", JSON.stringify(productAll)) // nối liên kết để lưu trên Storage

}

function editProduct2() {
    let pro = productAll[demo]
    pro.imge = document.getElementById("inputImg").value
    pro.name = document.getElementById("inputName").value
    pro.price = document.getElementById("inputPrice").value
    window.localStorage.setItem("productArr1", JSON.stringify(productAll)) // nối liên kết để lưu trên Storage
    displayAllProduct()
}


// Xóa sản phẩm
function deleteProduct(index) {
    if (confirm(" Are you sure you want to delete the product " + productAll[index].name + " ?")) {
        productAll.splice(index, 1)
        window.localStorage.setItem("productArr1", JSON.stringify(productAll)) // nối liên kết để lưu trên Storage
        displayAllProduct()
    }
}




// mua hàng và thêm vào giỏ
let cartArr =[];
function addCart(index){
    cartArr.push(productAll[index])
    showCart()
}
function showCart() {
    let data = "<table>"
    for (let i = 0; i < cartArr.length; i++) {

        data += `<tr>
                    <div class="delete-item"><i class="ti-close" onclick="deleteCart()"></i></div>
                    <div><img class="magazine-item" src="${cartArr[i].imge}" height="80px" width="80px"></div>
                    <div>${cartArr[i].name}</div>
                    <div>Pric: £ ${cartArr[i].price}</div>
                    <div>Quantity: </div>
                </tr>`
    }
    data += "</table>"
    document.getElementById('cart__inner').innerHTML=data;
}
// xóa sản phẩm trong giỏ hàng
function deleteCart(index) {
   cartArr.splice(index,1)
    showCart()
}





// thêm css vào thẻ để tắt mở bằng querySelector

const openTable = document.querySelector(".openTable-js")
const btnOpen = document.querySelector('.btnOpen-js')
const btnClose = document.querySelector('.btnClose-js')


function openTable1() {
    openTable.classList.remove('close')
}
function closeTable1() {
    openTable.classList.add('close')
}
btnOpen.addEventListener('click', openTable1)
btnClose.addEventListener('click', closeTable1)


// phần đóng hiện sản phẩm giỏ:
const btnCart = document.querySelector('.btnCart-js')
const cart = document.querySelector('.cart-js')
const close =document.querySelector('.close-js')

function openCart() {
    cart.classList.remove('close')
}
function closeCart() {
    cart.classList.add('close')
}

btnCart.addEventListener('click',openCart)
close.addEventListener('click',closeCart)