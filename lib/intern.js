const Employee = require("./employee");

//Builds the Intern subclass
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, email, id);
    
    
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
