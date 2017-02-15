    // VISA:
    // 4929120726142066
    // 4929801157156291
    // 4716633167891600 - F
    // 5483860808597696
    //
    // Discover:
    // 6011984164124710
    // 6011178793209188
    // 6011552484800572

    // Diners Club - International:
    // 36735621852788
    // 36807686827706 - F
    // 36354975791020
    //Maestro:
    // 5020731037160939
    // 6762672741427638
    // 5020882549360291


    //Variables

    const VISA = [5020882549360291];
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
          if(Number(item) >= 10){
            item = item - 9;
          }
          return String(item);
        })
        return calculated;
    };

    const validationNumber = Number(getLastCharacter(splitString(VISA)))
    const lastCharRemoved = toString(excludeLastCharacter(splitString(VISA)));
    const charReversed = reverseString(toString(excludeLastCharacter(splitString(VISA))));
    const oddCharCalculated = arrayItemsMultiply(toString(getOddIndexesInArray(splitString(reverseString(toString(excludeLastCharacter(splitString(VISA))))))));
    const evenCharCalculated = getEvenIndexesInArray(splitString(reverseString(toString(excludeLastCharacter(splitString(VISA))))));
    const addedEvenOddArray = addArray(oddCharCalculated.concat(evenCharCalculated));

    console.log('                ');
    console.log('lastCharRemoved', lastCharRemoved);
    console.log('                ');
    console.log('charReversed', charReversed);
    console.log('                ');
    console.log('oddCharCalculated', oddCharCalculated);
    console.log('                ');
    console.log('evenCharCalculated', evenCharCalculated);
    console.log('                ');
    console.log('addedEvenOddArray', addedEvenOddArray);
    console.log('                ');
    console.log('VISA Last number', validationNumber);
    console.log('                ');
    console.log('VISA', VISA);
    console.log('                ');
    console.log('VISA completed', !!(!moduloTen(add(addedEvenOddArray)(validationNumber))));
    console.log('                ');
