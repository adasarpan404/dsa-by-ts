class LeastConnectionServer {
    name: string;
    connectionCount: number;
    constructor(n: string) {
        this.name = n;
        this.connectionCount = 0;
    }
}

export class LeastConnectionLoadBalancer {
    private servers: LeastConnectionServer[] = []

    constructor() { }

    addServer(server: string) {
        this.servers.push(new LeastConnectionServer(server));
    }

    nextServer(): string {
        if (this.servers.length === 0) {
            return "";
        }
        let minConnections = this.servers[0].connectionCount;
        let minIndex = 0;
        for (let i = 0; i < this.servers.length; i++) {
            if (this.servers[i].connectionCount < minConnections) {
                minConnections = this.servers[i].connectionCount;
                minIndex = i;
            }
        }
        this.servers[minIndex].connectionCount++;
        return this.servers[minIndex].name;
    }
}
