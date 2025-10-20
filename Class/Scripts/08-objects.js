const product = {
    name: "Laptop",
    price: 1200,
};

console.log(product);
console.log(product.name);
console.log(product.price);
console.log(typeof product);

product.price = 52;
console.log(product.price);

product.inStock = true;
console.log(product);

delete product.inStock;
console.log(product);

const product2 = {
    name:'shirt',
    ['delivery-time']: '5 days',
    rating: {
        stars: 4.5,
        count: 87
    },
    fun: function() {
        console.log('Hello world');
    }
};

console.log(product2);
console.log(product2.name);
console.log(product2['name']);

console.log(product['delivery-time'])

console.log(product2.rating.stars);
product2.fun();

console.log(typeof console.log);

console.log(JSON.stringify(product2));
const jsonString = JSON.stringify(product2);
console.log(JSON.parse(jsonString));

console.log('Hello'.length)
console.log('hello'.toUpperCase())

const object1 = {
    message: 'hello'
};

const object2 = object1;

object1.message = 'Good job';
console.log(object1);
console.log(object2);

const object3 = {
    message: 'good job'
}

console.log(object1 === object3)
console.log(object2 === object1)


const object4 = {
    message: 'good job',
    price: 1000
};
// const message = object4.message;
const { message, price } = object4
console.log(message)
console.log(price);

const object5 = {
    //message: message
    message,
    // method: function function1() {
    //     console.log('method')
    // }

    method() {
        console.log('meme')
    }
}

console.log(object5)
object5.method();