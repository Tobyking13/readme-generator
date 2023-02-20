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
     },
     {
        type: 'text',
        message: 'Please give me a description of your project:',
        name: 'description'
    }, 
    {
        type: 'checkbox',
        message: 'Please tell me the technologies used for this project:',
        name: 'tech',
        choices: ['HTML', 'CSS', 'JavaScript', 'Node', 'jQuery', 'React']
    }, 
    {
        type: 'text',
        message: 'Please tell me the install requirements:',
        name: 'installation'
    }, 
     {
        type: 'text',
        message: 'Please provide a link to a screenshot (relative path) of the application. Type \'none\' if there is no screenshot:',
        name: 'screenshot'
     },
      {
        type: 'text',
        message: 'please explain to me how to use the application',
        name: 'usage'
     },{
        type: 'list',
        message: 'What licence do you use:',
        name: 'licence',
        choices: [
            'Apache License 2.0', 
            'GNU General Public Licence v3.0', 
            'MIT', 'BSD 2-Clause \"Simplified\" Licence', 
            'BSD 3-Clause \"New\" or \"Revised\" Licence', 
            'Boost Software License 1.0', 
            'Creative Commons Zero v1.0 Universal', 
            'Eclipse Public License 2.0', 
            'Mozilla Public License 2.0', 
            'NONE']
    }, 
    {
        type: 'text',
        message: 'Please tell me the GitHub usernames involved in this project & seperate each username with a comma \, . If there are none, please type \'none\'. ',
        name: 'contributing'
    }, 
    {
        type: 'text',
        message: 'Please tell me infomation about this applications test process:',
        name: 'tests'
    }, {
        type: 'text',
        message: 'Please provide an email address:',
        name: 'email'
    }, {
        type: 'text',
        message: 'Please provide your GitHub username:',
        name: 'username'
    }
];

// add if statement for usage if user wants to include screenshot
// create functionality for multiple contributers. App will ask for usernames and program will show links to their profiles

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
