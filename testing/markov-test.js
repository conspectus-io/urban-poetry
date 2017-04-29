const urban = require('urban');

let sampleText = "1. A crapella — singing (badly) while listening to music through headphones 2. Amazeballs — something that is amazing or unbelievable (the jury is out on whether this term is cool or annoying, so know your audience before using it) 3. Ann Curry-ed — being fired unexpectedly and/or without cause 4. Askhole — an individual who asks ridiculous, obnoxious or irrelevant questions (this is often chronic behavior) 5. Awesome sauce — something that is more awesome than awesome (awesome topped with awesome sauce) 6.Baby bump — the protruding abdominal region of a woman when she starts to become noticeably pregnant (often creates speculation a woman is pregnant even when it's the result of bloating or the way clothes fall) 7. Bada**ery — actions or behavior that are amazing or unbelievable; the act of being a bada** 8. Baller — 1) someone who's very good at sports (in the United States, usually basketball); 2) someone who works his or her way up from nothing to achieve greatness; 3) someone who's good at what he or she does or the act of being good at what you do 9. Beer me — please, get me a beer (can also be used figuratively to ask for anything to be passed or retrieved for the speaker) 10. Beleiber — a fan of Justin Beiber (usually one who's obsessive) 11. B****y resting face — the state of a face while not emoting in which the individual looks hostile or judgmental 12. Bitcoin — electronic currency that can be transferred securely without the need of a third party (such as a bank or PayPal) 13. Blamestorming — usually in a business setting, the act of attempting to identify who was to blame for a failure or problem, rather than trying to brainstorm a solution 14. Boomerang child — a child who moves out to start his or her own life, then returns home to live (often as a result of the economy, but possibly due to irresponsibility of some kind) 15. Bootylicious — the quality of being appealingly curvaceous (especially with ample hips and buttocks) More: I'm 20, and I just want to grow up already 16. Bromance — 1) as a noun or adjective, two heterosexual males with such a close relationship they appear to be romantically involved; 2) as a verb, the act of attempting to become closer to a fellow heterosexual male (usually through acts similar to romancing a woman, such as flattery, gifts and spending alone time) 17. Bropocalypse — a large gathering of adult males with the sole mission of getting drunk (such as at a fraternity party) 18. Bye Felicia — exclamation used when a person announces they are exiting, but other people in the area don't care; adapted from 2005 film Friday starring Chris Tucker and Ice Cube 19. C-note — a $100 bill (where C stands for centum, the Latin word for 100) 20. C*** block — 1) referring to a slang term for male genitalia, the act of preventing a man from getting somewhere (getting to know, getting a date or having sexual relations) with a man or woman he is interested in; action may be committed by a male or female; 2) in traffic, to cut someone off 21. Cosby sweater — 1) a loud, obnoxious multicolored sweater like those worn by Bill Cosby on The Cosby Show; 2) multicolored flannel boxer-shorts lint 22. Cougar — an older woman who prefers the romantic company of much-younger men 23. Crackberry — a slang term for a mobile phone brand (BlackBerry) that implies its user is addicted to the device 24. Crunk — 1) a replacement for foul curse words (popularized by a joke on Conan O'Brien); 2) a combination of crazy and drunk, meaning crazy drunk (may also refer to people who are high); 3) a style of rap music popular in the South; 4) something at a high level (e.g., volume) or something awesome; 5) to have a good time 25. Cyberslacking — using one's employer's Internet and email for personal activities during work 26. Dawg — an expression used to address a close friend or meaningful acquaintance (one Urban Dictionary contributor notes that the expression was so overused by Randy Jackson of American Idol that it's lost popularity)";


urban.random().first(wordObj => {
    console.log(wordObj);
});


// parseText function accepts corpus string and returns array of uniformly formatted words with no numbers or punctuation
let parseText = (string) => string.toLowerCase()
    .replace(/[0-9]+/g, '')
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .replace(/[^a-zA-Z 0-9]+/g, '')

// generateWordPairs function accpets word corpus string
let generateWordPairs1 = (text) => {
    let parsedArr = parseText(text).split(' '), pairObj = {};
    parsedArr.forEach((v, i) => {
        pairObj[parsedArr[i]] = [parsedArr[i + 1]];
    });
    return pairObj;
};

// writeLine function accepts Markov Chain object and length of words n
let writeLine = (chainObj, numOfWords) => {
    let poem = '';
    let randomKeySelector = (chainObj) => {
        let key, randomPos, objLength = 0, pos = 0;

        for (key in chainObj) if (chainObj.hasOwnProperty(key)) objLength++;
        randomPos = Math.floor(Math.random() * objLength);
        
        for (key in chainObj) if (chainObj.hasOwnProperty(key)) {
            if (pos === randomPos) return key;
            pos++;
        }
    };

    // generate poem with randomKeySelector
    for (let i = 0; i < numOfWords; i++) {
        poem = `${poem}${randomKeySelector(chainObj)} `;
    }
    let poemArray = poem.split(' ');

    // replace consecutive duplicates
    poemArray.forEach((v, i) => {
        if (poemArray[i] === poemArray[i + 1]) {
            poemArray[i + 1] = randomKeySelector(chainObj);
        }
    });

    poem = poemArray.join(' ');
    return poem;
};

// generatePoem function accepts word corpus string and a number of lines to generate
let generatePoem = (corpus, numOfLines) => {
    let poem = '';
    for (let i = 0; i < numOfLines; i++) {
        poem = `${poem}${writeLine(generateWordPairs1(corpus), 8)}`;
    }
    return poem;
};

console.log(generatePoem(sampleText, 3));



// TODO: prevent nonsensical first and last words (ex: poem should not start or end with 'and')
// let firstWord = poemArray[0];
// let lastWord = poemArray[poemArray.length - 2];
// if (/(s|and)/.test(firstWord)) { }






// markov chain length 2
let generateWordPairs2 = (text) => {
    let parsedArr = parseText(text);
    let pairObj = {};

    for (let i = 0; i < parsedArr.length; i++) {
        pairObj[parsedArr[i]] = [parsedArr[i + 2]];
    }
    return pairObj;
};

// uses markov chain length 2
let generatePoem2 = (corpus, numOfLines) => {
    let poem = '';
    for (let i = 0; i < numOfLines; i++) {
        poem = `${poem}${writeLine(generateWordPairs2(corpus), 8)}`;
    }
    return poem;
};





// console.log("                                  ");
// console.log("Poem based on Markov Chain Length of 1:");
// console.log("---------------------------------------");
// console.log(generatePoem1(sampleText, 3));
// console.log("________________________________________________________");
// console.log("________________________________________________________");
// console.log("                                  ");
// console.log("                                  ");
// console.log("Poem based on Markov Chain Length of 2:");
// console.log("---------------------------------------");
// console.log(generatePoem2(sampleText, 3));