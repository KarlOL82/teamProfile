const inquirer = require("inquirer");
const fs = require('fs');
const generateHtml = require("./src/generateHtml");
// const team = require("./src/team");
const Employee = require("./lib/employee");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const teamRoster = [];


function startCollectingData (){
inquirer
    .prompt([
        {
            name: "name",
            type: "input",
            message: "What is your team manager's name?",
        },
        {   name: "id",
            type: "input",
            message: "What is your manager's ID?",
        },
        {
            name:"email",
            type: "input",
            message: "What is your manager's email address?",
        },
        {
            name: "office",
            type: "input",
            message: "What is your manager's office number",
        },
        promptOtherQues()
        

    ]).then((response) => {
        console.log(response);
         
        const {name, id, email, office} = response;

        const manager =new Manager (name, id, email, office);

        const addManager ={ 
            role: manager.getRole(),
            name: manager.getName(),
            id: manager.getId(),
            email: manager.getEmail(),
            extra: manager.getOffice(),
        

        }
    })

teamRoster.push(addManager);

function promptOtherQues() {
 
inquirer
    .prompt([
        {
            name: "teamMember",
            type: "choice",
            choices: ["Engineer", "Intern", "Done adding team members"],
            message: "What type of team member would you like to add?",
        }
    ]);
}    
        
    


    const Engineer = inquirer
    .prompt([
        {
            name: "github",
            type: "input",
            message: "What is the employee's GitHub username?"
        }

    ]).then((response)=>{
        console.log(response);
         
        const {name, id, email, github} = response;

        const engineer =new Engineer (name, id, email, github);

        const addEngineer = { 
            role: engineer.getRole(),
            name: engineer.getName(),
            id: engineer.getId(),
            email: engineer.getEmail(),
            extra: engineer.getGithub(),
        

        }
        teamRoster.push(addEngineer);

    const intern = inquirer
    .prompt([
        {
            name: "school",
            type: "input",
            message: "What is the name of the employee's school?"
        
        }


    ]).then((response)=>{
        console.log(response);
         
        const {name, id, email, school} = response;

        const intern =new Intern (name, id, email, github);

        const addIntern = { 
            role: intern.getRole(),
            name: intern.getName(),
            id: intern.getId(),
            email: intern.getEmail(),
            extra: intern.getSchool(),
        

        }
        teamRoster.push(addIntern)

    .then((answer) => {
        const newFile = generateHtml(answer);
    
        fs.writeFile("./dist/myTeam.html", newFile, function (err) {
          if (err) throw err;
          else console.log("success");
          console.log(answer);
        });
      });


      startCollectingData();
    

    })
})
}
