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
