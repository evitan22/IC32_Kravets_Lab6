let id = 0;

const fruits = [
    { name: "apple", price: 200 },
    { name: "orange", price: 300 },
    { name: "grapes", price: 750 },
];

function discount(array) {
    return array.map(fruit=>
    {
        id++;
        return {...fruit, price: fruit.price*0.8, id: id} 
    })
}

console.log(discount(fruits));