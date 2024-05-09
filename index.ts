#! /usr/bin/env node
import inquirer from "inquirer";

let randomNumber = Math.floor(Math.random() * 10);
console.log(randomNumber);
console.log(`you have three chance. 
please guess the number between 1-10`);
for (let i = 0; i <= 3; i++) {
  const answer = await inquirer.prompt([
    {
      name: "number",
      type: "number",
      message: "",
    },
  ]);

  if (answer.number === randomNumber) {
    console.log("Congratulation! You have guess the rigth number.");
    break;
  } else {
    console.log("you guess the wrong number");
  }
}
