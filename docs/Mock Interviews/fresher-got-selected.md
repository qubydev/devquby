---
title: Fresher Got Selected as Frontend Engineer
---

:::warning
The following conversation is a summarized and refined version of the interview conducted by **Anurag Singh ProCodrr** in [this video](https://www.youtube.com/watch?v=tw5SybhCav4). While it may not reflect the exact wording, it accurately represents the essence of the conversation.
:::

## Details

- **Candidate Name:** Shya D
- **Education:** B.Tech (Information Technology), 2021 – Walchand College of Engineering, Sangli.
- **Location:** Pune
- **Experience:** Graduated, learning web development for 4–5 months.
- **Skills:** HTML, CSS, JavaScript, React, MongoDB, Node.js (MERN stack).
- **Interviewer:** [Anurag Singh ProCodrr](https://www.youtube.com/@procodrr)

---

## Introduction (skip)

**Interviewer:** Okay, just introduce yourself and then we'll move to the questions.

**Shyam D:** Thanks for giving me the opportunity, sir. My name is Shyam D and I am from Pune. I have done my B.Tech in Information Technology in 2021 from the Walchand College of Engineering, Sangli. Currently, I'm looking for a job.

**Interviewer:** How long have you been learning web development?

**Shyam D:** For the past four to five months I have been working on web development.

**Interviewer:** What are all the technologies you have learned so far?

**Shyam D:** I'm working on the MERN stack. I have learned HTML, CSS, JavaScript, and React on the front end, and some back end like MongoDB and Node.js.

**Interviewer:** This interview is for a front-end role, so we'll mainly focus on HTML, CSS, JavaScript, and React.

**Shyam D:** Yes, sir.

---

## HTML Questions

**Interviewer:** What is HTML?

**Shyam D:** HTML is a Hypertext Markup Language which is basically used for describing the content and the structure of a web page.

**Interviewer:** What are semantic tags in HTML?

**Shyam D:** Semantic tags describe their meaning to the browser or the developer. For example, the `table` tag shows its meaning.

:::tip[IMPROVED]
A better answer would include specific benefits: "Semantic tags like `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, and `<footer>` provide meaning to both browsers and developers. They improve accessibility for screen readers, help with SEO by giving search engines better context about content structure, and make code more maintainable and readable."
:::

**Interviewer:** Can you give me four examples, apart from `table`?

**Shyam D:** `article`, `footer`, `header`.

:::tip[IMPROVED]
Could provide more examples and explain their purpose: "`<article>` for standalone content, `<section>` for thematic groupings, `<nav>` for navigation links, `<aside>` for sidebar content, `<main>` for primary content, `<time>` for dates/times."
:::

**Interviewer:** Apart from providing meaning, does it help in any other way?

**Shyam D:** In search engine optimization also it helps.

**Interviewer:** What is the difference between a tag and an element in HTML?

**Shyam D:** An element is a tag with its content included. A tag is just the starting and the ending tag, and the content with the tag is called the element.

**Interviewer:** What are attributes in HTML?

**Shyam D:** Attributes provide additional information about the element or the tag, and they are included in the opening tag.

**Interviewer:** What is the difference between `div` and `span`?

**Shyam D:** `div` is a block-level element and `span` is an inline element. A block-level element takes the full width of its parent, and an inline element takes the width of its content.

**Interviewer:** Can you give me some examples of inline elements?

**Shyam D:** For example, the `span` tag, then the `image` tag.

:::tip[IMPROVED]
Should include more examples: "`<span>`, `<a>`, `<strong>`, `<em>`, `<code>`, `<img>`, `<input>`, `<button>`. Note that `<img>` is a replaced inline element."
:::

**Interviewer:** Apart from the width difference, is there any other difference?

**Shyam D:** Block elements always start on a new line. Inline elements can be inside text or anything.

**Interviewer:** Can we give height and width to inline elements?

**Shyam D:** No, we cannot.

**Interviewer:** But on an `image` tag, we can give height and width. The image is an inline element, right? How is that possible?

**Shyam D:** The image itself has its own attributes like width and height. Even using CSS it works. I'm not sure how.

:::tip[IMPROVED]
Should distinguish between replaced and non-replaced inline elements: "Images are 'replaced inline elements' that have intrinsic dimensions and can accept width/height properties. Non-replaced inline elements like `<span>` or `<a>` cannot have their dimensions modified via CSS."
:::

**Interviewer:** Inline elements are of two types: replaced and non-replaced. Replaced inline elements, like `image`, `video`, or `iframe`, are loaded through a URL. On these replaced elements, we can give height and width.

**Shyam D:** Thank you, sir. I didn't know this.

**Interviewer:** Do you know the difference between `canvas` and `svg` in HTML?

**Shyam D:** I just know that they are used for graphics. I haven't used them.

:::tip[IMPROVED]
Should provide basic differences: "Both create graphics but `<canvas>` is raster-based (pixel manipulation via JavaScript) good for complex animations/games, while `<svg>` is vector-based (XML markup) that's scalable and good for icons/simple graphics."
:::

---

## CSS Questions

**Interviewer:** What is the full form of CSS?

**Shyam D:** Cascading Style Sheets.

**Interviewer:** What does "cascading" mean?

**Shyam D:** In CSS, it means how the styles are applied to the elements. Suppose there are parent and child elements. If we apply a style to the parent, it may also apply to the child unless we specify a specific style for the child. It's the process or the priority in which styles are applied.

**Interviewer:** What is specificity?

**Shyam D:** Specificity is the priority given to the selectors. The selector with higher specificity is applied first.

**Interviewer:** What is the default value of the `position` property?

**Shyam D:** The default value is `static`.

**Interviewer:** What is the difference between `position: relative` and `position: absolute`?

**Shyam D:** Relative position is relative to its normal static position. Absolute is positioned according to its ancestor element.

**Interviewer:** What is Flexbox?

**Shyam D:** Flexbox is a layout system that we use in CSS for defining the layout of a web page.

:::tip[IMPROVED]
Could be more specific: "Flexbox is a one-dimensional layout method that allows flexible arrangement of items in a container. It provides control over alignment, distribution, and sizing of flex items along the main axis (horizontal by default) and cross axis (vertical)."
:::

**Interviewer:** If we have a container `div` with `display: flex` and inside two `span` elements (which are inline), if we give `height` and `width` to the `span`, will it work?

**Shyam D:** Yes, sir.

**Interviewer:** Why? A `span` is an inline element; it shouldn't work.

**Shyam D:** Sorry, sir. I'm not sure.

:::tip[IMPROVED]
Should know this flexbox concept: "When a parent has `display: flex`, all direct children become 'flex items' and behave like block-level elements regardless of their original display type. This allows setting width, height, margin, and padding on inline elements."
:::

**Interviewer:** When we give `display: flex` on the parent, all its children automatically become block-level elements. So, we can give them `height` and `width`.

**Interviewer:** What is the Box Model in CSS?

**Shyam D:** The Box Model is the concept that every element in HTML includes content, padding, border, and margin. This is called the Box Model.

**Interviewer:** There is a property called `box-sizing: border-box`. Do you know what the default value of `box-sizing` is?

**Shyam D:** It's `content-box`.

**Interviewer:** What is the difference between `content-box` and `border-box`?

**Shyam D:** In `content-box`, the total width is calculated by including the content, padding, and border. In `border-box`, the total width includes the content, padding, and border within the specified width.

---

## JavaScript Questions

**Interviewer:** Why do we need JavaScript?

**Shyam D:** JavaScript makes web pages interactive and is used for dynamic content.

**Interviewer:** What are the different data types in JavaScript?

**Shyam D:** In JavaScript, there are eight data types. Seven are primitive: number, string, symbol, bigint, undefined, null, and boolean. One is non-primitive: object.

**Interviewer:** Why do we have these two categories? What is the difference?

**Shyam D:** Non-primitives are reference types; we cannot directly change their values.

:::tip[IMPROVED]
More accurate explanation: "Primitive types are stored by value and are immutable (string, number, boolean, undefined, null, symbol, bigint). Non-primitive types (objects, arrays, functions) are stored by reference and are mutable - we can modify their properties/elements."
:::

**Interviewer:** In how many ways can we create a variable in JavaScript?

**Shyam D:** Three ways: using `var`, `let`, and `const`.

**Interviewer:** What is the difference between `let` and `var`?

**Shyam D:** Using `var`, we can redeclare the variable and it has a global scope if used outside a function. With `let`, we cannot redeclare it but we can reassign its value, and it has block scope.

**Interviewer:** What is the difference between a parameter and an argument?

**Shyam D:** Parameters are passed at the time of function definition when we are writing the function. Arguments are the actual values that we pass when we call the function.

**Interviewer:** What is the difference between the `slice` and `splice` array methods?

**Shyam D:** `slice` is used to take elements from an array by providing a start and end index. I'm not sure about the `splice` method, sir.

:::tip[IMPROVED]
Should know both methods: "`slice(start, end)` returns a shallow copy without modifying original array. `splice(start, deleteCount, ...items)` modifies the original array by removing/adding elements and returns the removed elements."
:::

**Interviewer:** Why do we use the `map` method in an array?

**Shyam D:** We use the `map` method when we want to transform an array.

**Interviewer:** What are Promises in JavaScript?

**Shyam D:** A Promise is an object used as a solution to the callback hell problem. It returns a promise.

:::tip[IMPROVED]
More comprehensive explanation: "A Promise is an object representing the eventual completion or failure of an asynchronous operation. It has three states: pending, fulfilled, or rejected. Promises can be chained using `.then()`, `.catch()`, and `.finally()` methods, solving callback hell by providing cleaner async code."
:::

**Interviewer:** What is the DOM?

**Shyam D:** The DOM is a tree-like structure made by the browser. JavaScript uses the DOM to manipulate elements in the HTML.

**Interviewer:** Do you know about event bubbling and event capturing?

**Shyam D:** No, sir.

:::tip[IMPROVED]
Should understand event flow: "Event bubbling: events propagate from target element up to document root. Event capturing: events propagate from document root down to target element. `addEventListener(event, handler, useCapture)` - set useCapture to true for capturing phase."
:::

---

## React Questions

**Interviewer:** Why do we need React? Why can't we build everything using JavaScript?

**Shyam D:** With JavaScript, you have to select every element multiple times, so when there is a big application it becomes very difficult to manage and maintain that code. React has a modular approach; you can create components and it becomes very easy to manage every part of the code.

**Interviewer:** React is very efficient in updating the DOM. It has a virtual DOM which it updates first, and then only the updated part is reflected in the actual DOM.

**Shyam D:** Yes, sir.

**Interviewer:** Do you know the difference between declarative and imperative programming?

**Shyam D:** Declarative means the code becomes very easy to manage.

:::tip[IMPROVED]
Should explain the core difference: "Declarative programming describes 'what' you want to achieve (React - you describe the UI state). Imperative programming describes 'how' to achieve it (vanilla JS - you manually manipulate DOM step by step)."
:::

**Interviewer:** Declarative means we tell our component what the state is; we update the state and don't care about the UI—it will automatically update. In imperative programming, we have to update the DOM every time we update a variable. The code becomes almost double.

**Interviewer:** What is the concept of state in React?

**Shyam D:** State is like a dynamic aspect of a component, a variable that we want to keep track of and change with some event.

**Interviewer:** Why don't we use normal variables? Why do we use React state?

**Shyam D:** In React, we cannot directly update a variable with an event; we have to use state hooks. If we update a normal variable directly, it doesn't update the UI.

---

## Coding Exercise & Practical

*The interview included a practical coding session where the candidate was asked to:*
*   Predict outputs of various JavaScript code snippets involving hoisting, the event loop, async/await, and object references.
*   Perform array manipulations using `filter` and `map`.
*   Capitalize the first letter of each word in a string.
*   Build a simple Todo app in React with add functionality within a time limit.

---

## Feedback

**Interviewer:** How many points would you give yourself out of 10?

**Shyam D:** Four, sir.

**Interviewer:** As a fresher, I would select you for this round. I will give you 7-7.5 points, considering the pressure. You performed very well. Your answers were to the point. You need a lot of practice, especially in building projects. Your concepts are clear, but you need to apply them by making a lot of projects. You don't need to watch a lot of videos; just build.

**Shyam D:** Thank you, sir. This was my first interview. I will work on my logic and practice more.