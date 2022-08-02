
function generateRandomId() {
    let randomId = Math.floor((Math.random() * 10000) );

    return randomId;
}
function generateRandomSalary(employeeLevel) {
    let min = 0;
    let max = 0;
    if (employeeLevel == "Junior") {
        min = 500;
        max = 1000;
        let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
        return randomSalary;
    } else if (employeeLevel == "Mid-Senior") {
        min = 1000;
        max = 1500;
        let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
        return randomSalary;
    } else if (employeeLevel == "Senior") {
        min = 1500;
        max = 2000;
        let randomSalary = Math.floor(Math.random() * (max - min + 1) + min);
        return randomSalary;
    }
    return randomSalary;
}
function afterTaxSalary(level) {
    let salary = generateRandomSalary(level);
    return Math.floor(salary*0.925);
 
}
function idNumber(add){
    let startingID = 1000;
    return startingID + add;
}
const firstEmployee = {
    employeeId: function(){return idNumber(0)}, 
    fullName: "Ghazi Samer",
    department: "Administration",
    level: 'Senior',
    imageUrl: "www.google.com",
    salary: function(){return afterTaxSalary(this.level)},
}

const SecondEmployee = {
    employeeId: function(){return idNumber(1)},
    fullName: "Lana Ali",
    department: "Finance",
    level: 'Senior',
    imageUrl: "www.google.com",
    salary: function(){return afterTaxSalary(this.level)},
}

