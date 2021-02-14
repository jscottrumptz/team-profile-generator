const inquirer = require('inquirer');
const Employee = require('./Employee');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');

class Questions {
    constructor() {
        this.manager;
        this.engineers = [];
        this.interns = [];
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
                message: "What is the manager's id?",
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
            //open employee menu
            this.employeeMenu()
        });
    }

    // a menu with the option to add an engineer, add an intern, or to finish building my team
    employeeMenu() {
        console.log(this.manager)
        // prompt user to add an engineer, add an intern, or to finish building
        inquirer
        .prompt({
            type: 'list',
            message: 'What would you like to do?',
            name: 'selection',
            choices: ['Add a new Engineer', 'Add a new Intern', 'Finish Team']
        })
        .then(({selection}) => {
            switch (selection) {
            case 'Add a new Engineer':
                this.addEngineer();
                break;
            case 'Add a new Intern':
                this.addIntern();
                break;
            case 'Finish Team':
                this.finishTeam();
                break;
            };
        });
    };

    // add engineer
    addEngineer() {
        // get engineer information
        inquirer
        .prompt([
            {
                type: 'text',
                name: 'name',
                message: "What is the engineer's name?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("The engineer's name is required.");
                        return false;
                    }
                }
            },
            {
                type: 'text',
                name: 'id',
                message: "What is the engineer's id?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("The engineer's id is required.");
                        return false;
                    }
                }
            },
            {
                type: 'text',
                name: 'email',
                message: "What is the engineer's email?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("The engineer's email is required.");
                        return false;
                    }
                }
            },
            {
                type: 'text',
                name: 'github',
                message: "What is the engineer's GitHub username?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("The engineer's GitHub username is required.");
                        return false;
                    }
                }
            }
        ])

        // destructure values from the prompt object
        .then(({name, id, email, github}) => {
            // add to engineers array
            this.engineers.push(new Engineer(name, id, email, github));

            console.log(this.engineers)
            //open employee menu
            this.employeeMenu()
        });
    }

    // add intern
    addIntern() {
        // get intern information
        inquirer
        .prompt([
            {
                type: 'text',
                name: 'name',
                message: "What is the intern's name?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("The intern's name is required.");
                        return false;
                    }
                }
            },
            {
                type: 'text',
                name: 'id',
                message: "What is the intern's id?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("The intern's id is required.");
                        return false;
                    }
                }
            },
            {
                type: 'text',
                name: 'email',
                message: "What is the intern's email?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("The intern's email is required.");
                        return false;
                    }
                }
            },
            {
                type: 'text',
                name: 'school',
                message: "What school does the intern attend?",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("The intern's school is required.");
                        return false;
                    }
                }
            }
        ])

        // destructure values from the prompt object
        .then(({name, id, email, school}) => {
            // add to engineers array
            this.interns.push(new Intern(name, id, email, school));

            console.log(this.interns)
            //open employee menu
            this.employeeMenu()
        });
    }

    // finish team
    finishTeam() {
        console.log('Finish Team')
    }
}

module.exports = Questions;