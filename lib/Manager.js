const Employee = require('./Employee');

//inherit the name,id,email properties from employee class.
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
    //super() brings in the information of the other classes
    super(name,id,email);
    
    this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }
};

module.exports = Manager;