const fizzBuzz = number => {
const threeCheck = (number % 3) === 0;
const fiveCheck = (number % 5) === 0;

if (number === 0){
    return 0;
} else if (threeCheck && fiveCheck) {
    return "FizzBuzz";
} else if (threeCheck) {
    return "Fizz";
} else if (fiveCheck) {
    return "Buzz";
} else {
    return number;
}
};

module.exports = fizzBuzz;
