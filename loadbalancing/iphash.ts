class IpHashLoadBalancer {
    private serverMap: Map<string, string> = new Map();

    addServer(ipAddress: string, server: string): void {
        this.serverMap.set(ipAddress, server);
    }

    getServer(ipAddress: string): string {
        if (this.serverMap.has(ipAddress)) {
            return this.serverMap.get(ipAddress) || "";
        }
        return "";
    }
}

const ipHashLoadBalancer = new IpHashLoadBalancer();

ipHashLoadBalancer.addServer("192.168.0.1", "Server 1");
ipHashLoadBalancer.addServer("192.168.0.2", "Server 2");
ipHashLoadBalancer.addServer("192.168.0.3", "Server 3");

console.log("Request from 192.168.0.1 directed to:", ipHashLoadBalancer.getServer("192.168.0.1"));
console.log("Request from 192.168.0.2 directed to:", ipHashLoadBalancer.getServer("192.168.0.2"));
console.log("Request from 192.168.0.3 directed to:", ipHashLoadBalancer.getServer("192.168.0.3"));
console.log("Request from 192.168.0.4 directed to:", ipHashLoadBalancer.getServer("192.168.0.4"));