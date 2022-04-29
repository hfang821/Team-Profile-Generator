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

    <div id ="employees">
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
                    <img class="icon" src='/'></img>
                    <p class="role">${employeeInfo[i].role}</p> 
                    <p class="id">${employeeInfo[i].id}</p>
                    <p class="email">${employeeInfo[i].email}</p>
                    <p class="custom">${appendCustom(employeeInfo[i])}</p>
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



//do not use any () when exporting as it will invoke it automatically.
module.exports = generateHTML;

