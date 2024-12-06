# AWS EFS

Elastic File System (EFS) is a scalable file storage service that can be mounted on multiple EC2 instances across different availability zones.

Scales automatically, pay-as-you-go, no capacity planning.

## Use Cases

- content management
- web serving
- data sharing

## Performance & Storage Classes

Performance modes:

- General Purpose (default): Latency-sensitive use cases
- Max I/O: Higher latency, higher throughput

Throughput modes:

- Bursting: Default, scales as needed
- Provisioned: set regardless of usage
- Elastic: Automatically scales throughput

Storage classes:
Tiers:

- Standard: Frequently accessed files
- Infrequent Access (IA): Files accessed less frequently, lower cost
- Archive: Rarely accessed files, lowest cost
- Implement **lifecycle policies** to move files between classes

Availability and Durability:

- Standard: Multi-AZ
- Single AZ
