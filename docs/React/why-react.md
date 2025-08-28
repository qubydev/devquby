---
title: Why React?
---

# What is React?

React is a JavaScript library that helps you build user interfaces for web applications more efficiently than traditional methods. Let's see a quick demonstration.

### 1. Traditional Method

```html
<body>
    <p id="my-text">Not Clicked</p>
    <button id="my-button">Change</button>

    <script>
        const myText = document.getElementById("my-text");
        const myButton = document.getElementById("my-button");

        myButton.addEventListener('click', () => {
            myText.innerHTML = 'Clicked!';
        });
    </script>
</body>
````

While this approach works, you have to manually keep track of the IDs of each element you want to manipulate. On a large web page, this can quickly become overwhelming. React offers a more structured and efficient way to handle UI updates.

### 2. React Method

```jsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
    const [text, setText] = useState("Not Clicked");

    return (
        <div>
            <p>{text}</p>
            <button onClick={() => setText("Clicked!")}>Change</button>
        </div>
    );
}
```
:::info
You don't need to worry about the code above, and you don't need to understand it. I'm here to help you—just know this is what React code looks like.
:::

You would almost never (except some special cases) need to keep track of the DOM elements with their id in react.

There is a lot other benifits of using react and we will discuss about everything later on this tutorial, but for now let me show you another really exteresting feature of react.

## React components
You build your own components in react! and then use it as you would have done in plain html.

### 1. Traditional Method
let's say you have a button

```html
<button class="button button-primary button-lg button-outlined">Fancy Button</button>
<!-- If you are familiar with bootstrap or tailwind css libraries you probably know these classes, don't worry if you don't -->
```
Now, how are you going to use this button if multiple place in your page?

```html
<p>check out my fancy button</p>
<button class="button button-primary button-lg button-outlined">Fancy Button</button>

<form>
    <h1>fancy button inside a form</p>
    <button class="button button-primary button-lg button-outlined">Fancy Button</button>
</form>
```

and you keeps repeatinh this everywhere.
But how do we do this in react? let me show you

### 2. React way
Make your own component
```jsx
function FancyButton({children}) {
    return <button className="button button-primary button-lg button-outlined">{children}</button>
}
```

Now you are free to use it anywhere as you would have used a `<button>` tag in your webpage.
```jsx
<p>check out my fancy button</p>
<FancyButton>Fancy Button</FancyButton>

<form>
    <h1>fancy button inside a form</p>
    <FancyButton>Fancy Button</FancyButton>
</form>
```

