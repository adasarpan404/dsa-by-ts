export class IpHashLoadBalancer {
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
