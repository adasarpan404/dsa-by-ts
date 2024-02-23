export class RoundRobinLoadBalancer {
    private servers: string[] = []
    private currentServerIndex: number = 0
    constructor() { }
    addServer(server: string): void {
        this.servers.push(server);
    }
    nextServer(): string {
        if (this.servers.length === 0) {
            return "";
        }
        const nextServer = this.servers[this.currentServerIndex];
        this.currentServerIndex = (this.currentServerIndex + 1) % this.servers.length;
        return nextServer;
    }
}
