# MultiCLI 📁

A command-line toolkit built using Node.js for quick file-based tasks including word counting and managing a todo list. Ideal for lightweight automation and local productivity boosts.

## Description

This project contains two independent CLI tools:

Counter CLI : Counts the number of lines in a given file.

Todo CLI : Allows you to add, delete, and mark todo items stored in a JSON file (todos.json).

Each tool is modular and uses the commander package for command-line argument parsing.

# Getting Started with the CLI Tools

This module guides you through the dependencies, how to install them, and how to execute different commands available in the tools.

## Dependencies

### `Node.js`
Node.js is a JavaScript runtime built on Chrome's V8 engine, allowing you to run JavaScript server-side. It's essential for running the scripts.

### `Commander`
The Commander package is a lightweight yet powerful command-line argument parser for Node.js, enabling easy creation of CLI tools with descriptions, arguments, and options.

### `fs (File System)`
The built-in Node.js module used to interact with the file system (read/write files).

## Installing

* How/where to clone the repository:
```
git clone "https://github.com/dibyajyoti-ganguly/MutliCLI.git"
```

* Navigate into the folder:
```
cd MutliCLI
```

* Install dependencies:
```
npm install commander
```

## Available Scripts & Commands

Alternatively, you can also run "node 1.js -h" or "node 2.js -h" to list all the available commands that can be executed for that js file.

### `node 1.js count <filename>`

This command counts the number of lines in a specified file. Make sure to only use "1.js" in the command as it contains the code for the desired functionality.

### `node 2.js add <todo text>`

This command adds an item(object) to the current todos array. If the todos array is empty, this command will push the new object to the empty array.

### `node 2.js delete <todo text>`

This command checks if the entered text is present in any of the items in the todo. If yes, then it deleted the specific todo else, logs "Todo doesn't exist"

### `node 2.js mark <todo text>`

THis command finds the entered text in one of the objects in the todos array and adds a new key-value pair to that object ("status":"completed") i.e. marks it as done.

## Authors

Contributors names and contact info:

Dibyajyoti Ganguly : [@mrdibs7](https://x.com/mrdibs7)

