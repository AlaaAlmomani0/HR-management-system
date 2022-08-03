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
