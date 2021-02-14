const inquirer = require('inquirer');
const Employee = require('./Employee');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');

class Questions {
    constructor() {
        this.manager;
        this.engineer = [];
        this.intern = [];
        this.role;
    }

    // initialize questions
    initializeQuestions() {

        // get manager information
        inquirer
        .prompt([
            {
                type: 'text',
                name: 'name',
                message: "What is the manager's name?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("A manager's name is required.");
                        return false;
                    }
                }
            },
            {
                type: 'text',
                name: 'id',
                message: "What is the Manager's id?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("The manager's id is required.");
                        return false;
                    }
                }
            },
            {
                type: 'text',
                name: 'email',
                message: "What is the manager's email?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("The manager's email is required.");
                        return false;
                    }
                }
            },
            {
                type: 'text',
                name: 'officeNumber',
                message: "What is the manager's office number?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("The manager's office number is required.");
                        return false;
                    }
                }
            }
        ])

        // destructure values from the prompt object
        .then(({name, id, email, officeNumber}) => {
            this.manager = new Manager(name, id, email, officeNumber);

            console.log(this.manager)
            //open employeee meanu
            this.employeeMenu()
        });
    }

    // a menu with the option to add an engineer, add an intern, or to finish building my team
    employeeMenu() {
        console.log(this.manager)
    }

    // add engineer
    addEngineer() {

    }

    // add intern
    addIntern() {

    }

    // finish team
    finishTeam() {

    }
}

module.exports = Questions;