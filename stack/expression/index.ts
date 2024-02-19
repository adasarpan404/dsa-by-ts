import { infixToPosfix } from "./infixToPostfix";
import { infixToPrefix } from "./infixToPrefix";
import { prefixToPostfix } from "./prefixToPostfix";

const infixExpression = "a + b * (c - d)";
const postfixExpression = infixToPosfix(infixExpression);
console.log("Postfix expression:", postfixExpression);

const prefixExpression = infixToPrefix(infixExpression);
console.log("Prefix Expression", prefixExpression)

const prefixToPostfixExpression = prefixToPostfix(prefixExpression)
console.log("Prefix to PostFix Expression", prefixToPostfixExpression)