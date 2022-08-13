const inquirer = require("inquirer");
const fs = require("fs");
const generateHtml = require("./src/generateHtml");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const teamRoster = [];

function startCollectingData() {
  const managerQ = inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "What is your team manager's name?",
      },
      {
        name: "id",
        type: "input",
        message: "What is your manager's ID?",
      },
      {
        name: "email",
        type: "input",
        message: "What is your manager's email address?",
      },
      {
        name: "office",
        type: "input",
        message: "What is your manager's office number?",
      },
    ])
    .then((answer) => {
      console.log(answer.managerQ);

      const { name, id, email, office } = answer;

      const manager = new Manager(name, id, email, office);

      const addManager = {
        role: manager.getRole(),
        name: manager.getName(),
        id: manager.getId(),
        email: manager.getEmail(),
        extra: manager.getOffice(),
      };

      teamRoster.push(addManager);
      promptOtherQues();
    });
  function promptOtherQues() {
    inquirer.prompt([
      {
        name: "teamMember",
        type: "choice",
        choices: ["Engineer", "Intern", "Done adding team members"],
        message: "What type of team member would you like to add?",
      },
    ]);
  }
  if (answer === "Engineer") {
    engineerQ();
  }
  if (answer === "Intern") {
    internQ();
  } else {
    generateHtml();
  }

  function engineerQ() {
    engineerData = inquirer
      .prompt([
        {
          name: "github",
          type: "input",
          message: "What is the employee's GitHub username?",
        },
      ])

      .then((answer) => {
        console.log(answer.engineerQ);

        const { name, id, email, github } = answer;

        const engineer = new Engineer(name, id, email, github);

        const addEngineer = {
          role: engineer.getRole(),
          name: engineer.getName(),
          id: engineer.getId(),
          email: engineer.getEmail(),
          extra: engineer.getGithub(),
        };

        teamRoster.push(addEngineer);
      });
  }
  promptOtherQues();

  function internQ() {
    internData = inquirer
      .prompt([
        {
          name: "school",
          type: "input",
          message: "What is the name of the employee's school?",
        },
      ])
      .then((answer) => {
        console.log(answer.internQ);

        const { name, id, email, school } = response;

        const intern = new Intern(name, id, email, school);

        const addIntern = {
          role: intern.getRole(),
          name: intern.getName(),
          id: intern.getId(),
          email: intern.getEmail(),
          extra: intern.getSchool(),
        };

        teamRoster.push(addIntern);
      });
    promptOtherQues();
      if (promptOtherQues.answer !== "Engineer" || "Intern") {
        generateHtml()
      };

      Employee.append(teamRoster)

    .then((answer) => {
      const newFile = generateHtml(answer);

      fs.writeFile("./dist/myTeam.html", newFile, function (err) {
        if (err) throw err;
        else console.log("success");
        console.log(answer);
      });
    });
  }
}

startCollectingData();
