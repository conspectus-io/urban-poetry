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
let localWordList = '';

function print(logLevel, ...args) {
    const message = util.format(...args);

    if (logLevel === 'error') {
        process.stderr.write(message + '\n');
    } else if (logLevel === 'log' || logLevel === 'info' || logLevel === 'warn') {
        process.stdout.write(message + '\n');
    }
}
// console.time('api-call');
urban.random().first(wordObj => {
    print('log', wordObj.word);
});
// console.timeEnd('api-call');





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
