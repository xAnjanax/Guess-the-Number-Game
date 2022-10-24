'use strict';

/* console.log(document.querySelector('.message').textContent); 
// console.log(document.querySelector('.message').textContent = "🎉Correct Number!"); 

document.querySelector('.number').textContent = 13; 
document.querySelector('.score').textContent = 10; 

// document.querySelector('.highscore').textContent = 20; 

document.querySelector('.guess').value = 23; 
console.log(document.querySelector('.guess').value = 23); */ 

let secretNumber = Math.trunc(Math.random() * 20) + 1; // trunc removes the decimals, n +1 makes 19.999999 +1 => 19 + 1 = 2-
// document.querySelector('.number').textContent = secretNumber; // changes the secret number with every reload of the page 

let score = 20; 
let highscore = 0; 

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message; 
}

document.querySelector('.check').addEventListener
('click', function () {
    const guess = Number((document.querySelector('.guess').value)); //assigning a variable 
    console.log(guess, typeof guess); 

    // (document.querySelector('.message').textContent = "🎉Correct Number!"); // this repetition has been replaced by a function 

// when there is no input 
    if (!guess) {
        console.log(document.querySelector('.message').textContent = "❌ No Number!")

// when the player wins 
    } else if (guess === secretNumber) {
//      console.log(document.querySelector('.message').textContent = "🎉Correct Number!"); // this repetition has been replaced by a function 
        displayMessage("🎉 Correct Number!"); 
        document.querySelector('body').style.backgroundColor = '#60b347'; 
        document.querySelector('.number').style.width = '30rem'; 
        document.querySelector('.number').textContent = secretNumber; // changes the secret number with every reload of the page 

        if (score > highscore) {
            highscore = score; 
            document.querySelector('.highscore').textContent = highscore; 
        }

// when the guess is different from the secret number 
//(Refactored Code) // 
    } else if (guess !== secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = guess > secretNumber ? "📈 Too High!" : "📉 Too Low!"; 
            score--; 
        document.querySelector('.score').textContent = score; 
        } else { 
            console.log(document.querySelector('.message').textContent = "💥 You lost the game!"); 
            document.querySelector('.score').textContent = 0; 
        }
        } 
    })

// Refactoring Code begins here // 
// when guess is too high 
/*    } else if (guess > secretNumber) {
        if (score > 1) {
        console.log(document.querySelector('.message').textContent = "📈 Too High!"); 
        score--; 
        document.querySelector('.score').textContent = score; 
        } else {
            console.log(document.querySelector('.message').textContent = "💥 You lost the game!"); 
            document.querySelector('.score').textContent = 0; 
        }

// when guess is too low 
    } else if (guess < secretNumber) {
        if (score > 1) {
        console.log(document.querySelector('.message').textContent = "📉 Too Low!"); 
        score--; 
        } else {
            console.log(document.querySelector('.message').textContent = "💥 You lost the game!"); 
            document.querySelector('.score').textContent = 0; 
        }
        document.querySelector('.score').textContent = score;
    }
}) */ 
// Refactoring Code ends here // 

document.querySelector('.again').addEventListener('click', function () {
    score = 20; 
    secretNumber = Math.trunc(Math.random() * 20) + 1; 
    document.querySelector('.message').textContent = "Start guessing..."; 
    document.querySelector('.number').textContent = "?"; 
    document.querySelector('.score').textContent = score; 
    document.querySelector('.guess').value = ''; 
    document.querySelector('body').style.backgroundColor = '#222'; 
    document.querySelector('.number').style.width = '15rem';
}) 


/* const arr = [1,2,3,4,5]; 
let sum = 0; 
for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; 
    console.log(sum);
}

const myString = "Hello World!"; 
for (let i = 0; i < myString.length; i++) {
    console.log(myString[i]); 
} */

/* const myList = [[1,2], [3,4], [5,6], [7,8]]; 
for (let i = 0; i < myList.length; i++) {
    for (let y = 0; y < myList[i].length; y++) {
    console.log(myList[i][y]); 
    }
} */ 

