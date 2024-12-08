# Auto Scaling Group

In real-world applications, the load on the servers can vary.
In the cloud, it's easy to add or remove servers to handle the load.

- Scaling out: Increase the number of instances
- Scaling in: Decrease the number of instances
- Automatically register new instances to the load balancer

## ASG in AWS

- Desired capacity: Number of instances you want to run
- Minimum capacity: Minimum number of instances
- Maximum capacity: Maximum number of instances
- Launch Template: Configuration for the instances
  - AMI + Instance Type
  - EC2 User Data
  - EBS Volumes
  - Security Groups
  - SSH Key Pair
  - IAM Roles
  - Network

## CloudWatch Alarms

It's possible to scale based on **CloudWatch alarms**.

- An alarm monitors a metric: CPU usage, network traffic, etc.
- Metrics are computed for the overall ASG instances

## Scaling Policies

- Dynamic scaling: Scale based on demand
  - Target tracking scaling
    - Simple to set up
    - Example: Keep average CPU at 40%
  - Step scaling
    - When a CloudWatch alarm is triggered, add or remove a specific number of instances
- Scheduled scaling: Scale based on time
  - Example: Increase the number of instances at 5 PM on weekdays
- Predictive scaling: Scale based on predictions
  - Example: Scale based on the historical data

### Good metrics to scale on

- CPU Utilization
- Request Count Per Target
- Average Network In/Out

### Scaling Cooldowns

- After a scaling activity, you are in the cooldown period (default **300 seconds**)
- During the cooldown period, the ASG will not launch or terminate additional instances
- Use a ready-to-use AMI to reduce configuration time in order to be serving requests faster and reduce the cooldown period
