let id = 1;

function logProduct(product) {
    console.log(product);
}

function logTotalPrice(product) {
    console.log(product.price);
}

function createProduct(obj, callback) {
    const prdct = {...obj, id};
    id ++;
    callback(prdct);
}

let milk = {
    name: "milk",
    price: 30
}

let bread = {
    name: "bread",
    price: 26
}

let meat = {
    name: "meat",
    price: 300
}

createProduct(milk, logProduct);
createProduct(bread, logTotalPrice);
createProduct(meat, logProduct);
