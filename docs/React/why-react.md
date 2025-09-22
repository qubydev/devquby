---
id: why-react
title: Why React?
sidebar_position: 1
---

# Why React?

:::tip What is React?
React is a **JavaScript library** for building user interfaces and **not a framework**. It is maintained by Meta (Facebook) and a community of individual developers and companies.

📚 Learn more about the difference between a library and a framework [here](https://www.youtube.com/watch?v=9Uz3gZ_vQyE).
:::

## The Fundamental Question

Your first question before learning any new library should always be:

**"Why do I even need this library? Why not just Vanilla JavaScript?"**

Let's explore the problems with Vanilla JavaScript first and see how React solves them.


## The Problems with Vanilla JavaScript

Let's examine these issues through a practical example - building a simple todo app.

### Example: Todo App in Vanilla JavaScript

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo App - Vanilla JS</title>
</head>
<body>
    <h1>Simple Todo App</h1>
    <input type="text" id="todo-input" placeholder="Enter todo">
    <button id="add-todo">Add Todo</button>

    <table id="todo-table">
        <thead>
            <tr>
                <th>Todo</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody id="todo-body">
        </tbody>
    </table>

    <script>
        const todoInput = document.getElementById('todo-input');
        const addTodoButton = document.getElementById('add-todo');
        const todoBody = document.getElementById('todo-body');

        function addTodo(todo) {
            const row = document.createElement('tr');
            const todoCell = document.createElement('td');
            todoCell.textContent = todo;
            
            const actionCell = document.createElement('td');
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.onclick = () => {
                todoBody.removeChild(row);
            };
            
            actionCell.appendChild(deleteButton);
            row.appendChild(todoCell);
            row.appendChild(actionCell);
            todoBody.appendChild(row);
        }

        addTodoButton.onclick = () => {
            const todoText = todoInput.value.trim();
            if (todoText) {
                addTodo(todoText);
                todoInput.value = '';
            }
        };
    </script>
</body>
</html>
```

Now, let's break down the major problems with this approach:

### 1. ⚙️ Imperative DOM Manipulation

**The Problem:** Each time you create, update, or delete a todo, you must manually manipulate the DOM using methods like `createElement`, `appendChild`, and `removeChild`. As applications grow, this becomes messy and hard to maintain.

**The React Solution:** Instead of imperatively manipulating the DOM, you declare an array of todos (state) and render from that array:

```jsx
// Declarative approach in React
const todos = ['Learn React', 'Build a React App'];

// Simple rendering
<ul>
  {todos.map((todo, index) => (
    <li key={index}>{todo}</li>
  ))}
</ul>
```

**State Management:** All you do is manipulate the array, and React handles DOM updates:

```jsx
// Adding a todo
setTodos([...todos, 'New Todo']);

// Deleting a todo
setTodos(todos.filter((todo, index) => index !== todoIndex));

// Updating a todo
setTodos(todos.map((todo, index) => 
  index === todoIndex ? 'Updated Todo' : todo
));
```

### Same Todo App in React

Let's see how much cleaner the same functionality looks in React:

```jsx
import React, { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input.trim()]);
      setInput("");
    }
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Simple Todo App</h1>
      <input
        type="text"
        placeholder="Enter todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>

      <table>
        <thead>
          <tr>
            <th>Todo</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo}</td>
              <td>
                <button onClick={() => deleteTodo(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
```

:::note Try it yourself!
You can run the above React code in [CodeSandbox](https://codesandbox.io/s/new) or [StackBlitz](https://stackblitz.com/fork/react).
:::

### 2. 🎯 Maintaining Selectors

**The Problem:** In Vanilla JS, you must maintain selectors like `todo-input`, `add-todo`, `todo-body` to access DOM elements. For larger applications, this becomes a nightmare.

**The React Solution:** No need to maintain selectors! React components manage their own state internally.

:::note Accessing DOM Elements in React
You might ask: "How do I access DOM elements in React then?" 

While React handles most cases, there are times when you need direct DOM access. React provides **Refs** for this purpose (you'll learn about this later).
:::

### 3. 🔄 Reusability

**The Problem:** In Vanilla JS, creating another identical todo list means copying and pasting the entire code and changing element IDs. Any updates require changes in multiple places.

**The React Solution:** **Components!** Define once, use everywhere.

#### Example: 5 Todo Lists in React

```jsx
import React, { useState } from "react";

// Reusable TodoApp component
function TodoApp({ title = "Simple Todo App" }) {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input.trim()]);
      setInput("");
    }
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div style={{ margin: '20px', padding: '20px', border: '1px solid #ccc' }}>
      <h2>{title}</h2>
      <input
        type="text"
        placeholder="Enter todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>

      <table style={{ marginTop: '10px', width: '100%' }}>
        <thead>
          <tr>
            <th>Todo</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo}</td>
              <td>
                <button onClick={() => deleteTodo(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Main App component using 5 TodoApp instances
export default function App() {
  return (
    <>
      <TodoApp title="Work Tasks" />
      <TodoApp title="Personal Tasks" />
      <TodoApp title="Shopping List" />
      <TodoApp title="Study Plan" />
      <TodoApp title="Weekend Goals" />
    </>
  );
}
```

**As simple as that!** ✨

:::tip Component Hierarchy
Everything in React is a **component**. Each component can have one or more child components.

In the above example, `App` is the parent component with 5 child components of type `TodoApp`.
:::

:::info React Fragments
The `<></>` syntax is called a **Fragment**. It allows you to group multiple elements without adding an extra node to the DOM. You could use a `<div>` instead, but Fragments keep your DOM cleaner.
:::

### 4. ⚡ Performance Optimization

**The Problem:** In Vanilla JS, each add/delete operation directly manipulates the DOM. DOM manipulation is expensive and can cause performance issues in larger applications.

**The React Solution:** React uses a **Virtual DOM** to minimize direct manipulations:

1. **Virtual DOM**: React creates a virtual representation of the DOM in memory
2. **Diffing**: When state changes, React compares the new virtual DOM with the previous one
3. **Reconciliation**: Only the parts that actually changed get updated in the real DOM

This leads to significant performance improvements, especially in complex applications.

### 5. 🧩 Modularization and Maintainability

**The Problem:** Vanilla JS code becomes verbose and error-prone as applications grow. Everything is in one place, making it hard to maintain.

**The React Solution:** Break applications into smaller, focused components. Each component has a single responsibility.

#### Production React App Structure

```text
my-react-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header/
│   │   │   ├── Header.js
│   │   │   ├── Header.css
│   │   │   └── Header.test.js
│   │   ├── Footer/
│   │   │   ├── Footer.js
│   │   │   └── Footer.css
│   │   ├── Sidebar/
│   │   │   ├── Sidebar.js
│   │   │   └── Sidebar.css
│   │   └── MainContent/
│   │       ├── MainContent.js
│   │       └── MainContent.css
│   ├── pages/
│   │   ├── Home.js
│   │   ├── About.js
│   │   └── Contact.js
│   ├── hooks/
│   │   └── useCustomHook.js
│   ├── utils/
│   │   └── helpers.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

**Benefits:**
- 🎯 **Single Responsibility**: Each component does one thing well
- 🔄 **Reusability**: Components can be used across different pages
- 🧪 **Testability**: Each component can be tested in isolation
- 👥 **Team Collaboration**: Different developers can work on different components

## 🔍 Important Reality Check

:::warning React vs Vanilla JavaScript Performance
React is **never more optimized** than well-written Vanilla JavaScript in terms of raw performance. React adds an abstraction layer that has overhead.

**So why use React?**
- 🛠️ **Developer Experience**: Makes complex UIs easier to build and maintain
- 📝 **Declarative Approach**: Describe what you want, not how to achieve it
- 🏗️ **Better Architecture**: Encourages component-based thinking
- ⚡ **Good Enough Performance**: For most applications, the performance trade-off is worth it
:::

### The Compilation Reality

Your `JSX` code doesn't make sense to web browsers. After compilation, it all becomes Vanilla JavaScript anyway.

```jsx
// What you write (JSX)
const element = <h1>Hello, World!</h1>;

// What the browser actually runs (compiled JavaScript)
const element = React.createElement('h1', null, 'Hello, World!');
```

## 🎯 Conclusion

At the end of the day, **everything boils down to HTML, CSS, and Vanilla JavaScript**. Web browsers only understand these three technologies.

React (and any other framework/library) is just a tool that helps you:
- ✅ Write more maintainable code
- ✅ Build complex UIs with less effort  
- ✅ Organize your code better
- ✅ Collaborate more effectively with teams
- ✅ Focus on business logic instead of DOM manipulation

:::tip What's Next?
In the next lesson, I'll show you how React is not actually magic - it's just a clever JavaScript library. You might even be inspired to build your own UI library someday! 🚀
:::

---

### 📚 Key Takeaways

| Vanilla JavaScript | React |
|-------------------|-------|
| ❌ Imperative DOM manipulation | ✅ Declarative UI description |
| ❌ Manual selector management | ✅ Component-based architecture |
| ❌ Copy-paste for reusability | ✅ Reusable components |
| ❌ Performance optimization is manual | ✅ Virtual DOM optimization |
| ❌ Monolithic code structure | ✅ Modular, maintainable components |