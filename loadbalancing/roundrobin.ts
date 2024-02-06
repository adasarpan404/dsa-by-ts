class RoundRobinLoadBalancer {
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

const roundRobinLoadBalancer = new RoundRobinLoadBalancer();

roundRobinLoadBalancer.addServer("Server 1");
roundRobinLoadBalancer.addServer("Server 2");
roundRobinLoadBalancer.addServer("Server 3");

for (let i = 0; i < 10; ++i) {
    const server = roundRobinLoadBalancer.nextServer();
    console.log(`Request ${i + 1} directed to: ${server}`);
}