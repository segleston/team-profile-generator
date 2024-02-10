// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
//requiring employee class to use here
const Employee = require("./Employee");
//defining intern class using employee  superclass with additional school property
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
}
getSchool() {
    return this.school;
}
getRole() {
    return  "Intern";
}

}
//exporting for use in other files
module.exports = Intern;