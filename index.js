const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// project title
// sections entitled => Description, Table of Contents (bulletpoints), Installation, Usage, Licence, Contributing, Tests, Questions 
// add badges
// get 


// array of questions for user
const questions = [
    {
        type: 'text',
        message: 'Whats the title of your readme?',
        name: 'title'
    }, {
        type: 'text',
        message: 'Please give me a description of your project:',
        name: 'description'
    }, {
        type: 'text',
        message: 'Please tell me the install requirements:',
        name: 'installation'
    }, {
        type: 'list',
        message: 'What licence do you use:',
        name: 'licence',
        choices: ['MIT', 'NONE']
    }
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => 
        err ? console.error(err) : console.log('readme.md created.')
    )
}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then((data) => {
        const fileName = `${data.title.toLowerCase().split(' ').join('')}.md`;
        writeToFile(fileName, data);
    })
}

// function call to initialize program
init();
