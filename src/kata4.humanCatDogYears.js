const humanCatDogYears = number => {
let catYears;
let dogYears;

if(number === 0) {
    catYears = 0;
} else if(number === 1) {
    catYears = 15;
} else if(number === 2) {
    catYears = 24;
} else {
    catYears = ((number - 2) * 4) + 24;
};

if(number === 0) {
    dogYears = 0;
} else if(number === 1) {
    dogYears = 15;
} else if(number === 2) {
    dogYears = 24;
} else {
    dogYears = ((number - 2) * 5) + 24;
};


return [number,catYears,dogYears];




};

module.exports = humanCatDogYears;
