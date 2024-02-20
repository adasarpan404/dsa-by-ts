import { infixToPosfix } from "./infixToPostfix"
import { infixToPrefix } from "./infixToPrefix"
import { precedence } from "./precedence"
import { prefixToPostfix } from "./prefixToPostfix"

test('infix to postfix', () => {
    const infixExpression = "a + b * (c - d)"
    const postFixExpression = infixToPosfix(infixExpression)
    expect(postFixExpression).toBe("abcd-*+")
})

test("infix to prefix", () => {
    const infixExpression = "a + b * (c - d)"
    const prefixExpression = infixToPrefix(infixExpression)
    expect(prefixExpression).toBe("+a*b-cd")
})

test("prefix to postfix", () => {
    const prefixExpression = "+a*b-cd"
    const postfixExpression = prefixToPostfix(prefixExpression)
    expect(postfixExpression).toBe("abcd-*+")
})

describe('precedence', () => {
    test('returns correct precedence for + and -', () => {
        expect(precedence('+')).toBe(1);
        expect(precedence('-')).toBe(1);
    });

    test('returns correct precedence for * and /', () => {
        expect(precedence('*')).toBe(2);
        expect(precedence('/')).toBe(2);
    });

    test('returns default precedence for unknown operators', () => {
        expect(precedence('^')).toBe(0);
        expect(precedence('%')).toBe(0);
        expect(precedence('')).toBe(0);
        expect(precedence('abc')).toBe(0);
    });
});