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

## Application Load Balancer (ALB)

- Layer 7 (HTTP) load balancer
- Great for **microservices** and **container-based** applications
- Routing tables to different target groups
  - Based on Path (.../users, .../posts)
  - Based on hostname (a.domain.com, b.domain.com)
  - Based on Query String (?color=red)
- Has a port mapping feature to redirect to a dynamic port in ECS

### DNS

By creating a load balancer, you get a DNS name that you can use to access the load balancer.

- When one of the instances fails, the load balancer will stop sending traffic to it, but other instances will still receive traffic.

### Rule

- Listener: A process that checks for connection requests
- Rule: Condition that checks for the path, hostname, or query string
  - Condition: Path is /error
  - Action: Forward to target group

## Network Load Balancer (NLB)

- Layer 4 (TCP) load balancer
- Great for **extreme performance** and **static IP** (Elastic IP) for your application
- Handle TCP, HTTP, HTTPS

### How to create a Network Load Balancer

1. Create a target group
2. Create a Network Load Balancer
3. Register targets to the target grou
4. Create a listener

## Gateway Load Balancer (GWLB)
