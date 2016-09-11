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
  // let getOdd = getOddEvenIndex(cardInReverseOrder);




//Functions
  function getLast(a){return Number(String(a).slice(-1))};
  function removeLast(a){return Number(String(a).slice(0, -1))};
  function reverseOrder(a) {return Number(Array.from(String(a)).reverse().join(''));};
  function getOddEvenIndex(value) {
    let splitNumber =  String(value).split('');
    var oddOnes = [],
     evenOnes = [];
    var number = splitNumber;
    for(var i=0; i<number.length; i++)
    (i % 2 == 0 ? evenOnes : oddOnes).push(number[i]);
        return [Number(oddOnes.join('')), Number(evenOnes.join(''))];
  }

  function arrayItemsMultiply(value){
    let splitNumber =  String(value).split('');
    let calculated = splitNumber.map(function(item){
      item = Number(item) * 2;
      if(Number(item) >= 10){
        item = item - 9;
      }
      return item;
    })
    return Number(calculated.join(''));
  }

  function addAll(a, b){
    let splitNumber =  String(a).split('');
    let numberA =  String(a).split('');
    let numberB =  String(b).split('');
    Array.prototype.push.apply(numberA, numberB);
    // var total = sports.push('football', 'swimming');
    // console.log(numberB);
    let total = numberA.reduce((a, b) => a + Number(b), 0);
    console.log(Number(total));
    return Number(total);
  };

  function moduloTen(value){
    return value % 10;
  }
  function comparison(a, b){
    return a === b ? true : false;
  }

  //helpers

  //String(a)
  //.slice(-1)
  //String(a)
  //Number(a)
  //The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
  // /The call() method calls a function with a given this value and arguments provided individually.



//Tests
  let lastCharacterOnCard = 3;
  let testVisaComplete    = 4343667061053553;
  let testVisaWithoutLast = 434366706105355;
  let visaInReverse = 553501607663434;
  let visaOddIndexNumber = [ 5510633, 53067644 ];
  let workedOutMaths = 1120366;
  let allNumbersAdded = 54;
  let moduloTenCalc = 4;


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


  describe('getOddEvenIndex()', () => {
    it('gets the even index values in given string', () => {
      expect(getOddEvenIndex(visaInReverse)).toEqual([ 5510633, 53067644 ]);
    });
  });

  describe('arrayItemsMultiply()', () => {
    it('Multiply the digits in odd positions by 2 and subtract 9 to all any result higher than 9', () => {
      expect(arrayItemsMultiply(visaOddIndexNumber[0])).toEqual(1120366);
    });
  });

  describe('addAll()', () => {
    it('Add all numbers', () => {
      expect(addAll(workedOutMaths, visaOddIndexNumber[1])).toEqual(54);
    });
  });

  describe('moduloTen()', () => {
    it('Module is used to get the remainder after integer division', () => {
      expect(moduloTen(allNumbersAdded)).toEqual(9);
    });
  });

  describe('comparison()', () => {
    it('Strictly compares 2 given values to eachother', () => {
      expect(comparison(moduloTenCalc, lastCharacterOnCard)).toEqual(true);
    });
  });
//Steps:
//Drop the last digit from the number. The last digit is what we want to check against
//Reverse the numbers
//Multiply the digits in odd positions (1, 3, 5, etc.) by 2 and subtract 9 to all any result higher than 9
//Add all the numbers together
//The check digit (the last number of the card) is the amount that you would need to add to get a multiple of 10 (Modulo 10)
