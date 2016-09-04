"use strict";

//Variables
  const one = 1;



//Functions
  function plusTwo (a, b) {
    return a + b
  }; 





//Tests
  describe('plusTwo()', () => {
    it('1 + 1 = 2', () => {
      expect(plusTwo(one, one)).toEqual(2);
    });
  });
