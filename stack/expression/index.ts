import { infixToPosfix } from "./infixToPostfix";

const infixExpression = "a + b * (c - d)";
const postfixExpression = infixToPosfix(infixExpression);
console.log("Postfix expression:", postfixExpression);