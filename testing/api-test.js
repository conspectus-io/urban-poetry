// use for testing api calls to urbandictionary.com
const urban = require('urban');
const util = require('util');

// async attempt
// console.time('api-call');
// urban.random().first(function (json) {
//     console.time('api-log');
//     console.log(json);
//     console.timeEnd('api-log');
// });
// console.timeEnd('api-call');


// timeout attempt with local variable
// let localWordList = '';

// function print(logLevel, ...args) {
//     const message = util.format(...args);

//     if (logLevel === 'error') {
//         process.stderr.write(message + '\n');
//     } else if (logLevel === 'log' || logLevel === 'info' || logLevel === 'warn') {
//         process.stdout.write(message + '\n');
//     }
// }
// console.time('api-call');
// urban.random().first(wordObj => {
//     print('log', wordObj.word);
// });
// console.timeEnd('api-call');

var wordArr = [];
let corpus = {};
function getWord(arr, obj, pause = 100) {
    if (arr.length) {
        return arr;
    } else {
        urban.random().first(wordObj => {
            arr.push(wordObj);
            let numWords = 0;
            for (words in obj) {
                numWords++;
            }
            let wordNum = 'word' + numWords + 1;
            let newWord = wordObj.word;
            obj.wordNum = wordObj.word;
            // obj.sentence = wordObj.example;
        });

        setTimeout(function initial() {
            if (arr.length) {
                return arr;
            } else {
                setTimeout(function returnVal() {
                    return getWord(arr);
                }, 200);
            }
        
        }, pause);
    }
};

getWord(wordArr);
// console.log(wordArr);
setTimeout(function logWord() {
    console.log(wordArr[0]);
}, 120);



// urban.random().first(function (response) {
//     randomWordJSON = response;
// });

// setTimeout(function parser() {
//     parsedJSON = JSON.stringify(randomWordJSON);
//     parsedJSON = JSON.parse(parsedJSON);

//     let corpusText = parsedJSON.example;

// }, 5000);





// sample that includes specific words as libraries
// const trollface = urban('trollface');
// trollface.first(function (json) {
//     console.log(json);
// });
