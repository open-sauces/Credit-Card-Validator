// VISA:
// 4556197518505296 - true
// 4539991607481548 - false
// 4929786148583630 - true




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

  console.log('Was your card valid? - ', validateCard(4539991607481548));

//Calculations

  let lastNumberOnCard = getLast(4539991607481548);
  let cardWithoutLastNumber = removeLast(4539991607481548);
  let cardInReverseOrder = reverseOrder(4539991607481548);
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
