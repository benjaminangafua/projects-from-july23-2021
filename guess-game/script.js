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

    //Validate input
    const VALIDATEINPUT = (e) => {
        let event = e || window.event;
        let charCode = event.which || event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }

    //Display guess values
    DISPLAY_RESULT(input_value, INPUT_FROM_USER, RANDOM_NUM)
}
submit_btn.addEventListener("click", CheckValue);
const QUITGAME = (chance_counter) => { if (chance_counter < 1) INPUT_FROM_USER.disabled = true; }
const DISPLAY_USER_GUESS = (input) => { document.querySelector(".ur-guess").innerHTML += input + ", "; }

const DISPLAY_RESULT = (input, USER_INPUT, random_num) => {
    const RESULT_CHECKER = document.querySelector(".guess-status");
    if (input == random_num) {
        RESULT_CHECKER.innerHTML = input + " is correct";
        USER_INPUT.value = "";
    } else if (input > random_num) {
        RESULT_CHECKER.innerHTML = input + " is high";
        USER_INPUT.value = "";
    } else {
        RESULT_CHECKER.innerHTML = input + " is low";
        USER_INPUT.value = "";
    }
}