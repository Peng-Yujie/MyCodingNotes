# Relational Database Service (RDS)

It's a managed service for databases in the cloud, using SQL as a query language.

- MySQL
- PostgreSQL
- MariaDB
- Oracle
- Microsoft SQL Server
- [Aurora (AWS proprietary database)](aurora.md)
- IBM Db2

## Why RDS?

- Managed service
- Automated provisioning, patching, backup, monitoring
- Continuous backups and restore to specific timestamps
- Monitoring dashboards
- Read replicas
- Multi-AZ setup for DR (Disaster Recovery)
- Maintenance windows for upgrades
- Scalability
- Storage backed by EBS (Elastic Block Store)

## RDS Storage Auto-scaling

- Increase storage on the RDS db instance dynamically
- Scales automatically
- Maximum storage threshold can be set
- With unpredictable workloads
- Supports all RDS databases

## RDS Read Replicas vs. Multi-AZ

|              | Read Replicas                                     | Multi-AZ          |
| ------------ | ------------------------------------------------- | ----------------- |
| Purpose      | Scaling reads                                     | Disaster Recovery |
| Sync         | Asynchronous                                      | Synchronous       |
| Network Cost | Free for RDS Read Replicas within the same region |                   |
