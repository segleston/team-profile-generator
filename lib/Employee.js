// TODO: Write code to define and export the Employee class

// employee class  with properties for name, id, email, and role. 
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;

}
getName() {
    return this.name;
}
getId() {
    return this.id;
}
getEmail() {
    return this.email;
}
getRole() {
    return 'Employee'
}
}
//exports  the Employee class
module.exports = Employee;