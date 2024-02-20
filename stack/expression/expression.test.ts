import { infixToPosfix } from "./infixToPostfix"
import { infixToPrefix } from "./infixToPrefix"
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