class browserNode {
    constructor(public data: string, public next: browserNode | null = null) { };
}

class BrowserHistory {
    private head: browserNode | null = null;
    private current: browserNode | null = null;
    addPage(url: string): void {
        const newNode = new browserNode(url);
        if (!this.head) {
            this.head = newNode;
            this.current = newNode;
        } else {
            this.current!.next = newNode;
            this.current = newNode;
        }
    }
    goBack(): string | null {
        if (this.current && this.current !== this.head) {
            let prev = this.head;
            while (prev && prev.next !== this.current) {
                prev = prev.next!;
            }
            this.current = prev;
            return this.current!.data;
        }
        return null;
    }
    goForward(): string | null {
        if (this.current && this.current.next) {
            this.current = this.current.next;
            return this.current.data;
        }
        return null;
    }
    getCurrentPage(): string | null {
        return this.current ? this.current.data : null;
    }
    displayHistory(): string[] {
        const history: string[] = [];
        let current = this.head;
        while (current) {
            history.push(current.data);
            current = current.next;
        }
        return history;
    }
}

const browserHistory = new BrowserHistory();

browserHistory.addPage('https://www.example.com');
browserHistory.addPage('https://www.example.com/page2');
browserHistory.addPage('https://www.example.com/page3');

console.log('Current Page:', browserHistory.getCurrentPage());

console.log('History:', browserHistory.displayHistory());

console.log('Back:', browserHistory.goBack());
console.log('Forward:', browserHistory.goForward()); 