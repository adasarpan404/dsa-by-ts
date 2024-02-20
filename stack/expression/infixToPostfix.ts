import { Stack } from ".."
import { precedence } from "./precedence";

export function infixToPosfix(expression: string): string {
    let result = ""
    const stack = new Stack<string>();
    for (let i = 0; i < expression.length; i++) {
        const char = expression[i];

        if (char === ' ') {
            continue;
        } else if (char.match(/[a-zA-Z0-9]/)) {
            result += char;
        } else if (char === '(') {
            stack.push(char);
        } else if (char === ')') {
            while (!stack.isEmpty() && stack.peek() !== '(') {
                result += stack.pop();
            }
            stack.pop();
        } else {
            while (!stack.isEmpty() && precedence(char) <= precedence(stack.peek()!)) {
                result += stack.pop();
            }
            stack.push(char);
        }
    }
    while (!stack.isEmpty()) {
        result += stack.pop();
    }

    return result;
}