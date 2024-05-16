# Cloud Computing

## Types of Cloud Computing

- **SaaS (Software as a Service):**
  - e.g. Google Docs, Dropbox, Salesforce
- **PaaS (Platform as a Service):**
  - e.g. Google App Engine, 
- **IaaS (Infrastructure as a Service):**
  - e.g. Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform

## Cloud Computing Models

- **Public Cloud:**
  - everything is built on the CSP (Cloud Service Provider)
- **Private Cloud:**
  - built on company's own infrastructure
  - on-premises
- **Hybrid Cloud:**
  - combination of public and private clouds
- **Cross Cloud:**
  - combination of multiple public clouds

## Six advantages of Cloud Computing

1. Trade capital expense for variable expense
2. Benefit from massive economies of scale
3. Stop guessing capacity
4. Increase speed and agility
5. Stop spending money running and maintaining data centers
6. Go global in minutes

## AWS Global Infrastructure

- 33 launched Regions
- 105 Availability Zones
- 600+ CloudFront POPs
- 13 Regional Edge Caches

### Regions

Regions are geographically distinct locations consisting of one or more Availability Zones.

- divided by location, power, water supply, etc.
- AWS scopes services on a selected region
- Some services are global (e.g. IAM, Route 53)

### Availability Zones (AZ)

- An Availability Zone is physical location made up of one or more data centers.
- A region will generally contain 3 AZs.
- All AZs in a region are interconnected with high-bandwidth, low-latency networking.
- AZs are within 100 km (60 miles) of each other.
- Traffic between AZs is encrypted.

### Points of Presence (PoP)

- A PoP is a physical location where a network provider can connect to a data center.
- PoPs are used to connect users to the internet and cloud services.
- PoPs are used to cache content closer to users.

**The following AWS services utilize Pops for content delivery or expedited uploads:**

- Amazon CloudFront **(CDN)**
- Amazon S3 Transfer Acceleration
- AWS Global Accelerator