const Employee = require("../lib/employee");

let teamRoster;
function generateHtml (answers) {
return`
<div id="cardContainer" class="card" style="width: 18rem;">
        
        <div class="card-body">
           <h1 class="card-title">${Employee.name}</h1>
          <p class="card-text"><h4>Employee E-Badge</h4></p>
        </div>
        <ul id="empCard" class="list-group list-group-flush">
          <li class="list-group-item">${Employee.role}</li>
          <li class="list-group-item">${Employee.id}</li>
          <li class="list-group-item">${Employee.email}</li>
          <li class="list-group-item">${Employee.extra}</li>
        </ul>
        <div class="card-footer">
            Team Member
          </div>
      </div>
    </div>

`
}

module.exports = generateHtml();