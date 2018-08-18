let guessQuerySelector = document.querySelector('#character');
let textForm = document.querySelector('.textForm');


var wordBank = [
    "pan", "oven", "whisk", "stove", "kitchen", "spatula", "ingredients", "temperature", "knife", "refrigerator", "spices", "cutting board"
];

// Grabs a Random Word
var getRandomWord = function (array) {
    return array[Math.floor(Math.random() * array.length)];
}
var randomWord = getRandomWord(wordBank);
console.log('randomWord', randomWord);
let underscore = []




//create underscores based on the length of the word
let generateUnderscore = () => {
    for (let i = 0; i < randomWord.length; i++) {
        underscore.push('_');
    }
    return Underscore;
}


console.log(generateUnderscore());



// This function listens to the letter the user guesses
document.onkeyup = function (event) {
    var userGuess = event.key;
}

var userText = document.getElementById("user-text");

document.onkeyup = function (event) {
    userText.textContent = event.key;
};

//Function to check is guess is right


//If right push to "right" array

//If wrong push to "wrong" array

// if "wrong" countdown on number of guesses remaining 