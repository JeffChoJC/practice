class WayhouseManager {
    constructor() {
        this.inventory = new Inventory();
    }

    addProduct(id) {
        this.inventory.addProduct(id);
    }

    printStore() {
        this.inventory.printStore();
    }

    shipOrder(productIds) {
        if (this.inventory.checkSupply(productIds)) {
            this.inventory.fulfillOrder(productIds);
            return true;
        }
        
        return false;
    }

    returnOrder(productIds) {
        for (let i = 0; i < productIds.length; i++) {
            let id = productIds[i]
            this.inventory.addProduct(id);
        }
    }
}

class Inventory {
    constructor() {
        this.store = {};
    }

    addProduct(id) {
        if (id in this.store) {
            this.store[id]++;
        } else {
            this.store[id] = 1;
        }

        return this.store[id];
    }

    checkSupply(productIds) {
        for (let i = 0; i < productIds.length; i++) {
            let id = productIds[i];
            if (!(id in this.store) || this.store[id] <= 0) {
                return false;
            }
        }

        return true;
    }

    fulfillOrder(productIds) {
        for (let i = 0; i < productIds.length; i++) {
            let id = productIds[i];
            this.store[id]--;
        }
    }

    printStore() {
        for (let id in this.store) {
            console.log(id, this.store[id]);
        }
    }
}

let warehouse = new WayhouseManager();
warehouse.addProduct(1);
warehouse.addProduct(1);
warehouse.addProduct(2);
warehouse.addProduct(3);
warehouse.printStore();
console.log(warehouse.shipOrder([1, 2, 4]));
console.log(warehouse.shipOrder([1, 3]));
console.log(warehouse.shipOrder([1, 3]));
warehouse.printStore();
warehouse.returnOrder([1, 2, 3, 4]);
console.log("-------")
warehouse.printStore();
