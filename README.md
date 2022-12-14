# Restaurant List

This project provide user can search restaurant list by name or category.

## Table of contents

- [Overview](#Overview)
- [Installation](#Installation)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

Users should be able to:

- View the restaurant users like.
- See restaurant details, like category, phone number, address and rate.
- Search by restaurant name or category.

## Installation

1. Before start, make sure you already install Express and npm
```
git clone https://github.com/qweb321/Restaurant-List.git
```
2. In local side, run npm install
3. After installation finished, run
```
npm run start
```
4. If terminal show the sentence below, means run successfully and click the url
```
app is listening in http://localhost:3000
```
5. If you want to stop
```
ctrl + C
```

## My process

### Built with

- Node.js
- Express
- Express-Handlebars
- Javascript
- CSS

### What I learned

In this project it's my first time to set up routes by express framework.

- Fist we need to import modules and data we need.
  The default for `require()` is module. If there is a `./` inside, js would regard as a route.

```javascript
const express = require("express");
const exhpbs = require("express-handlebars");
const restaurantList = require("./restaurant.json");
```

- Use Handlebars to build template engine

```javascript
app.engine("handlebars", exhpbs.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
```

- Setting routes by `app.get()`

In Handlebars I learn a way to create repeat element.  
It likes `for...loop` in JavaScript. We typing code inside `{{#each}}..{{/each}}`.

```handlebars
{{#each}}
  <a href="/restaurants/{{this.id}}" class="text-secondary">
    <div class="card mb-3">...</div>
  </a>
{{/each}}
```

## Author

- Website - [Isis Lin](https://github.com/qweb321)
