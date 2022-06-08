const { numberToReversedDigits } = require("../src");

describe('numberToReversedDigits', () => {
  test("returns a reversed array of the number's digits", () => {
    expect(numberToReversedDigits(12345)).toEqual([5,4,3,2,1]);
    expect(numberToReversedDigits(42879)).toEqual([9,7,8,2,4]);
    expect(numberToReversedDigits(42)).toEqual([2,4]);
    expect(numberToReversedDigits(789)).toEqual([9,8,7]);
    });
});
