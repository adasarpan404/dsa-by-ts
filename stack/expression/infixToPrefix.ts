import { Stack } from "..";
import { precedence } from "./precedence";

export function infixToPrefix(expression: string): string {
    let result = ""
    const stack = new Stack<string>();

    for (let i = expression.length - 1; i >= 0; i--) {
        const char = expression[i];

        if (char === ' ') {
            continue;
        } else if (char.match(/[a-zA-Z0-9]/)) {
            result = char + result;
        } else if (char === ')') {
            stack.push(char);
        } else if (char === '(') {
            while (!stack.isEmpty() && stack.peek() !== ')') {
                result = stack.pop() + result;
            }
            stack.pop();
        } else {
            while (!stack.isEmpty() && precedence(char) < precedence(stack.peek()!)) {
                result = stack.pop() + result;
            }
            stack.push(char);
        }
    }

    while (!stack.isEmpty()) {
        result = stack.pop() + result;
    }
    return result;
}