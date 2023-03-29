const productList = document.querySelector(".product-list")
const products = [
    {
        id: 1,
        model: "Asus Rog",
        image: "./assets/images/asusrog.jpg",
        salary: "$1.999.99"
    },
    {
        id: 2,
        model: "Lenovo IdeaPad",
        image: "./assets/images/lenovo.jpg",
        salary: "$829.99"
    },
    {
        id: 3,
        model: "ASUS TUF F15",
        image: "./assets/images/asustuf.jpg",
        salary: "$711.73"
    },
    {
        id: 4,
        model: "Acer Aspire",
        image: "./assets/images/aceraspire.jpg",
        salary: "$509.99"
    }];

function creatProduct(products) {

    products.forEach(element => {

        const productDiv = document.createElement("div")
        const productName = document.createElement("h2")
        const productImage = document.createElement("img")
        const productSalary = document.createElement("p")
        const addBasketBtn = document.createElement("button")


        productDiv.classList.add("product-div")
        productName.textContent = element.model;
        productImage.src = element.image;
        productSalary.textContent = element.salary;
        addBasketBtn.textContent = "Add to Basket"
        addBasketBtn.value = element.id;
        productList.appendChild(productDiv);
        productDiv.append(productName, productImage, productSalary, addBasketBtn);
    });

}
creatProduct(products)
const basketArray = [];

const addButtons = document.querySelectorAll(".product-div button")



const basket = document.querySelector(".shopping-basket")

addButtons.forEach(button => {
    button.addEventListener("click", () => {
        const productId = parseInt(button.value)
        const product = products.find(item => item.id === productId)
        basketArray.push(product)
        updateBasket()
    })
})


updateBasket()

function updateBasket() {
    basket.innerHTML = ""
   
    basketArray.forEach(item => {
        const basketJSON = JSON.stringify(basketArray)
        localStorage.setItem("basket", basketJSON)

        const basketItem = document.createElement("div")
        const basketItemName = document.createElement("h3")
        const basketItemPrice = document.createElement("p")
        basketItemName.textContent = item.model
        basketItemPrice.textContent = item.salary
        basketItem.appendChild(basketItemName)
        basketItem.appendChild(basketItemPrice)
        basket.appendChild(basketItem)

    })

    
}

