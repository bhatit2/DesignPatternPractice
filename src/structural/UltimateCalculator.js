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

export default UltimateCalculator;
