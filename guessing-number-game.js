const text = document.getElementById("text");
const button = document.getElementById("button");
const input = document.getElementById("input");
const resetButton = document.getElementById("reset");


let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);



let turnsLeft = 10;


    button.addEventListener("click", () => {
        const guess = Number(input.value);

        if ( guess < 1 || guess > 100) {
            text.innerHTML = "Please enter a number between 1-100."
            return;
        }

        if (turnsLeft <= 0) {
            text.innerHTML = "No turns left! You lose!"
            return;
        }

        if (randomNumber < guess) {
            turnsLeft--
            text.innerHTML = `Guess is too high! You have ${turnsLeft} turns remaining!`

        } else if (randomNumber > guess) {
            turnsLeft--
            text.innerHTML = `Guess is too low! You have ${turnsLeft}  turns remaining!`

        } else {
            text.innerHTML = "Congratulations, You win!"
        }

        if (turnsLeft === 0 && guess !== randomNumber) {
            text.innerHTML = `Game over! You lose! The number was ${randomNumber}!`
        }



    })


resetButton.addEventListener("click", () => {
    
    randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log('Game reset:', randomNumber)

    turnsLeft = 10;
    text.innerHTML = "Game is reset";
    input.value = '';

})
