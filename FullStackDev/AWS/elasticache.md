# ElastiCache

- ElastiCache is a web service that makes it easy to deploy, operate, and scale an in-memory cache in the cloud.
- ElastiCache is to get managed Redis or Memcached.
- High Performance, Low Latency

## Architecture

- Applications access ElastiCache
- If cache hit, data is returned
- If cache miss, data is fetched from the database and stored in the cache

### User Session Store

- A user logs in any of the application instances
- The application stores the session data in the cache
- The user hits another application instance
- The session data is retrieved from the cache
- The user is logged in

## Redis

- Multi-AZ with Auto-Failover
- Read Replicas to scale reads and have high availability
- Data Durability using AOF persistence
- Backup and Restore features
- Supports Sets and Sorted Sets

## Memcached

- Multi-node for partitioning
- No high availability
- Non-persistent
- Backup and Restore (serverless)
- Multi-threaded architecture

## Caching Strategies

- Lazy Loading: easy to implement and works well for read-heavy applications
- Write Through: usually combined with Lazy Loading as targeted for the queries or workloads that benefit from having the data in the cache
- Cache Eviction and Time to Live (TTL): to manage the cache size and the data in the cache

Note: Only cache what is needed, not everything

### Lazy Loading

- If cache miss, the application fetches the data from the database and stores it in the cache
- Only the requested data is cached
- Cons
  - Cache miss penalty that results in more round trips to the database
  - Stale data: data can be updated in the database and not in the cache

### Write Through

- Add or Update cache when database is updated
- Cache is always up to date
  1. Write data to DB
  2. Write data to cache
- Pros
  - Data in cache is never stale
  - Less latency on read
- Cons
  - Missing Data ustil it's written to the DB
  - Cache churn: a lot of data is written to the cache that is never read

### Cache Eviction and TTL

- Cache Eviction
  - Delete the item explicitly in the cache
  - Least Recently Used (LRU)
  - The memory is full
  - Time to Live (TTL)
- Helpful for any data:
  - Leaderboards
  - Comments
  - Activity streams
- TTL can range from a few seconds to a few hours or days
- If too many evictions, increase the cache size
