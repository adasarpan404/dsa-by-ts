export function isOperator(char: string): boolean {
    return ['+', '-', '*', '/'].includes(char);
}