const inquirer = require('inquirer');
const generateHTML = require('../src/generateHTML');
const writeToFile = require('../src/writeToFile');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');

class TeamBuilder {
    constructor() {
        this.manager;
        this.employees = [];
        // this.interns = [];
    }

    // initialize questions
    initializeTeamBuilder() {

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

            //open employee menu
            this.employeeMenu()
        });
    }

    // a menu with the option to add an engineer, add an intern, or to finish building my team
    employeeMenu() {
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
            
            // add to employees array
            this.employees.push(new Engineer(name, id, email, github));

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

            // add to employees array
            this.employees.push(new Intern(name, id, email, school));

            //open employee menu
            this.employeeMenu()
        });
    }

    // finish team
    finishTeam() {
        // pass the information to generateHTML and write the HTML file
        writeToFile(generateHTML(this))
        .catch(err => {
            console.log(err);
        });
    }
}

module.exports = TeamBuilder;