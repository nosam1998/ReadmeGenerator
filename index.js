const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const gm = require("./utils/generateMarkdown.js");

// Required Fields
// Title
// Description
// Table of Contents
// Installation
// Usage
// License
// Contributing
// Tests
// Questions

let readme_filled_out;

inquirer.prompt([
    {
        type: "input",
        message: "What is your project title?",
        name: "title"
    },
    {
        type: "input",
        message: "What is the description of your project?",
        name: "description"
    },
    // {
    //     type: "input",
    //     message: "Your Table of Contents (separated by a \",\")",
    //     name: "tableOfContents"
    // },
    // {
    //     type: "checkbox",
    //     message: "What would you like to have in your table of contents?",
    //     choices: [
    //         ""
    //     ]
    // },
    {
        type: "input",
        message: "Installation instructions",
        name: "installation"
    },
    {
        type: "input",
        message: "Usage",
        name: "usage",
        default: "It is a public repo"
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
        type: "input",
        message: "How do you want people to contribute to your project",
        name: "contribute"
    },
    {
        type: "input",
        message: "How do you run tests on your project?",
        name: "tests",
        default: "npm test"
    },
    {
        type: "input",
        message: "What is your github username?",
        name: "githubUsername"
    },
    {
        type: "input",
        message: "What is your github email?",
        name: "githubEmail"
    }
]).then(function (response) {
    console.log(response);
    readme_filled_out = gm(response);
    writeToFile("README_Generated.md", readme_filled_out);
});

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
            return console.log(err);
        }

        console.log("Success!");
    });
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
