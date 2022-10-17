import inquirer from "inquirer";

async function mainFunc() {
    await inquirer
    .prompt([
      {
        type:"list",
        message:"Pick an operation",
        name:"OPERATION",
        choices:["+","-","*","\/"]
      }
    ])
    .then((answers) => {
        switch(answers.OPERATION)
        {
            case "+": 
                addFunc();
                break;
            case "-": 
                subFunc();
                break;
            case "*": 
                mulFunc();
                break;
            case "/": 
                divFunc();
                break;
        }
    });
}

mainFunc();
async function addFunc()
{
    let firstNum =await  enterNumFunc();
    let secondNum =await enterNumFunc();
    console.log("Sum is: ",(firstNum+secondNum));
}
async function subFunc()
{
    let firstNum =await  enterNumFunc();
    let secondNum =await enterNumFunc();
    console.log("Sub is: ",(firstNum-secondNum));
}
async function mulFunc()
{
    let firstNum =await  enterNumFunc();
    let secondNum =await enterNumFunc();
    console.log("Mult is: ",(firstNum*secondNum));
}
async function divFunc()
{
    let firstNum =await  enterNumFunc();
    let secondNum =await enterNumFunc();
    console.log("Div is: ",(firstNum/secondNum));
}
async function enterNumFunc()
{
    var num=0;
    await inquirer
    .prompt([
        {
            type: "input",
            message: "Please enter a number:",
            name: "NUM",
            validate: (answer) => {
              if (isNaN(answer)) {
                return "please enter a number";
              }
              return true;
            },
          }
    ])
    .then((answers) => {
        num= answers.NUM;
    });
    return Number(num);
}
