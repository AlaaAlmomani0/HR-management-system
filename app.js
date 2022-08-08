let employeeId = 1000;
const netSalary = (level) => {
  let min = 0;
  let max = 0;
  if (level === "Senior") {
    min = 1500;
    max = 2000;
    return Math.floor(Math.random() * (max - min)) + min;
  } else if (level === "Mid-Senior") {
    min = 1000;
    max = 1500;
    return Math.floor(Math.random() * (max - min)) + min;
  } else if (level === "Junior") {
    min = 500;
    max = 1000;
    return Math.floor(Math.random() * (max - min)) + min;
  }
};
const Employees = function (fullName, department, level, imageURL) {
  this.employeeId = employeeId++;
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.imageURL = imageURL;
  this.salary = netSalary(this.level);
};

const employee1 = new Employees(
  "Ghazi Samer",
  "Administration",
  "Senior",
  "./assets/Ghazi.jpg"
);
const employee2 = new Employees(
  "Lana Ali",
  "Finance",
  "Senior",
  "./assets/Lana.jpg"
);
const employee3 = new Employees(
  "Tamara Ayoub",
  "Marketing",
  "Senior",
  "./assets/Tamara.jpg"
);
const employee4 = new Employees(
  "Safi Walid",
  "Administration",
  "Mid-Senior",
  "./assets/Safi.jpg"
);
const employee5 = new Employees(
  "Rana Saleh",
  "Development",
  "Junior",
  "./assets/Rana.jpg"
);
const employee6 = new Employees(
  "Hadi Ahmad",
  "Finance",
  "Mid-Senior",
  "./assets/Hadi.jpg"
);

const employees = [
  employee1,
  employee2,
  employee3,
  employee4,
  employee5,
  employee6,
];

for (let i = 0; i < employees.length; i++) {
  console.log(employees[i]);
}

for (let i = 0; i < employees.length; i++) {
  console.log(`Employee name: ${employees[i].fullName} `);
  console.log(`Department: ${employees[i].department} `);
}

Employees.prototype.writeToHTML = function () {
  document.write(
    `<div class="inner-employees-cards-section">
        <div class="test">

        <img src=${this.imageURL} alt="employee pfp" />
        

        </div>
        <p class="employee-name">${this.fullName}</p>
        <p class="employee-id">${this.employeeId}</p>
      
        <div class="to-hide">
        <p class="to-be-hidden">Department / ${this.department}</p>
        <p class="to-be-hidden">${this.level}</p>
        <p class="to-be-hidden">Salary / ${this.salary} JD</p>
        </div>
      </div>`
  );
};

for (let j = 0; j < employees.length; j++) {
  employees[j].writeToHTML();
}
