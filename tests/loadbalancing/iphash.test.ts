import { IpHashLoadBalancer } from "../../loadbalancing/iphash";


describe('IpHashLoadBalancer', () => {
    let ipHashLoadBalancer: IpHashLoadBalancer;

    beforeEach(() => {
        ipHashLoadBalancer = new IpHashLoadBalancer();
        ipHashLoadBalancer.addServer("192.168.1.1", "Server 1");
        ipHashLoadBalancer.addServer("192.168.1.2", "Server 2");
        ipHashLoadBalancer.addServer("192.168.1.3", "Server 3");
    });

    test('getServer returns the correct server for a given IP address', () => {
        const server = ipHashLoadBalancer.getServer("192.168.1.1");
        expect(server).toBe("Server 1");
    });

    test('getServer returns an empty string for unknown IP addresses', () => {
        const server = ipHashLoadBalancer.getServer("192.168.1.4");
        expect(server).toBe("");
    });

    test('getServer returns an empty string if the server map is empty', () => {
        ipHashLoadBalancer = new IpHashLoadBalancer(); // Reset to no servers

        const server = ipHashLoadBalancer.getServer("192.168.1.1");
        expect(server).toBe("");
    });
});
