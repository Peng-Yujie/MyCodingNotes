# EC2

## User Data--Bootstrap Script

Only run once when the instance is first launched.

EC2 user data is used to automate boot tasks such as:

- Installing updates
- Installing software
- Downloading files
- Configuring the instance

## Launching an EC2 Instance

1. **Name and Tags**: Name the instance and add tags
2. **Choose AMI**: Amazon Machine Image
3. **Choose Instance Type**: Hardware configuration of the instance
4. **Configure Instance**: Number of instances, network settings, IAM role, etc.
5. **Add Storage**: EBS volumes

## Details

- **Public IP**: Changes every time the instance is stopped and started
- **Private IP**: Stays the same

## Types of Instances

- General Purpose: Balanced compute, memory, and networking resources
  - T Classes
- Compute Optimized: Batch processing workloads, Media transcoding, High-performance web servers
  - C Classes
- Memory Optimized: High-performance databases, Distributed web scale in-memory caches, In-memory analytics, Applications performing real-time processing of unstructured big data
  - R Classes
- Storage Optimized: Online transaction processing (OLTP) systems, NoSQL databases, Data warehousing applications, Distributed file systems, Cache for in-memory databases (e.g., Redis)
  - I Classes, D Classes, H1
