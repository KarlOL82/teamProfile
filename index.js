const inquirer = require("inquirer");
const fs = require("fs");
const generateHtml = require("./src/generateHtml");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const teamRoster = [];



function managerQ() {
 inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your team manager's name?",
      },
      {
        type: "input",
        name: "id",
        message: "What is your manager's ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is your manager's email address?",
      },
      {
        type: "input",
        name: "office",
        message: "What is your manager's office number?",
      },
    ]).then((answers) => {
      console.log(answers);

      const { name, id, email, office } = answers;

      const manager = new Manager(name, id, email, office);

      const addManager = {
        role: manager.getRole(),
        name: manager.getName(),
        id: manager.getId(),
        email: manager.getEmail(),
        extra: manager.getOffice(),
      };

      teamRoster.push(addManager);
      // startCollectingData();
      promptOtherQues();
    });
}

function promptOtherQues() {
  inquirer
    .prompt([
      {
        name: "teamMember",
        type: "list",
        choices: ["Engineer", "Intern", "Done adding team members"],
        message: "What type of team member would you like to add?",
      },
    ])
    .then((answers) => {
      if (answers.teamMember === "Engineer") {
        engineerQ();
      }
      if (answers.teamMember === "Intern") {
        internQ();
      } 
        startCollectingData();
      
    });
}
function engineerQ() {
  engineerData = inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "What is the employee's name?",
      },
      { 
        name: "id",
        type: "input",
        message: "What is the employee's ID number?",
      },
      {
        name: "email",
        type: "input",
        message: "What is the employee's email address?",
      },
      {
        name: "github",
        type: "input",
        message: "What is the employee's GitHub username?",
      },
    ])
    .then((answers) => {
      console.log(answers.engineerQ);

      const { name, id, email, github } = answers;

      const engineer = new Engineer(name, id, email, github);

      const addEngineer = {
        role: engineer.getRole(),
        name: engineer.getName(),
        id: engineer.getId(),
        email: engineer.getEmail(),
        extra: engineer.getGithub(),
      };

      teamRoster.push(addEngineer);

      promptOtherQues();
      if (promptOtherQues.answer !== "Engineer" || "Intern") {
        // startCollectingData();
      };
      // startCollectingData();
    });
}

function internQ() {
  internData = inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "What is the employee's name?",
      },
      { 
        name: "id",
        type: "input",
        message: "What is the employee's ID number?",
      },
      {
        name: "email",
        type: "input",
        message: "What is the employee's email address?"

      },
      {
        name: "school",
        type: "input",
        message: "What is the name of the employee's school?",
      },
    ])
    .then((answers) => {
      const { name, id, email, school } = answers;

      const intern = new Intern(name, id, email, school);

      const addIntern = {
        role: intern.getRole(),
        name: intern.getName(),
        id: intern.getId(),
        email: intern.getEmail(),
        extra: intern.getSchool(),
      };

      teamRoster.push(addIntern);
      promptOtherQues();
      if (promptOtherQues.answers !== "Engineer" || "Intern") {
        // startCollectingData();
      };
      // startCollectingData();

    });
};



function getExtra() {
  if (Employee.getRole === "Engineer") {
    return Engineer.getGithub();
  }
  if (getRole === "Intern") {
    return Intern.getSchool();
  }
  if (getRole === "Manager") {
    return Manager.getOffice();
  };
  teamRoster.push(getExtra);
};




function startCollectingData() {
  const newFile = generateHtml(teamRoster);

  fs.writeFile("./dist/myTeam.html", newFile, function (err) {
    if (err) throw err;
    else console.log("success");
    
  });
  
  
};



managerQ();