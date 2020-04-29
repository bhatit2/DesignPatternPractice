import PersonFactory from "./creational/PersonFactory";

import UltimateCalculator from "./structural/UltimateCalculator";
import CleverCalculator from "./structural/CleverCalculator";
import LoggingDecorator from "./structural/LoggingDecorator";
import CumulativeSum from "./behavioral/CumulativeSum";

import { Command, SpecialMath } from "./behavioral/Command";
import { Subject, Observer } from "./behavioral/ArrayObserver";

console.log("*********** Creational Pattern test run ****************");

const personfactory = new PersonFactory();
const shopperAlex = personfactory.create("shopper", "Alex Banks", 100);
const employeeEve = personfactory.create(
  "employee",
  "Eve Porcello",
  100,
  "Epam"
);
const oneMoreEmployee = personfactory.create("employee", "emp2");

console.log("Shopper Alex Banks ", shopperAlex);
console.log("Employee Eve Porcello ", employeeEve);
console.log("One more Employee ", oneMoreEmployee);
console.log(
  "Are both employee instance same(employeeEve === oneMoreEmployee) ? ",
  employeeEve === oneMoreEmployee
);

console.log("*********** Structural Pattern test run ****************");

const calculator = new UltimateCalculator();
console.log("----------- Results from Ultimate Calculator --------------");
console.log("Adding 10 & 2 should return 12 ", calculator.add(10, 2));
console.log("Subtracting 2 from 10 should return 8 ", calculator.sub(10, 2));
console.log("Multiplying 10 & 2 should return 20 ", calculator.multiply(10, 2));
console.log("Dividing 10 by 2 should return 5 ", calculator.divide(10, 2));

console.log(
  "----------- Results from Clever Calculator with Logging --------------"
);

const cleverCalculator = new CleverCalculator();
const cleverCalcWithLog = new LoggingDecorator(cleverCalculator);
console.log(cleverCalcWithLog.add(20, 5));
console.log(cleverCalculator.add(20, 4));
console.log(cleverCalculator.add(20, 4));
console.log(cleverCalculator.sub(20, 4));
console.log(cleverCalculator.sub(20, 4));
console.log(cleverCalculator.multiply(20, 4));
console.log(cleverCalculator.multiply(20, 4));
console.log(cleverCalculator.divide(20, 4));
console.log(cleverCalculator.divide(20, 4));

console.log("*********** Behavioral Pattern test run ****************");

console.log("----------- Results from CumulativeSum --------------");
const sum1 = new CumulativeSum();
const res = sum1
  .add(10)
  .add(2)
  .add(20).sum;
console.log("sum1.add(10).add(2).add(20).sum should equal 32 ", res);

console.log("----------- Results from Command --------------");
const x = new Command(new SpecialMath(5));
x.execute("square");
x.execute("cube");
console.log("Commands executed ", x.commands);

console.log("----------- Results from Array Observer --------------");

const users = ["Alex Banks", "Eve Porcello"];
const subject = new Subject(users);
const observer = new Observer(subject);
subject.push(2);
subject.push(3);
subject.push(4);
subject.reverse();
subject.pop();
subject.concat(["Alex Banks"]);
subject.slice(2);
subject.push(1);
