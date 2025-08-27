---
title: Introduction
---

**HTML** is the standard markup language used to create web pages.

---

## What is HTML?

- **HTML** stands for **HyperText Markup Language**.
- It is the standard language for building web pages.
- HTML describes the **structure** of a webpage.
- It consists of **elements** that tell the browser how to display content.
- HTML elements label pieces of content such as:
  - **Headings**
  - **Paragraphs**
  - **Links**
  - **Images**, etc.

---

## A Simple HTML Document

### Example:

```html
<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html>
````

---

### Example Explained

* `<!DOCTYPE html>` declares the document as HTML5.
* `<html>` is the root element of an HTML page.
* `<head>` contains meta information about the document.
* `<title>` specifies the page title (displayed in the browser tab).
* `<body>` contains the visible content:

  * `<h1>` defines a main heading.
  * `<p>` defines a paragraph.

---

## What is an HTML Element?

An **HTML element** is defined by:

```
<start-tag> content </end-tag>
```

For example:

```html
<h1>My First Heading</h1>
<p>My first paragraph.</p>
```

| Start Tag | Content             | End Tag |
| --------- | ------------------- | ------- |
| `<h1>`    | My First Heading    | `</h1>` |
| `<p>`     | My first paragraph. | `</p>`  |
| `<br>`    | none                | none    |

**Note:** Some elements (like `<br>`) are **empty elements** and have no end tag.

---

## How Browsers Work

Web browsers (Chrome, Firefox, Safari, Edge) read HTML and render the content visually.
**HTML tags are not displayed** by the browser—they are interpreted to display content correctly.

---

## HTML Page Structure

Below is a visualization of a basic HTML page:

```html
<html>
<head>
<title>Page Title</title>
</head>
<body>
<h1>This is a heading</h1>
<p>This is a paragraph.</p>
<p>This is another paragraph.</p>
</body>
</html>
```

**Note:**

* Content inside `<body>` is displayed in the browser window.
* The text inside `<title>` appears in the browser tab.

---

## HTML History

| Year | Version                                 |
| ---- | --------------------------------------- |
| 1989 | Tim Berners-Lee invented WWW            |
| 1991 | Tim Berners-Lee invented HTML           |
| 1993 | Dave Raggett drafted HTML+              |
| 1995 | HTML 2.0 defined by HTML Working Group  |
| 1997 | W3C Recommendation: HTML 3.2            |
| 1999 | W3C Recommendation: HTML 4.01           |
| 2000 | W3C Recommendation: XHTML 1.0           |
| 2008 | WHATWG HTML5 First Public Draft         |
| 2012 | WHATWG HTML5 Living Standard            |
| 2014 | W3C Recommendation: HTML5               |
| 2016 | W3C Candidate Recommendation: HTML 5.1  |
| 2017 | W3C Recommendation: HTML5.1 2nd Edition |
| 2017 | W3C Recommendation: HTML5.2             |

This guide follows the **latest HTML5 standard**.
