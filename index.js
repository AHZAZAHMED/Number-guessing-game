#! /usr/bin/env node
import inquirer from "inquirer";
let randomNumber = Math.floor(Math.random() * 10);
console.log(`you have three chance. `);
for (let i = 0; i < 3; i++) {
    const answer = await inquirer.prompt([
        {
            message: "please guess the number between 1-10 :",
            type: "number",
            name: "number",
        },
    ]);
    if (answer.number === randomNumber) {
        console.log("Congratulation! You have guess the rigth number.");
        break;
    }
    else {
        console.log("you guess the wrong number");
    }
}
