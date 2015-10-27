var expect = require('chai').expect;

describe( "Calculator", function(){
  var Calculator = function(){
    this.add = function(num1, num2){
      return num1 + num2;
    };
    this.subtract = function(num1, num2){
      return num1 - num2;
    };
    this.multiply = function(num1, num2){
      return num1 * num2;
    };
    this.divide = function(num1, num2){
      if(num2 === 0){
        return NaN;//runs correctly, but will fail test as NaN !== NaN
      }
      return num1 / num2;
    };
  };
   var calculator;
   beforeEach( function(){
     calculator = new Calculator();
   });
   it( "adds 1 and 2", function(){
     expect( calculator.add( 1, 2 ) ).to.equal( 3 );
   });
   it( "subtracts 2 from 9", function(){
     expect( calculator.subtract( 9, 2 ) ).to.equal( 7 );
   });
   it( "multiplies 4 and 3", function(){
     expect( calculator.multiply( 4, 3 ) ).to.equal( 12 );
   });
   it( "divides 10 by 2", function(){
     expect( calculator.divide( 10, 2 ) ).to.equal( 5 );
   });
   it( "does not divide by 0", function(){
     expect( calculator.divide( 5, 0 ) ).to.equal( NaN );
   });
});

console.log(5/0);
