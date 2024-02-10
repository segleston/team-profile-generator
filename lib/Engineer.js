// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// requiring employee class
const Employee = require("./Employee");
//defining engineer class
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
}
getGithub() {
    return this.github;
}
getRole() {
    return  "Engineer";
}

}
//exporting for use in other files
module.exports = Engineer;