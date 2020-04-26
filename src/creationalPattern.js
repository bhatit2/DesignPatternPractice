class Person {
  constructor(name = "unnamed person") {
    this.name = name;
  }
}

class Shopper extends Person {
  constructor(name, money = 0) {
    super(name);
    this.money = money;
    this.employed = false;
  }
}
class Employee extends Shopper {
  constructor(name, money = 0, employer = "") {
    super(name, money);
    this.employerName = employer;
    this.employed = true;
  }
}

/** Delegating Object creation responsibility to Person Factory*/
//Factory Patern
class PersonFactory {
  constructor() {
    this.instance = null;
  }

  create(type, name, money = 0, employer = "") {
    let instance;
    switch (type) {
      case "shopper":
        instance = new Shopper(name, money);
        break;
      case "employee":
        //Singleton Pattern
        if (!this.instance) {
          this.instance = new Employee(name, money, employer);
        } else {
          console.warn("An employee instance is already present");
        }
        instance = this.instance;
        break;
      default:
        instance = new Person(name);
    }
    return instance;
  }
}

//Instance of factory
const personfactory = new PersonFactory();
// Shopper Alex Banks and Employee Eve Porcello, each has 100 moneys
const shopperAlex = personfactory.create("shopper", "Alex Banks", 100);
const oneMoreShopper = personfactory.create("shopper", "Test", 200);
const employeeEve = personfactory.create(
  "employee",
  "Eve Porcello",
  100,
  "Epam"
);
const oneMoreEmployee = personfactory.create("employee", "emp2");
console.table("Shopper Alex Banks ", shopperAlex);
console.table("Test Shopper ", oneMoreShopper);
console.table("Employee Eve Porcello ", employeeEve);
console.table("One more Employee ", oneMoreEmployee);
console.log(
  "Are both employee instance same(employeeEve === oneMoreEmployee) ? ",
  employeeEve === oneMoreEmployee
);
