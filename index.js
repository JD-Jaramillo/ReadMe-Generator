// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateReadMe = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'what is the title of your project?',
        name: 'TitleofProject',
        default: 'Project Title Goes Here',
    },
    {
        type: 'input',
        message: 'Type in a description of your project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What are the instructions for installation?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What is the usage information?',
        name: 'usage',
    },
    {
        type: 'rawlist',
        message: 'What License do you want to use?',
        name: 'license',
        choices: [
            'apache', 'mit', 'mozilla', 'perl', 'none'
        ],
    },
    {
        type: 'input',
        message: 'How can you contribute?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'How can I test this project?',
        name: 'test',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'GitHub',
    },
    {
        type: 'input',
        message: 'What is your email? ',
        name: 'email',
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    var generate = generateReadMe(data);
    fs.writeFile(fileName, generate, (err) => {
        err ? console.log(err) : console.log('Your ReadMe has been generated!');
    })

}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
            var fileName = 'GeneratedReadMe.md';
            writeToFile(fileName, answers);
        })
}
// Function call to initialize app
init();