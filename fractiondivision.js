//divide two fractions
const prompt = require('prompt-sync')();
class Fraction {
  constructor(numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;
  }
  
  division(f) {
    let den = this.denominator / f.denominator;
    let num = (this.numerator * f.denominator) / (this.denominator * f.numerator);
    return new Fraction(num, den);
  }
}

function input() {
  let numerator = parseFloat(prompt("Enter numerator: "));
  let denominator = parseFloat(prompt("Enter denominator: "));
  return new Fraction(numerator, denominator);
}

function output(f1, f2, result) {
  console.log("The division of two fractions is %d/%d", result.numerator, result.denominator);
}

function main() {
  let f1 = input();
  let f2 = input();
  let result = f1.division(f2);
  output(f1, f2, result);
}

main();
