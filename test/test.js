// testing code goes here
const myApp = require('../app/getPrime.js');

describe ("getting prime numbers", function (){
it("should return 2,3 as prime for 5", function(){
expect (myApp.getPrime(5)).toBe(2,3,5);
})
it("should return 2,3,5,7 as prime for 7 ", function(){
  expect(myApp.getPrime(7)).toBe(2,3,5,7);
})
it("should return 2,3,5,7 as prime for 10", function(){
expect(myApp.getPrime(10)).toBe(2,3,5,7);
})
it("should return 2,3,5,7 as prime for 9", function(){
expect(myApp.getPrime(9)).toBe(2,3,5,7);
})
it("should return undefined as prime for 0", function(){
expect(myApp.getPrime(0)).toBe(Undefined);
})
it("should return undefined as prime for -1", function(){
expect(myApp.getPrime(-1)).toBe(Undefined);
})
it("should return undefined as prime for 1", function(){
expect(myApp.getPrime(1)).toBe(Undefined);
})
it("should return undefined as prine for NaN", function(){
expect(myApp.getPrime(NaN)).toBe(Undefined);
})
it("should return 2,3,5,7,11 as prime for 12", function(){
expect(myApp.getPrime(12)).toBe(2,3,5,7,11);
})
it("should return 2,3,5,7,11,13 for prime for 13", function(){
expect(myApp.getPrime(13)).toBe(2,3,5,7,11,13);
})
});


