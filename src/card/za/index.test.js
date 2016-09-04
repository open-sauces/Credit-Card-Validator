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






  // let stepOne = getLast(VISA);
  // let stepOne = getLast(VISA);
  // let stepOne = getLast(VISA);
  // let stepOne = getLast(VISA);
  // let stepOne = getLast(VISA);
  // let stepOne = getLast(VISA);
  // let stepOne = getLast(VISA);
  // let stepOne = getLast(VISA);
  // let stepOne = getLast(VISA);
  // let stepOne = getLast(VISA);


//Functions
  function getLast(a){return Number(String(a).slice(-1))};
  function removeLast(a){return Number(String(a).slice(0, -1))};
  function reverseOrder(){};
  function getOdd(){};
  function multiplyByTwo(){};
  function checkIfMoreThenNine(){};
  function addAll(){};
  function validateModulo(){};

  //helpers

  //String(a)
  //.slice(-1)
  //String(a)
  //Number(a)




//Tests
  let testVisa = 4343667061053553;

  describe('getLast()', () => {
    it('Get last character of string and returns a number', () => {
      expect(getLast(testVisa)).toEqual(3);
    });
  });

  describe('removeLast()', () => {
    it('Remove last character of string and returns a number', () => {
      expect(removeLast(testVisa)).toEqual(434366706105355);
    });
  });
//Steps:
//Drop the last digit from the number. The last digit is what we want to check against
//Reverse the numbers
//Multiply the digits in odd positions (1, 3, 5, etc.) by 2 and subtract 9 to all any result higher than 9
//Add all the numbers together
//The check digit (the last number of the card) is the amount that you would need to add to get a multiple of 10 (Modulo 10)
