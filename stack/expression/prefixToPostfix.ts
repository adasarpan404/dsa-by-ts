import { Stack } from "..";
import { isOperator } from "./isoperator";

export function prefixToPostfix(expression: string): string {
    const stack = new Stack<string>();

    for (let i = expression.length - 1; i >= 0; i--) {
        const char = expression[i];

        if (char === ' ') {
            continue;
        }

        if (isOperator(char)) {
            const operand1 = stack.pop();
            const operand2 = stack.pop();
            const postfixExpression = operand1! + operand2! + char;
            stack.push(postfixExpression);
        } else {
            stack.push(char);
        }
    }

    return stack.pop() || '';
}