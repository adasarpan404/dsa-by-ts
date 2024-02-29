import { LeastConnectionLoadBalancer } from "../../loadbalancing/leastConnection";


describe('LeastConnectionLoadBalancer', () => {
    let loadBalancer: LeastConnectionLoadBalancer;

    beforeEach(() => {
        loadBalancer = new LeastConnectionLoadBalancer();
        loadBalancer.addServer("Server 1");
        loadBalancer.addServer("Server 2");
        loadBalancer.addServer("Server 3");
    });

    test('nextServer returns a server name', () => {
        const server = loadBalancer.nextServer();
        expect(server).toMatch(/^Server \d+$/);
    });

    test('nextServer returns an empty string if no servers are available', () => {
        loadBalancer = new LeastConnectionLoadBalancer(); // Reset to no servers
        const server = loadBalancer.nextServer();
        expect(server).toBe("");
    });

    test('nextServer balances connections properly', () => {
        loadBalancer.nextServer(); // Increment connection count for Server 1 once
        loadBalancer.nextServer(); // Increment connection count for Server 2 once
        loadBalancer.nextServer(); // Increment connection count for Server 3 once

        // Increment connection count for Server 1 twice
        for (let i = 0; i < 2; i++) {
            loadBalancer.nextServer();
        }

        const nextServer = loadBalancer.nextServer();
        expect(nextServer).toBe("Server 3");
    });
});
