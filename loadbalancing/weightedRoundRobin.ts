class WeightedRoundRobinServer {
    name: string;
    weight: number;
    constructor(n: string, w: number) {
        this.name = n;
        this.weight = w;
    }
}

export class WeightedRoundRobinLoadBalancer {
    private servers: WeightedRoundRobinServer[] = [];
    private currentServerIndex: number = 0;
    private currentWeight: number = 0;
    private gcd: number = 0;
    private maxWeight: number = 0;
    constructor() { };
    private getGCD(a: number, b: number): number {
        while (b !== 0) {
            const temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    private getMaxWeight(): number {
        let max = 0;
        for (const server of this.servers) {
            if (server.weight > max) {
                max = server.weight;
            }
        }
        return max;
    }

    addServer(serverName: string, serverWeight: number): void {
        const server = new WeightedRoundRobinServer(serverName, serverWeight);
        this.servers.push(server);
        this.gcd = this.getGCD(this.gcd, serverWeight);
        this.maxWeight = this.getMaxWeight();
    }

    getNextServer(): string {
        if (this.servers.length === 0) {
            return "";
        }

        while (true) {
            this.currentServerIndex = (this.currentServerIndex + 1) % this.servers.length;
            if (this.currentServerIndex === 0) {
                this.currentWeight -= this.gcd;
                if (this.currentWeight <= 0) {
                    this.currentWeight = this.maxWeight;
                    if (this.currentWeight === 0) {
                        return "";
                    }
                }
            }

            if (this.servers[this.currentServerIndex].weight >= this.currentWeight) {
                return this.servers[this.currentServerIndex].name;
            }
        }
    }
}

const weightedRoundRobinLoadBalancer = new WeightedRoundRobinLoadBalancer();

weightedRoundRobinLoadBalancer.addServer("Server 1", 3);
weightedRoundRobinLoadBalancer.addServer("Server 2", 1);
weightedRoundRobinLoadBalancer.addServer("Server 3", 2);

// Retrieve servers in weighted round-robin fashion
for (let i = 0; i < 10; ++i) {
    const server = weightedRoundRobinLoadBalancer.getNextServer();
    console.log(`Request ${i + 1} directed to: ${server}`);
}