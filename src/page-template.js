const employeeInfo = require('../index');

const generateHTML = employeeInfo => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Company Employees</title>
    </head>
<body>

    <header class="text-center">
        <h1>My Team</h1>    
    </header>

    <div id ="employees">
        <div class="card">
            <h3 class="card-header">${employeeInfo[0].name}</h3>
            <img class="icon"></img>
            <p class="role">Manager</p> 
            <p class="id">${employeeInfo[0].id}</p>
            <p class="email">${employeeInfo[0].email}</p>
            <p class="custom">${employeeInfo[0].officeNumber}</p>
        </div>
    </div>
</body>
</html>
`
};

const appendEmployee = function(employeeInfo){
generateHTML(employeeInfo);
var employees = document.getElementById('employees');
    if(employeeInfo.length>1){
        for(let i=1; i<employeeInfo.length; i++){
            employees.appendChild(
                `        
                <div class="card">
                    <h3 class="card-header">${employeeInfo[i].name}</h3>
                    <img class="icon"></img>
                    <p class="role">Intern/Engineer</p> 
                    <p class="id">${employeeInfo[i].id}</p>
                    <p class="email">${employeeInfo[i].email}</p>
                    <p class="custom">Intern/Engineer Specifics</p>
                </div>`
                )
        }
        return 
    } else {
        return;
    }
}


module.exports = appendEmployee(employeeInfo);