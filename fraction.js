//Fractions
const prompt = require('prompt-sync')();

class Fraction
{
  constructor(numerator,denominator)
  {
    this.numerator = numerator;
    this.denominator = denominator;
  }
  subtraction(f)
  {
    let den = this.denominator * f.denominator;
    let num = this.numerator * f.denominator - f.numerator * this.denominator;
    let g = gcd(num,den);
    console.log(g);
    return new Fraction(num/g,den/g);
  }
  addition(f)
  {
    let den = this.denominator * f.denominator;
    let num= this.numerator * f.denominator + this.denominator * f.numerator ;
    let g =gcd(num,den);
   return new Fraction(num/g,den/g);
  }
  multiply(f)
  {
    let den = this.denominator * f.denominator;
    let num = this.numerator * f.numerator;
    let g =gcd(num,den);
    return new Fraction(num/g, den/g);
  }
  division(f) 
  {
    let den = this.denominator / f.denominator;
    let num = (this.numerator * f.denominator) / (this.denominator * f.numerator);
    let g =gcd(num,den);
    return new Fraction(num/g, den/g);
  }
  compare(f)
  {
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


function gcd(a,b)
{
  let t=0;
  while(b != 0 )
    {
      t = b;
      b = a % b;
      a = t;
    }
  return a;
}

function inputFraction() {
  let numerator = parseInt(prompt("Enter numerator: "));
  let denominator = parseInt(prompt("Enter denominator: "));
  return new Fraction(numerator, denominator);
}

function subtraction(arr)
{
  let sub = arr[0];
  for(let i=1; i<arr.length;i++)
    {
      sub = sub.subtraction(arr[i]);
    }
  return sub;
}

function output(f1, f2, result, operator) {
  console.log(`The ${operator} of two fractions is ${result.numerator}/${result.denominator}`);
  console.log(`Comparison: ${f1.compare(f2)}`);
}

function main()
{
  let f1 = inputFraction();
  let f2 = inputFraction();
  let sub = f1.subtraction(f2);
  let add = f1.addition(f2);
  let multi = f1.multiply(f2);
  let div = f1.division(f2);
  
  output(f1, f2, add, "addition");
  output(f1, f2, sub, "subtraction");
  output(f1, f2, multi, "multiplication");
  output(f1, f2, div, "division");
}

main();
