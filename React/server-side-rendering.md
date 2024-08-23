# Server Side Rendering

- HTML is rendered on the server
- Faster initial load time
  - Less JavaScript to download and execute
  - Data is preloaded before the page is rendered
- Less interactivity
  - Pages might be downloaded on demand and require full page reloads

## When to use SSR

### CSR

- SPAs: highly interactive web applications

### SSR

- SEO
- Content-driven websites:
  - Blogs
  - News websites
  - E-commerce websites

## Server Components

**Server components vs Client components:**

|                      | Server Components                             | Client Components                                       |
| -------------------- | --------------------------------------------- | ------------------------------------------------------- |
|                      | Default                                       | "use client"                                            |
| **State/hooks**      | ❌ No                                         | ✅ Yes                                                  |
| **Lifting state up** | ❌ No                                         | ✅ Yes                                                  |
| **Props**            | ✅ Yes                                        | ✅ Yes                                                  |
| **Data fetching**    | ✅ Preferred. Use `async`/`away` in component | Possible                                                |
| **Can import**       | Both server and client components             | Only client components                                  |
| **Can render**       | Both server and client components             | Client components and server components passed as props |
| **When re-render**   | On URL change                                 | On state change                                         |

## Server Side Rendering Types

In Next.js, the server side rendering work is **split by routes**.

Each route can be either **static** or **dynamic**.

### Static Rendering

- The HTML is generated at build time
- Useful when data doesn't change often, and is not personalized to users
- When deployed to Vercel, each static route is automatically hosted on a CDN (Content Delivery Network)
- If all pages are static, the entire app can be exported as a static site (SSG)

### Dynamic Rendering

- The HTML is generated on each request
- The data changes often, or is personalized to users
- Or requires information from the request
- A route can automatically switch between static and dynamic rendering based on the data requirements
- When deployed to Vercel, dynamic routes automatically become serverless functions

### When to use Static vs Dynamic Rendering

Usually, developers don't need to worry about this, as Next.js automatically handles this.

### Other Terminology Mentioned

- **Content Delivery Network (CDN)**: A network of servers that deliver content to users based on their geographic location.
- **Serverless Functions**: Functions that are executed on demand, without the need to manage servers.
- **Edge Network**: A network of servers that are geographically distributed to reduce latency and improve performance.
