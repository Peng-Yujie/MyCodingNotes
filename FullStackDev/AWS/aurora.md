# Amazon Aurora

Aurora is a proprietary technology from AWS

- PostgreSQL and MySQL compatible
- AWS cloud optimized, 5x performance improvement over MySQL on RDS, 3x the performance of PostgreSQL on RDS
- Aurora storage automatically grows in increments of 10GB, up to 128TB
- Up to 15 read replicas and the replication process is faster than standard MySQL
- Failover is instantaneous, it's HA native
- Costs 20%+ more than RDS, but is more efficient

## High Availability and Read Scaling

- 6 copies of your data across 3 AZs
  - 4 copies out of 6 needed for writes
  - 3 copies out of 6 needed for reads
- Self-healing with peer-to-peer replication
- Storage is striped across 100s of volumes
- One Aurora instance takes writes (master)
- Automated failover for master in less than 30 seconds
- Up to 15 read replicas serve read traffic
- Supports cross-region replication

## DB Clusters

- Writer endpoint: Points to the master
- Reader endpoint: Points to the read replicas

## Features

- Automatic failover
- Backup and Recovery
- Isolation and Security
- Industry Compliance
- Push-button scaling
- Automated patching with zero downtime
- Advanced monitoring
- Routine maintenance
- Backtrack: Restore data at any point of time without using backups
