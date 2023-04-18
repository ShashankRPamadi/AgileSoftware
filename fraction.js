//Fractions
const prompt = require('prompt-sync')();

class Fraction
{
  constructor(numerator,denominator)
  {
    this.numerator = numerator;
    this.denominator = denominator;
  }
  add(f)
  {
    let den = this.denominator * f.denominator;
    let num= this.numerator * f.denominator + this.denominator * f.numerator ;
    let g =gcd(num,den);
   return new fraction(num/g,den/g);
  }
  subtraction(f)
  {
    let den = this.denominator * f.denominator;
    let num = this.numerator * f.denominator - f.numerator * this.denominator;
    let g = gcd(num,den);
    console.log(g);
    return new Fraction(num/g,den/g);
  }
}

function gcd(a,b)
{
  let t=0;
  while(b != 0 )
    {
      t = b;
      b = a % b;
      a =t;
    }
  return a;
}

function input_fraction()
{
  let n=parseInt(prompt("Enter the number of fractions: "));
  let arr=[];
  for(let i=0; i<n; i++)
    {
      let num = parseFloat(prompt("Enter the numerator: "));
      let den = parseFloat(prompt("Entert the denominator: "));
      let f = new Fraction(num,den);
      arr.push(f);
    }
  return arr;
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

function main()
{
  let arr = input_fraction();
  let sub = subtraction(arr);
  console.log("The subtraction of fraction is: ",sub.numerator + "/" + sub.denominator);
}

main();
