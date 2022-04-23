const {writeFile, copyFile} = require('./utils/generate-site');
const inquirer = require('inquirer');
//const fs = require('fs');
const generatePage = require('./src/page-template');

const promptUser =()=>{
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the employee? (Required)',
            validate: nameInput =>{
                if(nameInput){
                    return true;
                } 
                console.log("You need to enter a name to proceed!");
                return false;
            }
        },

        {
            type: 'input',
            name: 'id',
            message: 'What is his/her employee id? (Required)',
            validate: idInput => {
                if(idInput) {
                    return true;
                }
                console.log('You need to enter a employee id to proceed!');
                return false;
            }

        },

        {
            type: 'input',
            name: 'email',
            message: 'What is his/her email address?',
            validate: emailInput => {
                if(emailInput) {
                    return true;
                }
                console.log('You need to enter the email address to proceed!');
                return false;
            }
        },

        {
            type: 'list',
            name: 'option',
            message: 'Select an appropriate employee type to continue.',
            choices: ['CEO','Manager','Engineer','Intern']
        }
    ]);
};

const promptGithub = employeeInfo =>{

    if(!employeeInfo.github) {
        employeeInfo.github =[];
    }

    console.log(`
    ================================================
    This is the info entered for an permanent employee
    Please enter his/her github username.
    ================================================
    `);

    return inquirer
    .prompt(
        {
            type: 'input',
            name: 'username',
            message: 'What is his/her github username? (Required)',
            validate: userNameInput => {
                if(userNameInput) {
                    return true;
                }
                console.log('You need to input a github username to proceed!');
                return false;
            }
        })
    .then(usernameData => {
        employeeInfo.github.push(usernameData);

        return employeeInfo;
    });
};

const promptSchool = employeeInfo =>{
    if(!employeeInfo.school) {
        employeeInfo.school =[];
    }

    console.log(`
    ================================================
    This is the info entered for an intern employee
    Please enter his/her school name.
    ================================================
    `);

    return inquirer
    .prompt( 
        {
            type: 'input',
            name: 'school',
            message: 'Enter a school name of this Intern.',
            validate: schoolInput => {
                if(schoolInput) {
                    return true;
                }
                console.log("You need to input the intern's school name to proceed!");
                return false;
            }
        })
    .then(schoolData => {
            employeeInfo.school.push(schoolData);
    
            return employeeInfo;
        });
};


promptUser()
.then(employeeInfo => {
    if({option} === 'Intern') {
        return promptSchool(employeeInfo);
    } 
    return promptGithub(employeeInfo);
})
.then(pageHTML => {
    return writeFile(pageHTML);
})
.then(writeFileResponse => {
    console.log(writeFileResponse);
    //copy the pre-written style.css
    return copyFile();
})
.then(copyFileResponse => {
    console.log(copyFileResponse);
})
.catch(err => console.log(err));

