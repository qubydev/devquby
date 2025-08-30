---
title: React Hydration Explained
slug: react-hydration-explained
---

If you've developed with React and server-side rendering, you've probably encountered the **hydration mismatch** error—it's a common and often frustrating issue. Let's explore what causes it and how to address it.

<!-- truncate -->

:::warning
Hydration in React only applies to dynamic server-side rendered (SSR) pages. If you're using React purely for client-side rendering (CSR), you generally don't need to worry about hydration.
:::

## Client-Side Rendering (CSR)

In **CSR**, the server sends almost no HTML for the page content. Instead, it sends a JavaScript bundle. The browser executes this JavaScript to render the content.  

**Pros:**

- Interactivity works fully on the client.
- You can build highly dynamic apps without server involvement.

**Cons:**

- Until the JavaScript is downloaded and executed, the page can appear **blank**.
- SEO can suffer because search engines might see an empty page initially.

```jsx
// Example of CSR
function App() {
  const [count, setCount] = React.useState(0);
  
  return <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>;
}

ReactDOM.render(<App />, document.getElementById('root'));
````

Here, nothing is visible until the browser runs the JS and renders the `<button>`.

---

## Server-Side Rendering (SSR)

In **SSR**, the server generates the HTML for the page **before** sending it to the client. The browser can immediately display the content.

**Pros:**

* Page loads faster and feels instant.
* Great for SEO because search engines see real HTML.

**Cons:**

* By default, SSR alone is static. Dynamic interactivity (like buttons, forms, or animations) **cannot work** until JavaScript runs on the client.
* If you try to make it interactive without hydration, the DOM would need to be replaced entirely by the client-side JS.

---

## Hydration: The Best of Both Worlds

Hydration is a technique that combines SSR and CSR:

1. **Server sends HTML**: The user sees the page immediately, even without JavaScript.
2. **JavaScript downloads and runs**: React attaches event listeners and makes the page interactive.
3. **DOM reconciliation**: React compares the existing server-rendered HTML with the virtual DOM from client-side React and updates **only what is necessary**.

```jsx
// Example: SSR + Hydration
function App() {
  const [count, setCount] = React.useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}
```

**Server-rendered HTML:**

```html
<button>Clicked 0 times</button>
```

After hydration, React attaches the `onClick` event listener. The DOM content remains, but now the button becomes fully interactive.

---

## How Reconciliation Works

React uses **reconciliation** to efficiently update the DOM:

* The **existing DOM** (from SSR) is compared with the **virtual DOM** generated on the client.
* React **only updates nodes that need changes**.
* This makes hydration fast and avoids unnecessary re-rendering.

---

## Hydration Mismatch Errors

A mismatch occurs if the server-rendered HTML **doesn’t match** what React expects on the client.

**What happens then:**

* React logs a **hydration mismatch warning/error**.
* It discards the affected DOM subtree.
* Re-renders that subtree entirely from client-side React.

**Important:** This **does not break the page**, but React has to do extra work.

**Common causes of mismatches:**

* Using random values or timestamps during SSR.
* Browser-specific APIs (`window`, `document`) in server code.
* Conditional rendering that differs between server and client.

```jsx
// Example causing mismatch
function App() {
  const random = Math.random(); // Different on server vs client
  return <div>{random}</div>;
}
```

---

## Summary

| Concept   | Behavior                                                                                                        |
| --------- | --------------------------------------------------------------------------------------------------------------- |
| CSR       | Renders entirely on the client; blank until JS runs; fully dynamic                                              |
| SSR       | Renders HTML on the server; fast initial load; static until JS runs                                             |
| Hydration | SSR + CSR; initial HTML visible instantly; JS attaches interactivity; reconciliation updates only what’s needed |

Hydration gives **fast page loads** without sacrificing **interactivity**, combining the strengths of both SSR and CSR.

