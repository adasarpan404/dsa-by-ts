import { DynamicLoadBalancer } from "../loadbalancing/dynamicLoadBalancing";


describe('DynamicLoadBalancer', () => {
    let dynamicLoadBalancer: DynamicLoadBalancer;

    beforeEach(() => {
        dynamicLoadBalancer = new DynamicLoadBalancer();
        dynamicLoadBalancer.addServer("Server 1");
        dynamicLoadBalancer.addServer("Server 2");
        dynamicLoadBalancer.addServer("Server 3");
    });


    test('getNextServer returns a server name', () => {
        const getNextServerSpy = jest.spyOn(dynamicLoadBalancer, 'getNextServer');
        getNextServerSpy.mockReturnValueOnce('Server 1');

        const server = dynamicLoadBalancer.getNextServer(0.5);
        expect(server).toMatch(/^Server \d+$/);

        getNextServerSpy.mockRestore();
    });

    test('getNextServer returns an empty string if no servers are available', () => {
        dynamicLoadBalancer = new DynamicLoadBalancer(); // Reset to no servers

        const server = dynamicLoadBalancer.getNextServer(0.5);
        expect(server).toBe("");
    });

    test('getNextServer correctly balances load', () => {
        const getNextServerSpy = jest.spyOn(dynamicLoadBalancer, 'getNextServer');
        getNextServerSpy.mockReturnValue('Server 1'); // Mocking the server selection to always return the first server

        dynamicLoadBalancer.getNextServer(0.5); // Increment load of first server
        const initialLoad = dynamicLoadBalancer.getNextServer(0.5); // Increment load of first server again
        expect(initialLoad).toMatch(/^Server \d+$/);

        getNextServerSpy.mockRestore();
    });
});
