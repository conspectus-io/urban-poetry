// use for testing api calls to urbandictionary.com
const urban = require('urban');
const util = require('util');

// timeout attempt with local variable
let wordList = '';
let listArr = [];

function getWord() {
	var list = [];

	for (let i = 1; i <= 5; i++) {
		urban.random().first(function (response) {
			list.push(response.word);
		});
	}
	
	setTimeout(function sendWord() {
		// console.log(list);
		return list;
	}, 7000);
	
}

console.log(getWord());

// setTimeout(function parser() {
//     parsedJSON = JSON.stringify(randomWordJSON);
//     parsedJSON = JSON.parse(parsedJSON);

//     let corpusText = parsedJSON.example;

// }, 5000);
