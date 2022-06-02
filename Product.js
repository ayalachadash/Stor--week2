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
        product.name = name;
        product.category = category;
        product.price = price;
        product.quantity = quantity;
        return product;
    }

}