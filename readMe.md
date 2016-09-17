# Install
Run *npm install* from root

## Unit test run from root
```javascript
⋅⋅* ./node_modules/.bin/karma start karma.conf.js
```

## How the Credit Card Validator works.

### How to validate a Credit Card Number?

Most credit card number can be validated using the Luhn algorithm, which is more or a less a glorified Modulo 10 formula!

The Luhn Formula:
- [x] Drop the last digit from the number. The last digit is what we want to check against
- [x] Reverse the numbers
- [ ] Multiply the digits in odd positions (1, 3, 5, etc.) by 2 and subtract 9 to all any result higher than 9
- [ ] Add all the numbers together
- [ ] The check digit (the last number of the card) is the amount that you would need to add to get a multiple of 10 (Modulo 10)




### Luhn Example:
 Step                       Total
1.  Original Number:  4 5	5	6	7	3	7	5	8	6	8	9	9	8	5	5

2.  Drop the last digit:  4	5	5	6	7	3	7	5	8	6	8	9	9	8	5

3.  Reverse the digits:  5	8	9	9	8	6	8	5	7	3	7	6	5	5	4

4.  Multiple odd digits by 2:  10	8	18	9	16	6	16	5	14	3	14	6	10	5	8

5.  Subtract 9 to numbers over 9:  1	8	9	9	7	6	7	5	5	3	5	6	1	5	8		

6.  Add all numbers:  1	8	9	9	7	6	7	5	5	3	5	6	1	5	8		85

7.  Mod 10:  85 modulo 10 = 5 (last digit of card)



* [Source:] (http://www.freeformatter.com/credit-card-number-generator-validator.html)
