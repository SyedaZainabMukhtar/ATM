import inquirer from "inquirer";
import chalk from "chalk";
let myBalance = 5000;
let myPin = 1705;
console.log(chalk.bgBlue("\n \t Welcome to Zainab's-ATM Machine \n \t"));
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: chalk.bgGray("Enter your pin"),
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log(chalk.bgGreenBright("\nCorrect pin code, Login successfully!\n"));
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "select an operation:",
            choices: ["withdraw amount", "check Balance"],
        },
    ]);
    if (operationAns.operation === "withdraw amount") {
        let withdrawAns = await inquirer.prompt([
            {
                name: "withdrawMethod",
                type: "list",
                message: "Select a withdrawal method:",
                choices: ["Fast Cash", "Enter Amount"]
            }
        ]);
        if (withdrawAns.withdrawMethod === "Fast Cash") {
            let FastCashAns = await inquirer.prompt([
                {
                    name: "fastcash",
                    type: "list",
                    message: "Select amount:",
                    choices: [5000, 10000, 15000, 20000]
                }
            ]);
            if (FastCashAns.fastcash > myBalance) {
                console.log(chalk.bgRed("Insufficient Balance"));
            }
            else {
                myBalance -= FastCashAns.fastcash;
                console.log(`${FastCashAns.fastcash} withdraw successfully`);
                console.log(`Your remaining Balance is ${myBalance}`);
            }
        }
        else if (withdrawAns.withdrawMethod === "Enter Amount") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: "Enter the amount to withdraw:",
                }
            ]);
            if (amountAns.amount > myBalance) {
                console.log(chalk.bgRed("Insufficient Balance"));
            }
            else {
                myBalance -= amountAns.amount;
                console.log(`${amountAns.amount} withdraw successfuly`);
                console.log(`your remaining balance is ${myBalance}`);
            }
        }
    }
    else if (operationAns.operation === "check Balance") {
        console.log(`your account balance is ${myBalance}`);
    }
}
else {
    console.log(chalk.bgRedBright("Incorrect pin, Try again :( "));
}
