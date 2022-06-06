const numberToReversedDigits = number => {
    const splitNo = number.toString().split("");
    const realDigits = splitNo.map(Number);
    realDigits.reverse();
    return realDigits;    
};

module.exports = numberToReversedDigits;
