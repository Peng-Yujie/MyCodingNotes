# ELB

- Vertical Scaling: Increase the size of the instance
  - From t2.micro to t2.large
- Horizontal Scaling: Increase the number of instances
  - Auto scaling groups
  - Load balancers
- High Availability: ELB distributes incoming traffic across multiple targets
  - Auto scaling groups in multiple AZs

## Load Balancing

- Load balances are servers that forward internet traffic to multiple servers
- Why?
  - Spread load across multiple servers
  - Expose a single point of access (DNS) to the internet
  - Seamlessly handle failures
  - Do regualar health checks
  - Provide SSL termination

## Elastic Load Balancer (ELB)

- Managed service
- Automatically scales
- Supports multiple protocols
- Supports multiple types of load balancers
