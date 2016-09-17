"use strict";

//Variables
  const VISA = 4556737586899855;
  const MASTERCARD = 5483860808597696;
  const AMERICANEXPRESS = 349973529889097;
  const DISCOVER = 6011629506225960;
  const JCB = 3528216329036270;
  const VISAELECTRON = 4508405849060314;
  const MAESTRO = 0604215418083568;

  const TESTCARD = 4556737586899855;



  function validateCard(cardToTest){
    console.log(cardToTest);
    const lastNumber = getLast(cardToTest);

    return comparison(
            moduloTen(
              addAll(arrayItemsMultiply(getOddEvenIndex(reverseOrder(removeLast(cardToTest)))[1]), getOddEvenIndex(reverseOrder(removeLast(cardToTest)))[0])
            ), lastNumber
          );
  }

  console.log(validateCard(VISAELECTRON));

// function validateCard(cardToTest){
//   return comparison(moduloTen(addAll(arrayItemsMultiply(getOddEvenIndex(reverseOrder(removeLast(cardToTest)))))));
// }
//
// console.log(validateCard(TESTCARD));

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
      if(Number(item) >= 9){
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
    let total = numberA.reduce((a, b) => a + Number(b), 0);
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
  let lastCharacterOnCard = 5;
  let testVisaComplete    = 4556737586899855;
  let testVisaWithoutLast = 455673758689985;
  let visaInReverse = 589986857376554;
  let visaEvenOddIndexNumber = [ 8965365, 59887754 ];
  let workedOutMaths = 19775518;
  let allNumbersAdded = 85;
  let moduloTenCalc = 5;







  describe('getLast()', () => {
    it('Get last character of string and returns a number', () => {
      expect(getLast(testVisaComplete)).toEqual(5);
    });
  });

  describe('removeLast()', () => {
    it('Remove last character of string and returns a number', () => {
      expect(removeLast(testVisaComplete)).toEqual(455673758689985);
    });
  });

  describe('reverseOrder()', () => {
    it('Reverse the order of the passed in string', () => {
      expect(reverseOrder(testVisaWithoutLast)).toEqual(589986857376554);
    });
  });


  describe('getOddEvenIndex()', () => {
    it('gets the even index values in given string', () => {
      expect(getOddEvenIndex(visaInReverse)).toEqual([ 8965365, 59887754 ]);
    });
  });

  describe('arrayItemsMultiply()', () => {
    it('Multiply the digits in odd positions by 2 and subtract 9 to all any result higher than 9', () => {
      expect(arrayItemsMultiply(visaEvenOddIndexNumber[1])).toEqual(19775518);
    });
  });

  describe('addAll()', () => {
    it('Add all numbers', () => {
      expect(addAll(workedOutMaths, visaEvenOddIndexNumber[0])).toEqual(85);
    });
  });

  describe('moduloTen()', () => {
    it('Module is used to get the remainder after integer division', () => {
      expect(moduloTen(allNumbersAdded)).toEqual(5);
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
