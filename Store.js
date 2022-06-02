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
        console.log("the product added")
    }

    sortByName() {

    }
}