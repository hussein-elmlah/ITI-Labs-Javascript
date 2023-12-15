var secretNum = 7;
var guessedNum;

while (guessedNum != secretNum) {
  guessedNum = Number(prompt("Guess a number"));
    if (guessedNum == "") {
      alert(`Empty input. Try again.`);
    } else if (guessedNum > secretNum) {
      alert(`Too high. Try again.`);
    } else if (guessedNum < secretNum) {
      alert(`Too low. Try again.`);
    } else if (guessedNum == secretNum) {
      alert(`You guessed it`);
    }else {
      alert(`invalid input. Try again`);
  } 
}
