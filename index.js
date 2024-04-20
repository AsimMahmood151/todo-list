#! /usr/bin/env node
import inquirer from "inquirer";
let tasks = [];
let addCondition = true;
let showMenu = true;
console.log("*****   welcome to todo list   *****");
console.log("Hello, the tasks in hand are:", tasks);
while (showMenu && addCondition) {
    let todoAction = await inquirer.prompt({
        name: "action",
        type: "list",
        message: "Select what you want to Do",
        choices: ['Add Task', 'Remove Task', 'Close Todo Program'],
    });
    while (addCondition) {
        console.log("Tasks in Hand are:", tasks);
        if (todoAction.action === "Add Task") {
            let task = await inquirer.prompt([{
                    name: "addTask",
                    type: "input",
                    message: "Add Task:",
                },
                {
                    name: "addMore",
                    type: "confirm",
                    message: "Press Enetr if you want to add more tasks",
                    default: "false",
                }
            ]);
            //    console.log("Tasks in Hand are:",tasks);
            if (task.addTask) {
                //  addCondition=true;
                tasks.push(task.addTask);
                //console.log("Tasks in Hand are:",tasks);
            }
            if (!task.addMore) {
                addCondition = false;
            }
        }
    }
    while (showMenu && addCondition === false) {
        //console.log("Todo Tasks are:",tasks);
        let todoAction = await inquirer.prompt({
            name: "action",
            type: "list",
            message: "Select what you want to Do",
            choices: ['Remove Task', 'Close Todo Program'],
        });
        if (todoAction.action === "Remove Task") 
        // console.log("Tasks in Hand are:",tasks);
        {
            tasks.pop();
            console.log("Remaining Tasks are:", tasks);
        }
    }
}
