// use for testing api calls to urbandictionary.com
const urban = require('urban');
const util = require('util');

// timeout attempt with local variable
let localWordList = '';

console.time('api-call');
urban.random().first(res => {
    console.log(res.word);
});
console.timeEnd('api-call');
