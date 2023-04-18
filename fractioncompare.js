const prompt = require('prompt-sync')();
class Fraction {
  constructor(numerator, denominator) {
    this.numerator = numerator;
    this.denominator = denominator;
  }
  
  compare(f) {
    let decimal1 = this.numerator / this.denominator;
    let decimal2 = f.numerator / f.denominator;
    
    if(decimal1 > decimal2) {
      return 'Fraction 1 is greater than Fraction 2';
    } else if(decimal1 < decimal2) {
      return 'Fraction 2 is greater than Fraction 1';
    } else {
      return 'Both fractions are equal';
    }
  }
}

function input() {
  let numerator = parseInt(prompt("Enter numerator: "));
  let denominator = parseInt(prompt("Enter denominator: "));
  return new Fraction(numerator, denominator);
}

function output(f1, f2, result) {
  console.log("Comparison of two fractions: %s", result);
}

function main() {
  let f1 = input();
  let f2 = input();
  let result = f1.compare(f2);
  output(f1, f2, result);
}

main();
