class palindromeNode {
    data: number;
    next: palindromeNode | null;
    constructor(data: number) {
        this.data = data;
        this.next = null;
    }
}

class PalindromeLinkedList {
    head: palindromeNode | null
    constructor() {
        this.head = null;
    }

    append(data: number): void {
        const newNode = new palindromeNode(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }
    display(): void {
        let listString = ""
        let current = this.head;
        while (current) {
            listString += current.data + "->";
            current = current.next;
        }
        listString += "null"
        console.log(listString)
    }
    reverse(current: palindromeNode | null): palindromeNode | null {
        let prev = null;
        let next = null;
        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        return prev;

    }

    isPalindrome(): boolean {
        try {
            if (!this.head) {
                return false
            }

            let slow = this.head, fast = this.head;
            while (fast !== null && fast.next !== null) {
                slow = slow.next!;
                fast = fast.next.next!;
            }
            let secondHalf = this.reverse(slow);
            while (secondHalf !== null) {
                if (this.head.data !== secondHalf.data) {
                    return false;
                }
                this.head = this.head.next!;
                secondHalf = secondHalf.next;
            }
            return true
        } catch (e) {
            console.log(e)
            return false;
        }
    }
}

const palindromeLinkedList = new PalindromeLinkedList();
palindromeLinkedList.append(1);
palindromeLinkedList.append(2);
palindromeLinkedList.append(3);
palindromeLinkedList.append(3);
palindromeLinkedList.append(2);
palindromeLinkedList.append(1);

console.log("PalindDrome Linked List")
palindromeLinkedList.display()
console.log(palindromeLinkedList.isPalindrome())

const nonPalindromeLinkedList = new PalindromeLinkedList();

nonPalindromeLinkedList.append(1);
nonPalindromeLinkedList.append(3);
nonPalindromeLinkedList.append(4);
console.log("PalindDrome Linked List")
nonPalindromeLinkedList.display()
console.log(nonPalindromeLinkedList.isPalindrome())
