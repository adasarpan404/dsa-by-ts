import { RoundRobinLoadBalancer } from "./roundrobin";


describe('RoundRobinLoadBalancer', () => {
    let loadBalancer: RoundRobinLoadBalancer;

    beforeEach(() => {
        loadBalancer = new RoundRobinLoadBalancer();
    });

    test('should initialize with an empty list of servers', () => {
        expect(loadBalancer.nextServer()).toEqual('');
    });

    test('should add a server to the list of servers', () => {
        loadBalancer.addServer('server1');
        expect(loadBalancer.nextServer()).toEqual('server1');
    });

    test('should cycle through servers in round-robin order', () => {
        loadBalancer.addServer('server1');
        loadBalancer.addServer('server2');
        loadBalancer.addServer('server3');

        expect(loadBalancer.nextServer()).toEqual('server1');
        expect(loadBalancer.nextServer()).toEqual('server2');
        expect(loadBalancer.nextServer()).toEqual('server3');
        expect(loadBalancer.nextServer()).toEqual('server1');
        expect(loadBalancer.nextServer()).toEqual('server2');
    });
});
