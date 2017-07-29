'use strict';

describe('fizbuzzwhizz', () => {
    it('should return fizz when number is mutiple of a', () => {
        let a = 3;
        let b = 5;
        let c = 7;
        let number = 51;
        expect(fizbuzzwhizz(a, b, c, number)).toEqual("fizz");
    });

    it('should return buzz when number is mutiple of b', () => {
        let a = 3;
        let b = 5;
        let c = 7;
        let number = 40;
        expect(fizbuzzwhizz(a, b, c, number)).toEqual("buzz");
    });

    it('should return whizz when number is mutiple of c', () => {
        let a = 3;
        let b = 5;
        let c = 7;
        let number = 56;
        expect(fizbuzzwhizz(a, b, c, number)).toEqual("whizz");
    });

    it('should return number&fizzbuzz when number is mutiple of a&b', () => {
        let a = 3;
        let b = 5;
        let c = 7;
        let number = 15;
        let result = `${a},${b},fizzbuzz`;
        expect(fizbuzzwhizz(a, b, c, number)).toEqual(result);
    });

it('should return number&fizzwhizz when number is mutiple of a&c', () => {
    let a = 3;
let b = 5;
let c = 7;
let number = 21;
let result = `${a},${c},fizzwhizz`;
expect(fizbuzzwhizz(a, b, c, number)).toEqual(result);
});

it('should return number&buzzwhizz when number is mutiple of b&c', () => {
    let a = 3;
let b = 5;
let c = 7;
let number = 70;
let result = `${b},${c},buzzwhizz`;
expect(fizbuzzwhizz(a, b, c, number)).toEqual(result);
});

it('should return number&fizzbuzzwhizz when number is mutiple of a&b&c', () => {
    let a = 3;
let b = 5;
let c = 7;
let number =105;
let result = `${a},${b},${c},fizzbuzzwhizz`;
expect(fizbuzzwhizz(a, b, c, number)).toEqual(result);
});

it('should return fizz when number including a', () => {
    let a = 3;
let b = 5;
let c = 7;
let number =13;
expect(fizbuzzwhizz(a, b, c, number)).toEqual("fizz");
});
});
