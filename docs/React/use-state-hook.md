---
title: useState hook
---

`useState` is one of the most widely used and essential hooks in React.

:::note
Originally, React relied heavily on class-based components, as functional components were quite limited and lacked the ability to manage state.
Fun fact is that functional components were called **Statelss components** in that time.
:::

The introduction of the `useState` hook changed everything by allowing functional components to maintain state. This innovation played a key role in the shift from class-based components to functional components and has been central to React’s evolution.

### But why do we even need a state variable?

Instead you should ask **What happens if I do not use state variable?**. let's try and find this out.

```jsx
export default function App() {
    let name = "Quby";

    const changeName = () => {
        name = "Dev Quby";
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button>Change Name</button>
        </div>
    )
}
```

You pressed the button but nothing really happened right? Let's see why.

React is nothing magical, all it does is runs your component function and renders the returned html to the DOM. But at the same time it also keeps of some special triggers that tells react to just re run the function something has changed (that is what we call a re-render). 

When you change the value of a normal variable, React has no idea that something has changed and it does not re run the function. So the DOM remains unchanged.

But if we use a state variable instead?

```jsx
import { useState } from "react";

export default function App() {
    const [name, setName] = useState("Quby");

    const changeName = () => {
        setName("Dev Quby");
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={changeName}>Change Name</button>
        </div>
    )
}
```
Now when you press the button, the name changes to "Dev Quby".

Here, we used the `useState` hook to create a state variable `name` and a function `setName` to update it. Or simply leting react know that we have a variable named `name` and we want you to re run the function whenever it changes. And the function `setName` is that special trigger we talked erlier.


**Do you know what happens if you click the button again? Does it re run?**

The answer is **No**. React is very smart, it compares the previous value of `name` with the new value and re runs only if the value has actually changed. This is called **State Batching** and it helps in optimizing performance by avoiding unnecessary re-renders.





