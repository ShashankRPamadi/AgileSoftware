//add two fractions
const prompt = require('prompt-sync')();
class fraction{
  constructor(numerator,denominator){
    this.numerator=numerator;
    this.denominator=denominator;
  }
  add(f){
    let den = this.denominator * f.denominator;
    let num= this.numerator * f.denominator + this.denominator * f.numerator ;
    let g =gcd(num,den);
   return new fraction(num/g,den/g);
  }
}
 function gcd(a,b){
   let t=0;
   console.log(a,b);
   while(b!=0){
     t=b;
     b=a%b;
     a=t;
     console.log(a,b,t);
   }
   return a;
 }
function input(){
  let numerator=parseInt(prompt("enter numerator"));
  let denominator=parseInt(prompt("enter denominator"));
  return new fraction(numerator,denominator);
}
function output(f1,f2,result){
  console.log("the sum of twp fractions is %d/%d",result.numerator,result.denominator);
}
function main(){
  let f1 = input();
  let f2 = input();
  let f3 = f1.add(f2);
  output(f1,f2,f3);
}
main();
