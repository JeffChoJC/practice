class Warehouse {
    constructor() {
        this.shelves = {};
        this.orders = [];
    }

    addProduct(shelfId, productId) {
        let item = new Product(productId);
        this.shelves[shelfId].addProduct(item);
    }

    orderProducts(productIds, userId) {
        let order = new Order(productIds, userId);
        this.orders.push(order);
    }

    checkOrders() {
        return this.orders.length;
    }

    clearShelf(shelfId) {
        this.shelves[shelfId] = [];
    }

    percentOrdered(product) {
        
    }

    addShelf() {
        this.shelves.push(new Shelf());
    }
}

class Product {
    constructor(id) {
        this.id = id;
    }
}

class Shelf {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }
}

class Order {
    constructor(productIds, userId) {
        this.items = productIds;
        this.user = userId;
    }
}