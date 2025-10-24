const nums = [10, 20, 30];

console.log(nums);

nums[2] = 99;

console.log(nums);

function getLastValue(array) {
	const lastIndex = array.length - 1; 
	console.log(array[lastIndex]);
}

getLastValue(nums);

function arraySwap(array) {
	const lastIndex = array.length - 1; 
	const lastValue = array[array.length - 1]; 
	const firstValue = array[0];

	array[0] = lastValue;
	array[lastIndex] = firstValue;
	console.log(array);
}

arraySwap(nums);

let i = 0;

while (i < 10) {
	i += 2;
	console.log(i);
}

for (let i = 5; i >= 0; i--) {
	console.log(i);
}

for (let i = 0; i <= 10; i += 2) {
	console.log(i);
}

for (let i = 0; i < nums.length; i++) {
	let arrayElement = nums[i];
	nums[i] = arrayElement + 1; 
}

console.log(nums);

function addOne(array) {
	for (let i = 0; i < array.length; i++) {
		let arrayElement = array[i];
		array[i] = arrayElement + 1; 
	}

	console.log(array);
}

addOne([1, 2, 3]);
addOne([-2, -1, 0, 99]);

function addNum(array, num) {
	for (let i = 0; i < array.length; i++) {
		let arrayElement = array[i];
		array[i] = arrayElement + num; 
	}

	console.log(array);
}

addNum([1, 2, 3], 2);
addNum([1, 2, 3], 3);
addNum([-2, -1, 0, 99], 2);

function addArrays(array1, array2) {
	for (let i = 0; i < array1.length; i++) {
		let arrayElement = array2[i];
		array1[i] += arrayElement; 
	}

	console.log(array1);
}

addArrays([1, 1, 2], [1, 1, 3]);
addArrays([1, 2, 3], [4, 5, 6]);


function countPositive(array) {
	let count = 0;
	for (let i = 0; i < array.length; i++) {
		let arrayElement = array[i];

		if (arrayElement > 0) {
			count++;
		}
	}

	console.log(count);
}

countPositive([1, -3, 5]);
countPositive([-2, 3, -5, 7, 10]);
