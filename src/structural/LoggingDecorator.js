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

export default LoggingDecorator;
