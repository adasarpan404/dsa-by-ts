import { infixToPosfix } from "./infixToPostfix";
import { infixToPrefix } from "./infixToPrefix";

const infixExpression = "a + b * (c - d)";
const postfixExpression = infixToPosfix(infixExpression);
console.log("Postfix expression:", postfixExpression);

const prefixExpression = infixToPrefix(infixExpression);
console.log("Prefix Expression", prefixExpression)