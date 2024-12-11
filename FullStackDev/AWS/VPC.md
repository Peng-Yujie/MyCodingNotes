# VPC

Private network in the cloud to deploy your resources.

- **VPC**: Virtual Private Cloud
- **Subnet**: A range of IP addresses in your VPC, allowing you to partition your VPC's IP address range.
  - Private Subnet: Not accessible from the internet
  - Public Subnet: Accessible from the internet
- **Route Table**: A set of rules, called routes, that are used to determine where network traffic is directed.
- **Internet Gateway**: A gateway that allows your VPC to connect to the internet.

## Internet Gateway

- helps your VPC to connect to the internet.
- public subnets have a route to the internet gateway.

### NAT Gateway

- AWS-managed
- inside a public subnet
- allows your instances in your private subnets to access the internet while remaining private.

## Network ACL (Access Control List)

- Aka NACL
- A firewall that controls traffic from and to subnets.
- Can allow or deny rules.
- Attached to subnets.
- Rules only include IP addresses.

## Security Groups

- A firewall that controls traffic to and from an EC2 instance.
- Can only allow rules.
- Rules include IP addresses and other security groups.

## VPC Peering

- Connects two VPCs, privately using AWS's network.
- Make them behave as if they were in the same network.
- Not transitive
  - Must be established for each VPC you want to connect.
  - If VPC A is peered with VPC B, and VPC B is peered with VPC C, VPC A and VPC C are not peered.

## VPC Endpoints

- Endpoints allow you to connect to AWS Services using a **private network**
- Gateway Endpoints: S3 and DynamoDB
- Only used within your VPC
