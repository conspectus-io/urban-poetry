// use for testing api calls to urbandictionary.com

const urban = require('urban');
// const trollface = urban('trollface');  // for including specific words as libraries


// sample
trollface.first(function (json) {
    console.log(json);
});

// Random mode
urban.random().first(function (json) {
    console.log(json);
});