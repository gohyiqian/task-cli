import inquirer from "inquirer";

async function input() {
  const answers = await inquirer.prompt([
    { name: "name", message: "Enter name of the task:", type: "input" },
    { name: "detail", message: "Enter the task details:", type: "input" },
  ]);
  return answers;
}

const output = await input();
console.log(output);
