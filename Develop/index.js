// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    }, 
    {
        type: "input",
        message: "What is your email address?",
        name: "email"

    }, 
    {
        type: "input",
        message: "What is the name of the project?",
        name: "title"

    },
    {
        type: "input",
        message: "Write a short description of your project:",
        name: "description"

    },
    {
        type: "list",
        message: "What kind of license project should have?",
        name: "license",
        choices: ['MIT', 'GPL 3.0', 'BSD 3', 'None']

    },
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "commandD",
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "commandT",
    },
    {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "repoUsage",
    },
    {
        type: "input",
        message: "What does user need to know about contributing to the repo?",
        name: "repoContribute",
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
    fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log('README.md generated!')
);

}

// TODO: Create a function to initialize app
function init() { 
    inquirer.prompt(questions)
        .then((data)=>{
            writeToFile("README.md", generateMarkdown(data));});
    
}

// Function call to initialize app
init();
