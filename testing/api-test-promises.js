const request = require('require-promise');
const util = require('util');
const urban = require('urban');
const bcrypt = require('bcrypt');

// var promise = new Promise(function(resolve, reject) {
//     // do async then...
//     let corpus = '';
    // urban.random().first(wordObj => {
    //     corpus += wordObj.word;
    // });

//     if (corpus.length > 0) {
//         resolve("Stuff worked");
//     } else {
//         reject(Error("It broke"));
//     }
// });

// promise.then(function(result) {
//     console.log(result);
// }, function(err) {
//     console.log(err);
// });


// request.get('http://api.urban.com').then(function(body) {
//     console.log('Body:', body);
// });


// const API_FETCH_ROUNDS = 5;

// getUrbanWord();

// async function getUrbanWord() {
//     const words = ['joe', 'phil', 'mark'];
//     const promises = words.map(word => urban.random().first(wordObj => {
//         ;
//     });)
// }



// const NUM_SALT_ROUNDS = 8;

// test();

// async function test() {
//   const pws = ['password', 'password1', 'passw0rd'];

//   // `promises` is an array of promises, because `bcrypt.hash()` returns a
//   // promise if no callback is supplied.
//   const promises = pws.map(pw => bcrypt.hash(pw, NUM_SALT_ROUNDS));

//   /**
//    * Prints hashed passwords, for example:
//    * [ '$2a$08$nUmCaLsQ9rUaGHIiQgFpAOkE2QPrn1Pyx02s4s8HC2zlh7E.o9wxC',
//    *   '$2a$08$wdktZmCtsGrorU1mFWvJIOx3A0fbT7yJktRsRfNXa9HLGHOZ8GRjS',
//    *   '$2a$08$VCdMy8NSwC8r9ip8eKI1QuBd9wSxPnZoZBw8b1QskK77tL2gxrUk.' ]
//    */
//   console.log(await Promise.all(promises));
// }


// test();

// async function test() {
//   const promises = [250, 500, 1000].map(ms => wait(ms));
//   console.log('resolved to', await Promise.race(promises));
// }

// async function wait(ms) {
//   await new Promise(resolve => setTimeout(() => resolve(), ms));
//   console.log('waited', ms);
//   return ms;
// }

getUrbanWord();

async function getUrbanWord() {
    const promises = ['hello', 'world', 'whatup'].map(word => wait(word));
    console.log('resolved to', await Promise.race(promises));
}

async function wait(word) {
    await new Promise(resolve => setTimeout(() => resolve(), 1000));
    console.log('Word:', word);
    return word;
}

let docs = ['', '', ''];
let promises = docs.map((doc) => urban.random().first(wordJSON => wordJSON.word));

function logWord(sample) {
    let words = [];
    return Promise.all(docs.map(function (doc) {
        return urban.random().first(wordJSON => wordJSON.word);
    })).then(function(results) {
        // console.log(results);
        console.log(results);
        words.push(results);
    }).then(function() {
        return words;
    })
}
logWord();