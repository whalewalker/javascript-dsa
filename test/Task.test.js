import {isUnique, isPermutation, urlify, permutationPalindrome, oneAway, compression} from "../src/string-manipulation/Task";

describe("String manipulation test", ()=>{
    it('should throw exception with message "You must provide a string" when argument is undefined or not string', function () {
        expect(() =>{
            isUnique(575)
        }).toThrow("You must provide a string");

        expect(() =>{
            isUnique(undefined)
        }).toThrow("You must provide a string");
    });

    it('should return true when there is no duplicate', function () {
        expect(isUnique("Hungry")).toBe(true);
    });

    it('should return false when there is  duplicate', function () {
        expect(isUnique("Buddy")).toBe(false);
    });

    it('should return true if "abc" is a permutation of "cba" ', function () {
        expect(isPermutation("abc", "cba")).toBe(true);
    });

    it('should return true if "redull" is a permutation of "llredu" ', function () {
        expect(isPermutation("redull", "llredu")).toBe(true);
    });

    it('should return false if "arcade" is not a permutation of "facade" ', function () {
        expect(isPermutation("arcade", "facade")).toBe(false);
    })

    it('should throw exception if the length of comparing string is not equals', function () {
        expect(() =>{
            isPermutation("arcadeyryr", "facade")
        }).toThrow("String length must be equals");
    });

    it('should replace "Mr John Smith" to a url pattern "Mr%20John%20Smith"', function () {
        let expected = "Mr%20John%20Smith";
        expect(urlify("Mr John Smith")).toBe(expected);
    });

    it('should return true if string is permutation palindrome', function () {
        expect(permutationPalindrome("tact coa")).toBeTruthy();
    });

    it('should return true if it one way different', function () {
        expect(oneAway('pale', 'ple')).toBeTruthy();
        expect(oneAway('pales', 'ple')).toBeTruthy();
        expect(oneAway('pale', 'bale')).toBeTruthy();
        expect(oneAway('pale', 'bake')).toBeFalsy();
    });

    it('should compress "aabcccccaaa" to "a2b1c5a3"', function () {
        let expected = "a2b1c5a3";
        expect(compression("aabcccccaaa")).toBe(expected);
        expect(compression("abcd")).toBe("abcd")
    });
})