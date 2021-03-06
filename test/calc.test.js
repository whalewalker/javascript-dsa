import { add, sub, div, multi} from "../src/calc"
describe("Calculator testing", ()=>{

    test('add of 1 + 2 to equal 3', () => {
        expect(add(1, 2)).toBe(3);
    });

    test('multiplication of 3 and 5 is equal 15', () => {
        expect(multi(3,5)).toBe(15);
    });

    test('substraction of 33 and 30 to equal to 3', () => {
        expect(sub(33, 30)).toBe(3);
    });

    test('division of 15 and 3 is equal to 5', () => {
        expect(div(15, 3)).toBe(5);
    });

    test('Add of 2 and 3 should not be 7', () => {
        expect(add(2,3)).not.toBe(7);
    });
})