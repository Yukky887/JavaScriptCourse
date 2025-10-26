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

function minMaxB(array) {
	let min = 100;
	let max = -100;
	for (let i = 0; i < array.length; i++) {
		if (array[i] < min) {
			min = array[i]
		}
		if (array[i] > max) {
			max = array[i]
		}
		
	}
	console.log(min, max);
}

minMaxB([1, -3, 5]);
minMaxB([-2, 3, -5, 7, 10]);

function minMax(array) {
	if (array.length === 0) {
		return {
			min: null,
			max: null
		}
	}
	
	return {
		min: Math.min(...array),
		max: Math.max(...array)
	}
}

console.log(minMax([1, -3, 5]));
console.log(minMax([-2, 3, -5, 7, 10]));
console.log(minMax([3]));
console.log(minMax([]));

function countWord(words) {
	const objectWord = {};
	for (let i = 0; i < words.length; i++) {
		const word = words[i];
		if (!(word in objectWord)) {
			objectWord[word] = 1;
		} else {
			objectWord[word] ++;
		}
	}
	console.log(objectWord);
}

countWord(['apple', 'grape', 'apple', 'apple']);

function searchSearch (array) {
	let searchIndex = -1;
	for (let i = 0; i < array.length; i++) {
		const word = array[i];
		if (word === 'search') {
			searchIndex = i;
			break;
		}
	}
	
	return searchIndex;
}

// console.log(searchSearch(['hello', 'world', 'search', 'good', 'search']));
// console.log(searchSearch(['hello', 'world', 'good']));

function searchWord (array, searchWord) {
	let searchIndex = -1;
	for (let i = 0; i < array.length; i++) {
		const word = array[i];
		if (word === searchWord) {
			searchIndex = i;
			break;
		}
	}
	
	return searchIndex;
}

console.log(searchWord(['hello', 'world', 'search', 'good', 'search', 'good'], 'good'));
console.log(searchWord(['hello', 'world', 'good'], 'cat'));

function removeEgg (foods) {
	let foodsNoEgg = [];
	let egg = 0;
	let reverseFoods = foods.slice();
	reverseFoods = reverseFoods.reverse();
	for (let i = 0; i < foods.length; i++) {

		const word = reverseFoods[i];

		if (word === 'egg' && egg < 2) {
			egg++;
			continue;
		}

		foodsNoEgg.push(word);
	}
	
	return foodsNoEgg.reverse();
}

// const foods = ['egg', 'apple', 'egg', 'egg', 'ham'];
// console.log(removeEgg(foods));
// console.log(foods);

function fizzBuzz(count) {
	for(let i = 0; i < count; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			num = 'FizzBuzz';
		} else if(i % 5 === 0) {
			num = 'Buzz';
		} else if (i % 3 === 0) {
			num = 'Fizz'
		} else {
			num = i;
		}
		console.log(num);
	}
}

// fizzBuzz(20);

function unique(array) {
	let uniqueArray = [];
	for (let i = 0; i < array.length; i++) {
		let word = array[i];
		if (searchWord(uniqueArray, word) === -1) {
			uniqueArray.push(word);
		} else if (searchWord(uniqueArray, word) > 0){
			continue;
		}
	}

	return uniqueArray;
}

console.log(unique(['red','green','green','red']));