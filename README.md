# Dependency Injection Manager for JavaScript

Explanation from wikipedia:

> In software engineering, dependency injection is a design pattern in which an object or function receives other objects or functions that it depends on. A form of inversion of control, dependency injection aims to separate the concerns of constructing objects and using them, leading to loosely coupled programs.

## Execution

Run the main.js in VSCode with the [JS Repl](https://marketplace.visualstudio.com/items?itemName=achil.vscode-javascript-repl) extension for example.

## How the manager works

It stores a class reference and its arguments. Then creates an instance when requested. Notice the arguments are always the same, but the class instances are not, this is difference than a Singleton.

I added a random Id to each instance to demonstrate this.