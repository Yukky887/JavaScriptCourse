console.log('8a');

const product = {
	name: 'basketball',
	price: 2095,
	'deliveryTime': '10 days'
};

console.log(product);

product.price += 500;

console.log(product);

console.log('8d');

const product1 = {
	name: 'car1',
	price: 100
}

const product2 = {
	name: 'car2',
	price: 500
}

function comparePrice(product1, product2) {
	if (product1.price > product2.price) {
		console.log(`${product2.name} дешевле чем ${product1.name}`)
	} else {
		console.log(`${product1.name} дешевле чем ${product2.name}`)
	}
}

comparePrice(product1, product2);

console.log('8e');

const product3 = {
	name: 'car1',
	price: 100
}

const product4 = {
	name: 'car1',
	price: 100
}

function isSameProduct(product3, product4) {
	if (product3.name === product4.name && product3.price === product4.price) {
		return true;
	} else {
		return false;
	}
}

console.log(isSameProduct(product3, product4));

const someText = 'Good Morning';

console.log(someText.toLowerCase());

let repeatText = 'text'.repeat(4);
console.log(repeatText);

