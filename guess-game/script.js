// Hoist variables

const INPUT_FROM_USER = document.querySelector("input[type=text]");
const RANDOM_NUM = Math.floor(Math.random() * 99) + 1;
let chances_to_guess = 10;

let submit_btn = document.querySelector("input[type=button]");

const CheckValue = () => {
    // Decrement chances
    chances_to_guess--;
    QUITGAME(chances_to_guess)

    //Display each guess
    let input_value = Number(INPUT_FROM_USER.value);
    DISPLAY_USER_GUESS(input_value);

}
submit_btn.addEventListener("click", CheckValue);
const QUITGAME = (chance_counter) => { if (chance_counter < 1) INPUT_FROM_USER.disabled = true; }
const DISPLAY_USER_GUESS = (input) => { document.querySelector("span").innerHTML += input + ", "; }

const VALIDATE_GUESS = (input, random_num) => {
    (input == random_num) ? console.log("win"):
        (input > random_num) ? console.log("high") : console.log("low")
}