export class DynamicServer {
    name: string;
    load: number;

    constructor(name: string, load: number) {
        this.name = name;
        this.load = load;
    }
}

export class DynamicLoadBalancer {
    private servers: DynamicServer[] = [];

    addServer(serverName: string): void {
        const server: DynamicServer = { name: serverName, load: 0.0 };
        this.servers.push(server);
    }

    getNextServer(load: number): string {
        if (this.servers.length === 0) {
            return "";
        }

        let minLoad = this.servers[0].load;
        let minIndex = 0;

        for (let i = 1; i < this.servers.length; ++i) {
            if (this.servers[i].load < minLoad) {
                minLoad = this.servers[i].load;
                minIndex = i;
            }
        }
        this.servers[minIndex].load += load;

        return this.servers[minIndex].name;
    }
}

const dynamicLoadBalancer = new DynamicLoadBalancer();

dynamicLoadBalancer.addServer("Server 1");
dynamicLoadBalancer.addServer("Server 2");
dynamicLoadBalancer.addServer("Server 3");

function lcg_rand(): number {
    const a: number = 1664525;
    const c: number = 10139004223;
    const m: number = 100;
    const currentSeed: number = 12345;

    const normalized_value: number = currentSeed / m;
    const range: number = 2.0 - 0.1;

    return normalized_value * range + 0.1;
}

for (let i = 0; i < 10; ++i) {
    const server = dynamicLoadBalancer.getNextServer(lcg_rand());
    console.log(`Request ${i + 1} directed to: ${server}`);

    const delay = Math.floor(Math.random() * 10) + 1;
    setTimeout(() => { }, delay * 100);
}
