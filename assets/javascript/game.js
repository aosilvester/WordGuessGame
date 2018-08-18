    //created an array of words
    const word = ["knife", "fork", "plates", "fridge", "table", "oven", "sink", "pantry", "chairs", "dish", "trash"]

    //choose word randomly
    let randNum; 
    let choosenWord; 
    let rightWord = [];
    let wrongWord = [];
    let underScore = [];
    var guessCount = 10;
    var winCount = 0;

    // Dom manipulation here
    let docUnderScore = document.getElementsByClassName("underScore");
    let docRightGuess = document.getElementsByClassName("rightGuess");
    let docWrongGuess = document.getElementsByClassName("wrongGuess");
    let docWinCounter = document.getElementsByClassName("winCounter");
    let docGuessCounter = document.getElementsByClassName("guessCounter");

 

    function restart() {
      rightWord = [];
      wrongWord = [];
      guessCount = 10;
      randNum = Math.floor(Math.random() * word.length);
      choosenWord = word[randNum];
      underScore = generateUnderscore(choosenWord);
      // generateUnderscore();
      docUnderScore[0].innerHTML = underScore.join(' ');
      console.log("chosen word = " + choosenWord);
    }

    //create underscores based on length of word
    const generateUnderscore = (word) => {
      console.log("generateUnderscorrrrre");
      const underscores = [];
      for (let i = 0; i < word.length; i++) {
        underscores.push('_');
      }
      return underscores;
    }

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
        
        
        if (underScore.join('') == choosenWord) {
          alert("You win!");
          winCount++;
          console.log("win count = " + winCount);
          // docRightGuess[0].innerHTML = winCounter;
          //inner HTML the wincount here
          docWinCounter[0].innerHTML = winCount;
          restart();
          // choosenWord = word[randNum];
          // generateUnderscore();
          // docUnderScore[0].innerHTML = underScore.join(' ');
        } 
      } 
      else {
        wrongWord.push(keyWord);
        docWrongGuess[0].innerHTML = wrongWord;
        guessCount--;
        console.log("guess counter = " + guessCount);
        docGuessCounter[0].innerHTML = guessCount;
        
      }

      if (guessCount == 0) {
        alert("You did not guess correctly :(");
        restart();
      }

    });

restart();