class Product {
    static countId = 0;
    constructor(name, category, price, quantity) {
        this.id = Product.countId;
        Product.countId++;
        this.name = name;
        this.category = category;
        this.price = price;
        this.quantity = quantity;
    }

    update = (product) => {
        this.name = product.name;
        this.category = product.category;
        this.price = product.price;
        this.quantity = product.quantity;
        return product;
    }

}

let instance = null;
// constructor() {
//     if (!instance) {
//         instance = new Store();
//         console.log("firsr object");
//     }
//     else {
//         console.log("there is obj");
//     }
// }
class Store {

    products = [new Product("uu", "bb", 1, 5), new Product("cc", "dd", 9, 2)];
    constructor() {
        
    }

    addProduct = (name, category, price, quantity) => {
        this.products.push(new Product(name, category, price, quantity))
    }
    searchByName=(name)=>{
        console.log(this.products.find(p=>p.name=name));
    }
    searchByCategory=(category)=>{
        console.log(this.products.find(p=>p.category=category));
    }
    searchByPriceRange=(min, max)=>{
        console.log(this.products.find(p=>(int)(p.price)>=min && (int)(p.price)<max));
    }
    searchByOutOfStock=()=>{
        console.log(this.products.find(p=>p.quantity<3));
    }
    // search(x,name) {  
    //     console.log("hi");
    //     console.log(this.products.find(p=> 'p.$`{x}`' ==name)); 
    // }

}
// `<img src= "${data[1][questionNum].question}">`



//const searchByName=document.querySelector(".searchByName");
let showProduct=document.querySelector('#showProduct');
const name = document.createElement("input");
name.setAttribute("placeholder","enter name");
const category = document.createElement("select");
category.setAttribute("placeholder","choos category");
const price = document.createElement("input");
price.setAttribute("type", "number");
price.setAttribute("placeholder","enter price")
const quantity = document.createElement("input");
quantity.setAttribute("type", "number");
quantity.setAttribute("placeholder", "enter quantity");
const toAdd = document.createElement("button");
toAdd.textContent="to add";
const product = document.createElement("form");
product.appendChild(name);
product.appendChild(category);
product.appendChild(price);
product.appendChild(quantity);
product.appendChild(toAdd);
let myStore= new Store();


window.onload = a;

function a(){
    console.log(myStore.products);
    showProduct.innerHTML=JSON.stringify(myStore.products);
}
const windowAddProduct = () => {
    document.body.appendChild(product)
}

toAdd.onclick=()=>{
    myStore.addProduct(name.value,"jjjj",price.value,quantity.value);
}

const searchByName = () => {
    myStore.searchByName(name.value);
}
const searchByCategory = () => {
    myStore.searchByCategory(category.value);
}


