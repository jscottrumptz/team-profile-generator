const Engineer = require("../lib/Engineer");

getEmployees = function(employees) {
    // console.log(employees)
    // employees.forEach(element => {
    //     console.log(element.name);
    // });
    employees.forEach(employee => {
        switch (employee.constructor.name) {
            case 'Engineer':
                console.log(`Engineer: ${employee.getName()}`)
                console.log(`GitHub: ${employee.getGithub()}`)
                break;
            
            case 'Intern':
                console.log(`Intern: ${employee.getName()}`)
                console.log(`School: ${employee.getSchool()}`)
                break;
        }
        
    });
    return `${employees.map((employee)=> {
        if(employee.constructor.name === 'Engineer'){
            return `${employee.getGithub()}`
        } else {
            return `${employee.getSchool()}`
        }
    }).join('')}`
}

module.exports = data => {

    // destructure data based on property key names and dump the rest in project
    const { manager, employees } = data;

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${manager.getName()}'s Team</title>
    </head>
    <body>
        ${manager.name}
        ${getEmployees(employees)}
    </body>
    </html>

`;
};