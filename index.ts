#! /usr/bin/env node
import inquirer from "inquirer";


const randomnumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {name: "userguessnumber",
    type:"number",
    message:"please guess a number between 1-10:",
},
]);
console.log(answer)
if(answer.userguessnumber===randomnumber){
    console.log("congratulation!you gussed right number.")
}else{
    console.log("you gussed wrong number");
}