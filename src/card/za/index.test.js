"use strict";

//Variables
  const VISA = 4343667061053553;
  const MASTERCARD = 5483860808597696;
  const AMERICANEXPRESS = 349973529889097;
  const DISCOVER = 6011629506225960;
  const JCB = 3528216329036270;
  const VISAELECTRON = 4508405849060314;
  const MAESTRO = 0604215418083568;

  const TESTCARD = 4343667061053553;



//Calculations

  let lastNumberOnCard = getLast(VISA);
  let cardWithoutLastNumber = removeLast(VISA);
  let cardInReverseOrder = reverseOrder(VISA);
  // let getOdd = getOddIndex(cardInReverseOrder);




//Functions
  function getLast(a){return Number(String(a).slice(-1))};
  function removeLast(a){return Number(String(a).slice(0, -1))};
  function reverseOrder(a) {return Number(Array.from(String(a)).reverse().join(''));};
  function getOddIndex(value) {
    let splitNumber =  String(value).split('');
    var oddOnes = [],
     evenOnes = [];
    var number = splitNumber;
    for(var i=0; i<number.length; i++)
    (i % 2 == 0 ? evenOnes : oddOnes).push(number[i]);
        return Number(evenOnes.join(''));
  }

  function arrayItemsMultiply(value){
    let splitNumber =  String(value).split('');
    let calculated = splitNumber.map(function(item){
      item = Number(item) * 2;
      if(Number(item) >= 9){
        item = item - 9;
      }
      return item;
    })
    return Number(calculated.join(''));
  }

  function addAll(value){
    let splitNumber =  String(value).split('');
    let total = splitNumber.reduce((a, b) => a + Number(b), 0);
    return Number(total);
  };

  //helpers

  //String(a)
  //.slice(-1)
  //String(a)
  //Number(a)
  //The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
  // /The call() method calls a function with a given this value and arguments provided individually.



//Tests
  let testVisaComplete    = 4343667061053553;
  let testVisaWithoutLast = 434366706105355;
  let visaInReverse = 553501607663434;
  let visaOddIndexNumber = 53067644;
  let workedOutMaths = 16035388;

  describe('getLast()', () => {
    it('Get last character of string and returns a number', () => {
      expect(getLast(testVisaComplete)).toEqual(3);
    });
  });

  describe('removeLast()', () => {
    it('Remove last character of string and returns a number', () => {
      expect(removeLast(testVisaComplete)).toEqual(434366706105355);
    });
  });

  describe('reverseOrder()', () => {
    it('Reverse the order of the passed in string', () => {
      expect(reverseOrder(testVisaWithoutLast)).toEqual(553501607663434);
    });
  });


  describe('getOddIndex()', () => {
    it('gets the odd index values in given string', () => {
      expect(getOddIndex(visaInReverse)).toEqual(53067644);
    });
  });

  describe('arrayItemsMultiply()', () => {
    it('Multiply the digits in odd positions by 2 and subtract 9 to all any result higher than 9', () => {
      expect(arrayItemsMultiply(visaOddIndexNumber)).toEqual(16035388);
    });
  });

  describe('addAll()', () => {
    it('Add all numbers', () => {
      expect(addAll(workedOutMaths)).toEqual(34);
    });
  });
//Steps:
//Drop the last digit from the number. The last digit is what we want to check against
//Reverse the numbers
//Multiply the digits in odd positions (1, 3, 5, etc.) by 2 and subtract 9 to all any result higher than 9
//Add all the numbers together
//The check digit (the last number of the card) is the amount that you would need to add to get a multiple of 10 (Modulo 10)
