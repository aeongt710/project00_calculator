"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
function mainFunc() {
    return __awaiter(this, void 0, void 0, function* () {
        yield inquirer_1.default
            .prompt([
            {
                type: "list",
                message: "Pick an operation",
                name: "OPERATION",
                choices: ["+", "-", "*", "\/"]
            }
        ])
            .then((answers) => {
            switch (answers.OPERATION) {
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
    });
}
mainFunc();
function addFunc() {
    return __awaiter(this, void 0, void 0, function* () {
        let firstNum = yield enterNumFunc();
        let secondNum = yield enterNumFunc();
        console.log("Sum is: ", (firstNum + secondNum));
    });
}
function subFunc() {
    return __awaiter(this, void 0, void 0, function* () {
        let firstNum = yield enterNumFunc();
        let secondNum = yield enterNumFunc();
        console.log("Sub is: ", (firstNum - secondNum));
    });
}
function mulFunc() {
    return __awaiter(this, void 0, void 0, function* () {
        let firstNum = yield enterNumFunc();
        let secondNum = yield enterNumFunc();
        console.log("Mult is: ", (firstNum * secondNum));
    });
}
function divFunc() {
    return __awaiter(this, void 0, void 0, function* () {
        let firstNum = yield enterNumFunc();
        let secondNum = yield enterNumFunc();
        let result = firstNum + secondNum;
        console.log("Div is: ", (firstNum / secondNum));
    });
}
function enterNumFunc() {
    return __awaiter(this, void 0, void 0, function* () {
        var num = 0;
        yield inquirer_1.default
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
            num = answers.NUM;
        });
        return Number(num);
    });
}
//# sourceMappingURL=app.js.map