// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// Requires employee class
const Employee = require("./Employee");
// Defining manager  class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
}
getOfficeNumber() {
    return this.officeNumber;
}
getRole() {
    return  "Manager";
}

}
//exports  the manager class for use in other files
module.exports = Manager;