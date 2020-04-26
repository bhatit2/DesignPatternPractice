/**Creational (Attached file CreationalPattern.js)

I have used factory pattern to delegate the responsibility of object creation to another class
In order to get single instance of employee object, I am using Singleton pattern. 

Structural (Attached file StructuralPattern.js)

A. B.  In order to interact between two classes i.e. OldCalculator and new Calculator in a cleaner manner, I have created a new  class UltimateCalculator which is  using other two classes internally and providing a cleaner interface to user hiding all complexity. This is facade pattern. 

C.Now in order to store the results of previous calculation, I have created CleverCalculator Class which have extended UltimateCalculator functionality by using memoization technique.

D.To enable logging functionality, I have created LoggingDecorator class which acts as a wrapper . This is decorator pattern.

Behavioral (Attached file BehavioralPattern.js)

A. For CumulativeSum Class, I am using Chain of Responsibility Design Pattern.

B. For SpecialMath  Class, I am using Command Pattern.

C. To watch array for any changes, I am using Observer Pattern.
 */

/**Part A, B */
// Facade Pattern
class OldCalculator {
  constructor() {
    this.operations = function(term1, term2, operation) {
      switch (operation) {
        case "add":
          return { res: term1 + term2 };
        case "sub":
          return { res: term1 - term2 };
        default:
          return NaN;
      }
    };
  }
}

class NewCalculator {
  constructor() {
    this.multiply = function(term1, term2) {
      return term1 * term2;
    };
    this.divide = function(term1, term2) {
      return term1 / term2;
    };
  }
}

class UltimateCalculator {
  constructor() {
    this.oldCalculator = new OldCalculator();
    this.newCalculator = new NewCalculator();
  }

  add(term1, term2) {
    return this.oldCalculator.operations(term1, term2, "add");
  }

  sub(term1, term2) {
    return this.oldCalculator.operations(term1, term2, "sub");
  }

  multiply(term1, term2) {
    let res = this.newCalculator.multiply(term1, term2);
    return { res };
  }

  divide(term1, term2) {
    let res = this.newCalculator.divide(term1, term2);
    return { res };
  }
}

const calculator = new UltimateCalculator();
console.log("Adding 10 & 2 should return 12 ", calculator.add(10, 2));
console.log("Subtracting 2 from 10 should return 8 ", calculator.sub(10, 2));
console.log("Multiplying 10 & 2 should return 20 ", calculator.multiply(10, 2));
console.log("Dividing 10 by 2 should return 5 ", calculator.divide(10, 2));

/**Part C */
// Using memoizaton technique, storing results in cache
class CleverCalculator extends UltimateCalculator {
  constructor() {
    super();
    this.cache = {};
  }

  add(term1, term2) {
    let res;
    let key = term1 + "add" + term2;
    if (this.isStoredInCache(key)) {
      res = this.getValueFromCache(key);
    } else {
      res = super.add(term1, term2);
      this.cacheValue(key, res);
    }
    return res;
  }

  sub(term1, term2) {
    let res;
    let key = term1 + "sub" + term2;
    if (this.isStoredInCache(key)) {
      res = this.getValueFromCache(key);
    } else {
      res = super.sub(term1, term2);
      this.cacheValue(key, res);
    }
    return res;
  }

  multiply(term1, term2) {
    let res;
    let key = term1 + "multiply" + term2;
    if (this.isStoredInCache(key)) {
      res = this.getValueFromCache(key);
    } else {
      res = super.multiply(term1, term2);
      this.cacheValue(key, res);
    }
    return res;
  }

  divide(term1, term2) {
    let res;
    let key = term1 + "divide" + term2;
    if (this.isStoredInCache(key)) {
      res = this.getValueFromCache(key);
    } else {
      res = super.divide(term1, term2);
      this.cacheValue(key, res);
    }
    return res;
  }

  cacheValue(key, value) {
    this.cache[key] = value;
  }

  isStoredInCache(key) {
    return this.cache.hasOwnProperty(key);
  }

  getValueFromCache(key) {
    if (this.isStoredInCache(key)) {
      console.log("fetched from cache");
      return this.cache[key];
    }
    return null;
  }
}

/**Part D */
//Decorator Class for logging
class LoggingDecorator {
  constructor(calculator) {
    this.calculator = calculator;
  }

  add(term1, term2) {
    this.log(term1, term2, "Addition");
    return this.calculator.add(term1, term2);
  }

  sub(term1, term2) {
    this.log(term1, term2, "Subtraction");
    return this.calculator.sub(term1, term2);
  }

  multiply(term1, term2) {
    this.log(term1, term2, "Multiplication");
    return this.calculator.multiply(term1, term2);
  }

  divide(term1, term2) {
    this.log(term1, term2, "Division");
    return this.calculator.divide(term1, term2);
  }

  log(term1, term2, operation) {
    console.log(`Operands ${term1} & ${term2}`);
    console.log(`Operation requested : ${operation}`);
  }
}
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
