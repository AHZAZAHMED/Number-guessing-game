#! /usr/bin/env node
import inquirer from "inquirer";
let randomNumber = Math.floor(Math.random() * 10);
const answer = await inquirer.prompt([
    {
        name: "number",
        type: "number",
        message: "please guess the number between 1-10:",
    },
]);
if (answer.number === randomNumber) {
    console.log("Congratulation! You have guess the rigth number.");
}
else {
    console.log("you guess the wrong number");
}
