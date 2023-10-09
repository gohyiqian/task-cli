# Task Manager Command Line Tool

[Reference](https://www.freecodecamp.org/news/nodejs-tutorial-build-a-task-manager-cli-tool/)

- `commander`: This helps us to build the CLI tool.
- `chalk`: This makes messages in the terminal colorful and easy to read.
- `inquirer`: This lets us ask the user for input.
- `ora`: This makes the terminal show nice spinning animations.

## Set up

```bash
# create package.json
npm init --yes
# install dependencies
npm i commander inquirer chalk ora mongoose nanoid dotenv
```

## Update Package.json

```bash
# remove
"main": "index.js"
# add
"exports": "./index.js",
 "type": "module",
```

## Test the db

```bash
node ./db/connectDB.js
```

```bash
node ./commands/addTask.js
node ./commands/deleteTask.js
node ./commands/readTask.js
node ./commands/updateTask.js
```

## Save the CLI tool

Add bin property. The "bin" property in the package.json file enables you to specify commands that become globally accessible once your package is installed.

```bash
"bin": {
  "todo": "index.js"
}
```

You can start using the tool by installing it globally

```bash
npm i -g .
```

Here are commands you can use to operate the tool

```bash
# Create a new task
todo add
# Read all your pending tasks
todo read
# Update a specific task
todo update
# Delete a task
todo delete

# check version
todo --version
todo -V
# display help for commands
todo --help
todo -h
```
