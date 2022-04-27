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
        ${appendEmployee(employeeInfo)}
    </div>
    </div>
</body>
</html>
`
};

const appendEmployee = function(employeeInfo){
var employees = ``;
    if(employeeInfo.length>1){
        for(let i=1; i<employeeInfo.length; i++){
            employees.append(
                `        
                <div class="card">
                    <h3 class="card-header">${employeeInfo[i].name}</h3>
                    <img class="icon" src='/'></img>
                    <p class="role">${employeeInfo[i]}</p> 
                    <p class="id">${employeeInfo[i].id}</p>
                    <p class="email">${employeeInfo[i].email}</p>
                    <p class="custom">${employeeInfo[i].github || employeeInfo[i].officeNumber || employeeInfo[i].school} </p>
                </div>`
                )
        }
        return employees;
    } else {
        return;
    }
}

module.exports = generateHTML(employeeInfo);