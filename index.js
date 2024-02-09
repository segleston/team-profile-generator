const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.


// Create a empty array to store the team members after they are created

const teamMembers = []

// Create a empty array to store the member IDs after they are created

// Function to create the manager. Should be the initial function called when creating the team.

function createManager() {
    console.log('Please build your team');
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
        },
    ])

        .then((answers) => {
            const manager = new Manager(answers.managerName, answers.id, answers.email, answers.officeNumber)
            teamMembers.push(manager)
            createTeam()
        })
        
}
// Ask for a name, id, email and office number for the manager

// Then store the answers into a new Manager object

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
            const engineer = new Engineer(answers.engineerName, answers.id, answers.email, answers.github)
            teamMembers.push(engineer)
            createTeam()
        })
}

//push the manager into the team members array



// Function to create an engineer.
// Asks for a name, id, email, and github

//then store the answers into a new Engineer object

//push the engineer into the team members array


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

        .then((answers) => {
            const intern = new Intern(answers.internName, answers.id, answers.email, answers.school)
            teamMembers.push(intern)
            createTeam()
        })

}

// Then store the answers into the team members arry

// push the intern into the team members array

function createTeam() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'employeeChoice',
            message: "What would you like to create?",
            choices: ['Intern', 'Engineer', 'None']
        },
    ]).then(answers => {
        if (answers.employeeChoice === 'Intern') {
            createIntern();
        } else if (answers.employeeChoice === 'Engineer') {
            createEngineer();
        } else {
            fs.writeFileSync('./output/team.html', render(teamMembers), 'utf-8');
    }})

}

// Function to ask the user what team member they would like to create next, either a Engineer or Intern. Also ask if they don't want to add any more team members. SHOULD BE CALLED AT THE END OF EACH MEMBER FUNCTION SO THEY CAN CREATE ANOTHER MEMBER AFTER ALREADY CREATING ONE.

// Then create a conditional to check which member the user picked and run the appropriate function based off of that input ex:`if(userChoice === 'Engineer'){createEngineer()}`
// Have a else condition so that if they choose to not make any more members, the file gets written.(Can create a function for this and then call the function)

// Function to hold all of the other functions.
// Call the function to initialize the app.