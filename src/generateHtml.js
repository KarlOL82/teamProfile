const Employee = require("../lib/employee");

let teamRoster;
const newTeamMember = teamRoster.map(generateHtml);
function generateHtml (teamRoster) {

return`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <div>
        <div id="header" class="container-fluid">
            <h1>KarlMerica Enterprises</h1>
            <h4>Where tomorrow becomes today</h4>
            <h2>Team Roster</h2>
          </div>
    </div>

    <div id="cardContainer" class="card" style="width: 18rem;">
        
        <div class="card-body">
           <h1 class="card-title">Name</h1>
          <p class="card-text"><h4>Employee E-Badge</h4></p>
        </div>
        <ul id="empCard" class="list-group list-group-flush">
          <li class="list-group-item">Role</li>
          <li class="list-group-item">ID</li>
          <li class="list-group-item">Email</li>
          <li class="list-group-item">Extra</li>
        </ul>
        <div class="card-footer">
            Team Member
          </div>
      </div>
    </div>
</body>
</html>

`
}

module.exports = generateHtml;