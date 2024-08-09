# Cheatsheet

### Redis

- **Write-through**: Data is written to the cache and the underlying database simultaneously.
- **Lazy Loading**: Cache only stores data when it is requested, reducing the load on the cache.
- **Cache Invalidation**: The process of removing or updating data in the cache when the underlying data changes.

### Websockets

- **Pros of WebSockets**:
  - Low latency, real-time communication.
  - Persistent connection between client and server.
- **Cons of WebSockets**:
  - More complex to implement than HTTP polling.
  - May be blocked by proxies or firewalls.
- **Polling**:
  - Easier to implement.
  - Can be resource-intensive and cause server load due to frequent requests.

### React

- **State**: Holds data that can change over time and triggers re-rendering.
- **Props**: Pass data from parent to child components, immutable in the child.
- **Hoisting**: Moving state up to the closest common ancestor to share data between sibling components.
- **Lifecycle of Components**:
  - **Trigger Phase**: Methods like `componentWillMount`, `componentDidMount`.
  - **Render Phase**: Component renders to the DOM.
  - **Commit Phase**: DOM updates are committed and `componentDidUpdate` is called.

### Authentication

- **OAuth2 Flow**: Authorization Code Flow (user authorization, exchange code for token).
- **Session Management**: Sessions can be managed via cookies or tokens (e.g., JWT).
- **OAuth vs OIDC**:
  - **OAuth**: Primarily for authorization.
  - **OIDC (OpenID Connect)**: Layer on top of OAuth2 for authentication.
  - OIDC helps manage user sessions securely.

### GraphQL

- **Motivation over REST**: Fetches only required data, reducing over-fetching and under-fetching.
- **GraphQL Schema**: Defines types, queries, and mutations.
- **Queries**: Fetch data.
- **Mutations**: Modify data.
- **Apollo Client Setup**: Used to interact with GraphQL API from the client-side.

### AWS/Docker

- **Containers vs VMs**:
  - **Containers**: Lightweight, share the host OS kernel, faster startup.
  - **VMs**: Full OS, more isolated, higher resource usage.
- **EC2 vs Physical VM**:
  - **EC2**: Scalable, managed by AWS, pay-as-you-go.
  - **Physical VM**: Requires hardware, self-managed.
- **Image vs Container**:
  - **Image**: Blueprint for containers, immutable.
  - **Container**: Running instance of an image.
- **EC2 + Docker**: Deploy a Dockerized website on EC2 instances for scalability and ease of management.

### Security

- **Form Validation**: Prevents invalid data from being processed.
- **XSS (Cross-Site Scripting)**: Attacker injects malicious scripts. Mitigation: Escape user input.
- **CSRF (Cross-Site Request Forgery)**: Malicious requests sent from a trusted user's browser. Mitigation: Use anti-CSRF tokens.
- **SQL Injection**: Injecting malicious SQL queries. Mitigation: Use parameterized queries.
- **RBAC/ABAC**: Role-Based Access Control vs. Attribute-Based Access Control. Used for fine-grained access control.
