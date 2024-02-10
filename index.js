const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");


const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.


// Create a empty array to store the team members after they are created

const teamMembers = []

// Function to create the manager. Should be the initial function called when creating the team.

function createManager() {
    console.log('Please build your team');
    // Ask for a name, id, email and office number for the manager
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "What is your name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your id?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your email?"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is your office number?"
        }
    ])

        .then((answers) => {
            const manager = new Manager(answers.managerName, answers.id, answers.email, answers.officeNumber)
            //pushes answers to empty array
            teamMembers.push(manager)
            // calls create team function
            createTeam()
        })
        
}


// Function to create an engineer.
// Asks for a name, id, email, and github

function createEngineer() {
    console.log('Please build your engineer');
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: "What is your engineers name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your engineers id?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your engineers email?"
        },
        {
            type: 'input',
            name: 'github',
            message: "What is your engineers gitHub?"
        },
    ])

        .then((answers) => {
            //stores answer in new engineer object 
            const engineer = new Engineer(answers.engineerName, answers.id, answers.email, answers.github)
            teamMembers.push(engineer)
            // calls create team function
            createTeam()
        })
}

// Function to create an intern
// Asks for a name, id, email, and school
function createIntern() {
    console.log('Please build your intern');
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: "What is your interns name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your interns id?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your interns email?"
        },
        {
            type: 'input',
            name: 'school',
            message: "What is your interns school?"
        },
    ])
        // when answers received, add to variable and push to team members array
        .then((answers) => {
            const intern = new Intern(answers.internName, answers.id, answers.email, answers.school)
            teamMembers.push(intern)
            createTeam()
        })

}

// function to ask if manager wants to create a team member after creating their initial manager profile
function createTeam() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'employeeChoice',
            message: "What team profile would you like to create?",
            choices: ['Intern', 'Engineer', 'Finish builing the team']
        },
    ]).then(answers => {
        // A condition to check which employee choice the user selected and run appropriate function
        if (answers.employeeChoice === 'Intern') {
            createIntern();
        } else if (answers.employeeChoice === 'Engineer') {
            createEngineer();
        } else {
            fs.writeFileSync('./team.html', render(teamMembers), 'utf-8');
    }})
}


// Call the createManager function to initialize the app.

    createManager()
