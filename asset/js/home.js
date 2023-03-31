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




let productAll = [];
let product = new Product('https://images.squarespace-cdn.com/content/v1/57c38730bebafb2d4a4f8861/1649778910557-332SXOIMMSON0LJDHOBK/Rucksack+Magazine+Volume+Nine+Cover.jpg?format=750w', 'Volume Nine', '12.00')
productAll.push(product)
let product1 = new Product('https://images.squarespace-cdn.com/content/v1/57c38730bebafb2d4a4f8861/1631892042884-IKJN435I6SXFXE9KHF7Z/Rucksack+Magazine+Vol+8+Gold+Cover.jpg?format=750w', 'Volume Eight: Coast (Gold Edition)', '30.00')
productAll.push(product1)
let product2 = new Product('https://images.squarespace-cdn.com/content/v1/57c38730bebafb2d4a4f8861/1631892541595-AL1V4LWUMQTYH9QCHVCW/Rucksack+Magazine+Vol+8+-+Pink+Cover.jpg?format=750w', 'Volume Eight: Coast (Pink Edition)', '28.00')
productAll.push(product2)
let product3 = new Product('https://images.squarespace-cdn.com/content/v1/57c38730bebafb2d4a4f8861/1664227683526-0QII5IGUQF3QI9Q2BAY4/Deserted+by+Rucksack+Magazine+-+Front+Cover.jpg?format=750w', 'Deserted: In Pursuit of', '16.00')
productAll.push(product3)
let product4 = new Product('https://images.squarespace-cdn.com/content/v1/57c38730bebafb2d4a4f8861/1607879705997-PHV1M7JVUT5SBDYZX43I/Rucksack+Magazine+Volume+Seven+Abandoned.jpg?format=750w', 'Volume Seven: Abandoned', '34.00')
productAll.push(product4)
let product5 = new Product('https://images.squarespace-cdn.com/content/v1/57c38730bebafb2d4a4f8861/1603982268736-W5Z8S1B2TSUKH64IDM1A/Elements+Cover+Image.jpg?format=750w', 'Elements: In Pursuit of the Wild', '40.00')
productAll.push(product5)
let product6 = new Product('https://images.squarespace-cdn.com/content/v1/57c38730bebafb2d4a4f8861/1587142102522-JG2WKH39J43RQ69VOW00/Rucksack+Magazine+-+Endless+Cover.jpg?format=750w', 'Volume Six: Endless', '30.00')
productAll.push(product6)
let product7 = new Product('https://images.squarespace-cdn.com/content/v1/57c38730bebafb2d4a4f8861/1573495934397-CXMSN6HXUZ4UU37VMNP2/The+City+Issue+Cover.jpg?format=750w', 'Volume Five: The City Issue', '19.00')
productAll.push(product7)
let product8 = new Product('https://images.squarespace-cdn.com/content/v1/57c38730bebafb2d4a4f8861/1554124096920-VUQJ03WL3XTLHQAT3WA4/Volume+Four+-+Cover.jpg?format=750w', 'Volume Four: The Pursuit Issue', '20.00')
productAll.push(product8)
let product9 = new Product('https://images.squarespace-cdn.com/content/v1/57c38730bebafb2d4a4f8861/1537810020406-EUETO3ICCZYXVJK9NIJ5/Rucksack+Magazine+Volume+3+-+The+Island+Issue.jpg?format=750w', 'Volume Three: The Island Issue', '18.00')
productAll.push(product9)
let product10 = new Product('https://images.squarespace-cdn.com/content/v1/57c38730bebafb2d4a4f8861/1588852502971-VG6P7TDKXG518MKO572V/Rucksack+Magazine+Presents+Isolation.jpg?format=750w', 'Isolation', '16.00')
productAll.push(product10)
let product11 = new Product('https://images.squarespace-cdn.com/content/v1/57c38730bebafb2d4a4f8861/1520268184426-0989EUCO8679H2PX6X2A/A+-+Volume+2+Cover.jpg?format=750w', 'Volume Two: The Journey Issue', '8.00')
productAll.push(product11)
let product12 = new Product('https://images.squarespace-cdn.com/content/v1/57c38730bebafb2d4a4f8861/1544371921515-V2WQKAVADB9LXYZ9Y2Y3/Volume+One+Cover.jpg?format=750w', 'Volume One: The Winter', '9.00')
productAll.push(product12)



window.localStorage.setItem("productArr1", JSON.stringify(productAll)) // nối liên kết để lưu trên Storage

// let productAll = JSON.parse(window.localStorage.getItem("productArr1")); // nối liên kết để lưu trên Storage


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
