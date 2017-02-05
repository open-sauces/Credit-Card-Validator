
//Variables
  const VISA = 4556737586899855;
  const MASTERCARD = 5483860808597696;
  const AMERICANEXPRESS = 349973529889097;
  const DISCOVER = 6011629506225960;
  const JCB = 3528216329036270;
  const VISAELECTRON = 4508405849060314;
  // const MAESTRO = 0604215418083568;

  const TESTCARD = 4556737586899855;



  function validateCard(cardToTest){
    console.log('Card being tested', cardToTest);
    const lastNumber = getLast(cardToTest);

    return comparison(
            moduloTen(
              addAll(arrayItemsMultiply(getOddEvenIndex(reverseOrder(removeLast(cardToTest)))[1]), getOddEvenIndex(reverseOrder(removeLast(cardToTest)))[0])
            ), lastNumber
          );
  }

  console.log('Your card is valid? - ', validateCard(VISA));

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



//Steps:
//Drop the last digit from the number. The last digit is what we want to check against
//Reverse the numbers
//Multiply the digits in odd positions (1, 3, 5, etc.) by 2 and subtract 9 to all any result higher than 9
//Add all the numbers together
//The check digit (the last number of the card) is the amount that you would need to add to get a multiple of 10 (Modulo 10)
