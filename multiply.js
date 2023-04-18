//multiply two fractions
const prompt = require('prompt-sync')();
class Fraction {
  constructor(numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;
  }
  
  multiply(f) {
    let den = this.denominator * f.denominator;
    let num = this.numerator * f.numerator;
    return new Fraction(num, den);
  }
}

function input() {
  let numerator = parseInt(prompt("Enter numerator: "));
  let denominator = parseInt(prompt("Enter denominator: "));
  return new Fraction(numerator, denominator);
}

function output(f1, f2, result) {
  console.log("The multiplication of two fractions is %d/%d", result.numerator, result.denominator);
}

function main() {
  let f1 = input();
  let f2 = input();
  let result = f1.multiply(f2);
  output(f1, f2, result);
}

main();
