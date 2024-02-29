import { WeightedRoundRobinLoadBalancer } from "../../loadbalancing/weightedRoundRobin";


describe('WeightedRoundRobinLoadBalancer', () => {
    let loadBalancer: WeightedRoundRobinLoadBalancer;

    beforeEach(() => {
        loadBalancer = new WeightedRoundRobinLoadBalancer();
    });

    test('should initialize with an empty list of servers', () => {
        expect(loadBalancer.getNextServer()).toEqual('');
    });

    test('should add a server to the list of servers', () => {
        loadBalancer.addServer('server1', 3);
        expect(loadBalancer.getNextServer()).toEqual('server1');
    });

    test('should distribute requests based on server weights', () => {
        loadBalancer.addServer('server1', 3);
        loadBalancer.addServer('server2', 1);
        loadBalancer.addServer('server3', 2);

        // Define the type for actualDistribution
        const actualDistribution: { [key: string]: number } = {
            'server1': 0,
            'server2': 0,
            'server3': 0
        };

        const totalRequests = 10000; // Simulate a large number of requests
        for (let i = 0; i < totalRequests; i++) {
            const server = loadBalancer.getNextServer();
            actualDistribution[server]++; // Here is the key part.
        }

        // Normalize actualDistribution
        for (const server in actualDistribution) {
            actualDistribution[server] /= totalRequests;
        }

        // Set a tolerance for the distribution due to randomness in the test
        const tolerance = 0.02; // 2%

        // Assert that the actual distribution is close to the expected distribution
        expect(actualDistribution['server1']).toBeCloseTo(0.5, tolerance);
        expect(actualDistribution['server2']).toBeCloseTo(1 / 6, tolerance);
        expect(actualDistribution['server3']).toBeCloseTo(1 / 3, tolerance);
    });
});
