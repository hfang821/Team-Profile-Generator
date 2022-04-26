const Employee = require('./Employee');

//inherit the name,id,email properties from employee class.
class Engineer extends Employee {
    constructor(name, id, email, github) {
    //super() brings in the information of the other classes
    super(name,id,email);
    
    this.github = github;
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
};

module.exports = Engineer;