const { fizzBuzz } = require("../src");

describe("fizzBuzz", () => {
  it("returns Fizz when passed a multiple of 3", () => {
  expect(fizzBuzz(3)).toEqual("Fizz");
  expect(fizzBuzz(6)).toEqual("Fizz");
  expect(fizzBuzz(9)).toEqual("Fizz");
  expect(fizzBuzz(12)).toEqual("Fizz");
  expect(fizzBuzz(18)).toEqual("Fizz");
  expect(fizzBuzz(21)).toEqual("Fizz");
  expect(fizzBuzz(24)).toEqual("Fizz");
  expect(fizzBuzz(27)).toEqual("Fizz");
  expect(fizzBuzz(33)).toEqual("Fizz");
  expect(fizzBuzz(36)).toEqual("Fizz");
  expect(fizzBuzz(39)).toEqual("Fizz");
  });

  it("returns Buzz when passed a multiple of 5", () => {
    expect(fizzBuzz(5)).toEqual("Buzz");
    expect(fizzBuzz(10)).toEqual("Buzz");
    expect(fizzBuzz(20)).toEqual("Buzz");
    expect(fizzBuzz(25)).toEqual("Buzz");
    expect(fizzBuzz(35)).toEqual("Buzz");
    expect(fizzBuzz(40)).toEqual("Buzz");
    expect(fizzBuzz(50)).toEqual("Buzz");
    expect(fizzBuzz(55)).toEqual("Buzz");
    expect(fizzBuzz(65)).toEqual("Buzz");
    expect(fizzBuzz(70)).toEqual("Buzz");
  });

  it("returns FizzBuzz when passed a multiple 3 and 5", () => {
    expect(fizzBuzz(15)).toEqual("FizzBuzz");
    expect(fizzBuzz(30)).toEqual("FizzBuzz");
    expect(fizzBuzz(45)).toEqual("FizzBuzz");
    expect(fizzBuzz(60)).toEqual("FizzBuzz");
    expect(fizzBuzz(75)).toEqual("FizzBuzz");
    expect(fizzBuzz(90)).toEqual("FizzBuzz");
    expect(fizzBuzz(105)).toEqual("FizzBuzz");
  });

  it("returns the number when it isn't a multiple of 3 or 5", () => {
    expect(fizzBuzz(0)).toEqual(0);
    expect(fizzBuzz(1)).toEqual(1);
    expect(fizzBuzz(2)).toEqual(2);
    expect(fizzBuzz(4)).toEqual(4);
    expect(fizzBuzz(7)).toEqual(7);
    expect(fizzBuzz(8)).toEqual(8);
    expect(fizzBuzz(11)).toEqual(11);
    expect(fizzBuzz(13)).toEqual(13);
    expect(fizzBuzz(14)).toEqual(14);
  });
});
