    //created an array of words
    const word = ["knife", "fork", "plates", "fridge", "table", "oven", "sink", "pantry", "chairs", "dish", ""]

    //choose word randomly
    let randNum = Math.floor(Math.random() * word.length);
    let choosenWord = word[randNum];
    let rightWord = [];
    let wrongWord = [];
    let underScore = [];

// Dom manipulation here
    let docUnderScore = document.getElementsByClassName("underScore");
    let docRightGuess = document.getElementsByClassName("rightGuess");
    let docWrongGuess = document.getElementsByClassName("wrongGuess")
    

    console.log(choosenWord);

    //create underscores based on length of word
    let generateUnderscore = () => {
        console.log("generateUnderscorrrrre");
      for (let i = 0; i < choosenWord.length; i++) {
        underScore.push('_');
      }
      return underScore;
    }

    console.log(underScore.length);

    //get users guess
    document.addEventListener('keypress', (event) => {
      let keyWord = String.fromCharCode(event.keyCode);
      //if guess is right...
      if (choosenWord.indexOf(keyWord) > -1) {
      // add to right words array
        rightWord.push(keyWord);
      // replace the underscore with the correct letter
        underScore[choosenWord.indexOf(keyWord)] = keyWord;
        docUnderScore[0].innerHTML = underScore.join(' ');
        docRightGuess[0].innerHTML = rightWord;
      //check to see if user word matches guesses
        if(underScore.join('') == choosenWord) {
          alert("You win!")
        }
      }
        else {
          wrongWord.push(keyWord);
          docWrongGuess[0].innerHTML = wrongWord;
        }

    });


    docUnderScore[0].innerHTML = generateUnderscore().join(' ');

    document.querySelector(".keypress").innerHTML = ("Press any key to continue");



// for reset button: https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_form_reset




    //check if guess is right

    //display letter guessed by user

    //if right push to "right" array

    //if wrong push to "wrong" array

    //list number of guesses left

    //list/display/count wins

    //list/display/count losses
  