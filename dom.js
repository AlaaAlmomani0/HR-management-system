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

const arr = [employee1, employee2, employee3, employee4, employee5, employee6];
console.log(employee1, employee2, employee3, employee4, employee5, employee6);
//1- اعمل ديف
// 2- اوصل ال body

const body = document.getElementById("body");
const main = document.createElement("div");
main.className = "main";
// وصلت ال بادي عن طريق ال id

for (let x = 0; x < arr.length; x++) {
  const onePerson = document.createElement("div");
  // صناعة ال div بدي انشأ ديف

  body.appendChild(main);
  main.appendChild(onePerson);
  // حطيت ال الديف داخل البادي

  const fullName = document.createElement("p");
  // <p></p>
  const employeeId= document.createElement("p");

  const department = document.createElement("p");

  const level = document.createElement("p");
  const salary = document.createElement("p");
  const img = document.createElement("img");
  img.src = arr[x].imageURL;
  fullName.textContent = `Name : ${arr[x].fullName}`;
  employeeId.textContent = `ID : ${arr[x].employeeId}`;
  // حطيت جوا ال p
  department.textContent = `Department : ${arr[x].department}`;
  level.textContent = `Level : ${arr[x].level}`;
  salary.textContent = `Salary : ${arr[x].salary}`;
  onePerson.appendChild(img);
  onePerson.appendChild(fullName);
  onePerson.appendChild(employeeId);
  // حطيت ال p داخل ال div
  onePerson.appendChild(department);
  onePerson.appendChild(level);
  onePerson.appendChild(salary);
  img.className = "img";
  onePerson.className = "div";
}
