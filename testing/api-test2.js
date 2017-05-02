// use for testing api calls to urbandictionary.com
const urban = require('urban');
const util = require('util');

// timeout attempt with local variable
let wordList = '';
let listArr = [];

function getWord(count) {
	var list = [];

	for (let i = 1; i <= count; i++) {
		console.time(`api-fetch #${i}`);
		setTimeout(function pause() {
			urban.random().first(function (response) {
				list.push(response.word);
				console.log('inside timeout:', list);
				if (i === count - 1) return list;
			});
		}, 8000);
		console.log('outside timeout:', list);
		console.timeEnd(`api-fetch #${i}`);
	}

	setTimeout(function sendWord() {
		return list;
		// console.log(list);
	}, 10000);

}

let twoWordList = getWord(4);

setTimeout(function pauselog() {
	console.log(twoWordList);
}, 20000);


// setTimeout(function parser() {
//     parsedJSON = JSON.stringify(randomWordJSON);
//     parsedJSON = JSON.parse(parsedJSON);

//     let corpusText = parsedJSON.example;

// }, 5000);
