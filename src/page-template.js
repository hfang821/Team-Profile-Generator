const generateHTML = employeeInfo => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="style.css" />
    <title>Company Employees</title>
    </head>
<body>

    <header class="text-center">
        <h1>My Team</h1>    
    </header>

    <div id ="employees" class="card-deck">
     ${appendEmployee(employeeInfo)}
    </div>
    </div>
</body>
</html>
`
};

const appendEmployee = function(employeeInfo){
var employees = ``;
        for(let i=0; i<employeeInfo.length; i++){
            employees=employees+`        
                <div class="card">
                    <h3 class="card-header">${employeeInfo[i].name}</h3>
                    <img class="icon" src='${appendPath(employeeInfo[i])}'></img>
                    <p class="role">Role: ${employeeInfo[i].role}</p> 
                    <p class="id">Employee ID: ${employeeInfo[i].id}</p>
                    <a href="mailto:${employeeInfo[i].email}">Email Address: ${employeeInfo[i].email}</a>
                    <br>
                    <a class="custom" href='${appendCustomPath(employeeInfo[i])}'>${appendCustom(employeeInfo[i])}</a>
                </div>`
        }
        return employees;
}

const appendCustom = function(employeeInfo) {
var custom = ``;
            //if employee is an engineer
            if(employeeInfo.github){
                custom=custom+ 'Github Username: ' + employeeInfo.github;
            } 
            //if employee is a manager
            else if(employeeInfo.officeNumber){
                custom=custom+ 'Office Number: '+employeeInfo.officeNumber;
            } 
            //if the employee is a intern
            else {
                custom=custom+ 'University: '+ employeeInfo.school;
            }
        return custom;
}

const appendPath = function(employeeInfo) {
    var path = ``;
        //if employee is a manager
        if(employeeInfo.role === 'Manager') {
            path = path + '../assets/images/Manager.jpg';
        } 
        //if employee is an engineer
        else if(employeeInfo.role === 'Engineer') {
            path = path + '../assets/images/Engineer.jpg';
        } 
        //if the employee is a intern
        else {
            path = path + '../assets/images/Intern.jpg';
        }
        return path;
}

var appendCustomPath = function(employeeInfo) {
    var path = ``;
    if(employeeInfo.role === 'Manager') {
        return path = path + 'https://www.google.com/search?q=' + employeeInfo.name;
    } 
    //if employee is an engineer
    else if(employeeInfo.role === 'Engineer') {
       return path = path + 'https://github.com/' + employeeInfo.github;
    } 
    //if the employee is a intern
    else {
        return path = path + 'https://www.google.com/search?q=' + employeeInfo.school;
    }
}
//do not use any () when exporting as it will invoke it automatically.
module.exports = generateHTML;

