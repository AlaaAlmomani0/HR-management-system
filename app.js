let numberId = 1;

const salary = (level) => {
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

const employee1 = {
  employeeId: 999,

  fullName: "Ghazi Samer",
  department: "Administration",
  level: "Senior",
  imageURL: "",
  salary: 0,
  uniqueId: function () {
    this.employeeId += numberId;
    numberId++;
    return this.employeeId;
  },
};
const employee2 = {
  employeeId: 999,
  fullName: "Lana Ali",
  department: "Finance",
  level: "Senior",
  imageURL: "",
  salary: 0,
  uniqueId: function () {
    this.employeeId += numberId;
    numberId++;
    return this.employeeId;
  },
  salary: function () {
    let min = 0;
    let max = 0;
    if (this.level === "Senior") {
      min = 1500;
      max = 2000;
      return Math.floor(Math.random() * (max - min)) + min;
    } else if (this.level === "Mid-Senior") {
      min = 1000;
      max = 1500;
      return Math.floor(Math.random() * (max - min)) + min;
    } else if (this.level === "Junior") {
      min = 500;
      max = 1000;
      return Math.floor(Math.random() * (max - min)) + min;
    }
  },
};
const employee3 = {
  employeeId: 999,
  fullName: "Tamara Ayoub",
  department: "Marketing",
  level: "Senior",
  imageURL: "",
  salary: 0,
  uniqueId: function () {
    this.employeeId += numberId;
    numberId++;
    return this.employeeId;
  },
  salary: function () {
    let min = 0;
    let max = 0;
    if (this.level === "Senior") {
      min = 1500;
      max = 2000;
      return Math.floor(Math.random() * (max - min)) + min;
    } else if (this.level === "Mid-Senior") {
      min = 1000;
      max = 1500;
      return Math.floor(Math.random() * (max - min)) + min;
    } else if (this.level === "Junior") {
      min = 500;
      max = 1000;
      return Math.floor(Math.random() * (max - min)) + min;
    }
  },
};
const employee4 = {
  employeeId: 999,
  fullName: "Safi Walid",
  department: "Administration",
  level: "Mid-Senior",
  imageURL: "",
  salary: 0,
  uniqueId: function () {
    this.employeeId += numberId;
    numberId++;
    return this.employeeId;
  },
  salary: function () {
    let min = 0;
    let max = 0;
    if (this.level === "Senior") {
      min = 1500;
      max = 2000;
      return Math.floor(Math.random() * (max - min)) + min;
    } else if (this.level === "Mid-Senior") {
      min = 1000;
      max = 1500;
      return Math.floor(Math.random() * (max - min)) + min;
    } else if (this.level === "Junior") {
      min = 500;
      max = 1000;
      return Math.floor(Math.random() * (max - min)) + min;
    }
  },
};
const employee5 = {
  employeeId: 999,
  fullName: "Omar Zaid",
  department: "Development",
  level: "Senior",
  imageURL: "",
  salary: 0,
  uniqueId: function () {
    this.employeeId += numberId;
    numberId++;
    return this.employeeId;
  },
  salary: function () {
    let min = 0;
    let max = 0;
    if (this.level === "Senior") {
      min = 1500;
      max = 2000;
      return Math.floor(Math.random() * (max - min)) + min;
    } else if (this.level === "Mid-Senior") {
      min = 1000;
      max = 1500;
      return Math.floor(Math.random() * (max - min)) + min;
    } else if (this.level === "Junior") {
      min = 500;
      max = 1000;
      return Math.floor(Math.random() * (max - min)) + min;
    }
  },
};
const employee6 = {
  employeeId: 999,
  fullName: "Rana Saleh",
  department: "Development",
  level: "Junior",
  imageURL: "",
  salary: 0,
  uniqueId: function () {
    this.employeeId += numberId;
    numberId++;
    return this.employeeId;
  },
  salary: function () {
    let min = 0;
    let max = 0;
    if (this.level === "Senior") {
      min = 1500;
      max = 2000;
      return Math.floor(Math.random() * (max - min)) + min;
    } else if (this.level === "Mid-Senior") {
      min = 1000;
      max = 1500;
      return Math.floor(Math.random() * (max - min)) + min;
    } else if (this.level === "Junior") {
      min = 500;
      max = 1000;
      return Math.floor(Math.random() * (max - min)) + min;
    }
  },
};
const employee7 = {
  employeeId: 999,
  fullName: "Hadi Ahmad",
  department: "Finance",
  level: "Mid-Senior",
  imageURL: "",
  salary: 0,
  uniqueId: function () {
    this.employeeId += numberId;
    numberId++;
    return this.employeeId;
  },
  salary: function () {
    let min = 0;
    let max = 0;
    if (this.level === "Senior") {
      min = 1500;
      max = 2000;
      return Math.floor(Math.random() * (max - min)) + min;
    } else if (this.level === "Mid-Senior") {
      min = 1000;
      max = 1500;
      return Math.floor(Math.random() * (max - min)) + min;
    } else if (this.level === "Junior") {
      min = 500;
      max = 1000;
      return Math.floor(Math.random() * (max - min)) + min;
    }
  },
};

console.log(employee6, employee5, employee4);

array = [];
array.push(
  employee1,
  employee2,
  employee3,
  employee4,
  employee5,
  employee6,
  employee7
);

for (let i = 0; i < array.length; i++) {
  console.log(`Employee name: ${array[i]["fullName"]}`);
}
//////////////////////////////////////////////////////////
const employees = [];
function Employee(employeeId, fullName, department, level, imageURL) {
  this.employeeId = 999;
  this.fullName = fullName;
  this.department = department;
  this.level = level;
  this.imageURL = imageURL;

  (this.uniqueId = function () {
    this.employeeId += numberId;
    numberId++;
    return this.employeeId;
  }),
    (this.salary = function () {
      let min = 0;
      let max = 0;
      if (this.level === "Senior") {
        min = 1500;
        max = 2000;
        return Math.floor(Math.random() * (max - min)) + min;
      } else if (this.level === "Mid-Senior") {
        min = 1000;
        max = 1500;
        return Math.floor(Math.random() * (max - min)) + min;
      } else if (this.level === "Junior") {
        min = 500;
        max = 1000;
        return Math.floor(Math.random() * (max - min)) + min;
      }
    });
  employees.push(this);
}
const ghaziSamer = new Employee("Ghazi Samer", "Administration", "Senior", "");
const lanaAli = new Employee("Lana Ali", "Finance", "Senior", "");
const tamaraAyoub = new Employee("Tamara Ayoub", "Marketing", "Senior", "");
const safiWalid = new Employee(
  "Safi Walid	",
  "Administration",
  "Mid-Senior",
  ""
);
const omarZaid = new Employee("Omar Zaid", "Development", "Senior", "");
const ranaSaleh = new Employee("Rana Saleh", "Development", "Senior", "");
const hadiAhmad = new Employee("Hadi Ahmad", "Finance", "Mid-Senior", "");

for (let i = 0; i < employees.length; i++) {
  console.log(`Employee name: ${employees[i].fullName} `);
  console.log(`Department: ${employees[i].department} `);
  console.log(`Employee salary: ${employees[i].salary()} `);
}

Employee.prototype.writeToHTML = function () {
  document.write(
    `<div class="inner-employees-cards-section">
        <div class="test">
        <img src="${this.imageUrl}" alt="employee pfp" />
        </div>
        <p class="employee-name">${this.fullName}</p>
      
        <div class="to-hide">
        <p class="to-be-hidden">Department / ${this.department}</p>
        <p class="to-be-hidden">${this.level}</p>
        <p class="to-be-hidden">Salary / ${this.salary()} JD</p>
        </div>
      </div>`
  );
};

for (let j = 0; j < employees.length; j++) {
  employees[j].writeToHTML();
}
