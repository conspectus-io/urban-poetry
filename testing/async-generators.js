// testing api calls with async generator functions and await syntax


// ES7 style async function
async function doSomething(url, cb) {
    let thing = cb(req);
    return thing;
}
doSomething();


// ES6 style generator function
function* generatorTest(req, res, callback) {
    // code here
}
generatorTest();
