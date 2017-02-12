// //Tests
//   let lastCharacterOnCard = 5;
//   let testVisaComplete    = 589986857376554;
//   let testVisaWithoutLast = 58998685737655;
//   let visaInReverse = 589986857376554;
//   let visaEvenOddIndexNumber = [ 8965365, 59887754 ];
//   let workedOutMaths = 19775518;
//   let allNumbersAdded = 85;
//   let moduloTenCalc = 5;
//
//
//
//   describe('getLast()', () => {
//     it('Get last character of string and returns a number', () => {
//       expect(getLast(testVisaComplete)).toEqual(5);
//     });
//   });
//
//   describe('removeLast()', () => {
//     it('Remove last character of string and returns a number', () => {
//       expect(removeLast(testVisaComplete)).toEqual(58998685737655);
//     });
//   });
//
//   describe('reverseOrder()', () => {
//     it('Reverse the order of the passed in string', () => {
//       expect(reverseOrder(testVisaWithoutLast)).toEqual(589986857376554);
//     });
//   });
//
//
//   describe('getOddEvenIndex()', () => {
//     it('gets the even index values in given string', () => {
//       expect(getOddEvenIndex(visaInReverse)).toEqual([ 8965365, 59887754 ]);
//     });
//   });
//
//   describe('arrayItemsMultiply()', () => {
//     it('Multiply the digits in odd positions by 2 and subtract 9 to all any result higher than 9', () => {
//       expect(arrayItemsMultiply(visaEvenOddIndexNumber[1])).toEqual(19775518);
//     });
//   });
//
//   describe('addAll()', () => {
//     it('Add all numbers', () => {
//       expect(addAll(workedOutMaths, visaEvenOddIndexNumber[0])).toEqual(85);
//     });
//   });
//
//   describe('moduloTen()', () => {
//     it('Module is used to get the remainder after integer division', () => {
//       expect(moduloTen(allNumbersAdded)).toEqual(5);
//     });
//   });
//
//   describe('comparison()', () => {
//     it('Strictly compares 2 given values to eachother', () => {
//       expect(comparison(moduloTenCalc, lastCharacterOnCard)).toEqual(true);
//     });
//   });








  //Tests
      const cardGivesFalse = 4539991607481548;
      let visaInReverse = 8451847061999354;

    //   let visaEvenOddIndexNumber = [ 8965365, 59887754 ];
    //   let workedOutMaths = 19775518;
    //   let allNumbersAdded = 85;
    //   let moduloTenCalc = 5;



    describe('getLast()', () => {
      it('Get last character of string and returns a number', () => {
        expect(getLast(cardGivesFalse)).toEqual(8);
      });
    });

    describe('removeLast()', () => {
      it('Remove last number', () => {
        expect(removeLast(cardGivesFalse)).toEqual(453999160748154);
      });
    });

    describe('reverseOrder()', () => {
      it('Reverse the order of number', () => {
        expect(reverseOrder(removeLast(cardGivesFalse))).toEqual(451847061999354);
      });
    });

    describe('getOddEvenIndex()', () => {
      it('gets the [ evenPositions, oddPositions ] index values and puts them in array', () => {
        expect(getOddEvenIndex(reverseOrder(removeLast(cardGivesFalse)))).toEqual([ 5876995, 41401934 ]);
      });
    });

    describe('arrayItemsMultiply()', () => {
      it('Multiply the digits in odd positions by 2 and subtract 9 to all/any result higher than 9', () => {
        expect(arrayItemsMultiply(getOddEvenIndex(reverseOrder(removeLast(cardGivesFalse)))[1])).toEqual(82802968);
      });
    });

    describe('addAll()', () => {
      it('Add all numbers', () => {
        expect(addAll(arrayItemsMultiply(getOddEvenIndex(reverseOrder(removeLast(cardGivesFalse)))[1]), getOddEvenIndex(reverseOrder(removeLast(cardGivesFalse)))[0])).toEqual(92);
      });
    });

    describe('moduloTen()', () => {
      it('Module is used to get the remainder after integer division', () => {
        expect(moduloTen(addAll(arrayItemsMultiply(getOddEvenIndex(reverseOrder(removeLast(cardGivesFalse)))[1]), getOddEvenIndex(reverseOrder(removeLast(cardGivesFalse)))[0]))).toEqual(getLast(cardGivesFalse));
      });
    });
    //
  //   describe('comparison()', () => {
  //     it('Strictly compares 2 given values to eachother', () => {
  //       expect(comparison(moduloTenCalc, lastCharacterOnCard)).toEqual(true);
  //     });
  //   });
