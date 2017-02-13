
    //Variables
    const VISA = [4556737586899855];
    const MASTERCARD = 5483860808597696;
    const AMERICANEXPRESS = 349973529889097;
    const DISCOVER = 6011629506225960;
    const JCB = 3528216329036270;
    const VISAELECTRON = 4508405849060314;




    const splitString =  value => String(value).split('');

    const getLastCharacter = string => string.slice(-1);
    const excludeLastCharacter = string => string.slice(0, -1);

    const reverseString = a => Number(Array.from(String(a)).reverse().join(''));

    const isComparisonTrue = a => b => a === b ? true : false;
    const moduloCalc = number => value => Number(value) % Number(number);
    function moduloTen(value){
      return value % 10;
    }

    const add = number => value => Number(value) + Number(number);
    const subtract = number => value => Number(value) - Number(number);
    const multiply = number => value => Number(value) * Number(number);

    const addArray = array => array.reduce((a, b) => add(a)(b), 0);

    const isDivisibleBy = number => value => value % number === 0;
    const toString = array => array.join('');

    const getOddIndexesInArray = (array) => {
    const isDivisibleByTwo = isDivisibleBy(2);
    return array.filter((x, i) => !isDivisibleByTwo(i + 1));
    };

    const getEvenIndexesInArray = (array) => {
    const isDivisibleByTwo = isDivisibleBy(2);
    return array.filter((x, i) => isDivisibleByTwo(i + 1));
    };

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




    const validationNumber = Number(getLastCharacter(splitString(VISA)))
    const lastCharRemoved = toString(excludeLastCharacter(splitString(VISA)));
    const charReversed = reverseString(toString(excludeLastCharacter(splitString(VISA))));
    const oddCharCalculated = splitString(arrayItemsMultiply(toString(getOddIndexesInArray(splitString(reverseString(toString(excludeLastCharacter(splitString(VISA)))))))));
    const evenCharCalculated = getEvenIndexesInArray(splitString(reverseString(toString(excludeLastCharacter(splitString(VISA))))));
    const addedEvenOddArray = addArray(oddCharCalculated.concat(evenCharCalculated));

    console.log('                ');
    console.log('VISA Last number', validationNumber);
    console.log('                ');
        console.log('VISA', VISA);
    console.log('                ');
    console.log('VISA completed', isComparisonTrue(moduloTen(addedEvenOddArray))(validationNumber));
    console.log('                ');


  // - [x] Drop the last digit from the number. The last digit is what we want to check against
  // - [x] Reverse the numbers
  // - [x] Multiply the digits in odd positions (1, 3, 5, etc.) by 2 and subtract 9 to all any result higher than 9
  // - [x] Add all the numbers together
  // - [ ] The check digit (the last number of the card) is the amount that you would need to add to get a multiple of 10 (Modulo 10)
