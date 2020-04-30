/**Part B */
//Command Pattern
class SpecialMath {
  constructor(num) {
    this._num = num;
  }

  square() {
    return this._num ** 2;
  }

  cube() {
    return this._num ** 3;
  }

  squareRoot() {
    return Math.sqrt(this._num);
  }
}

class Command {
  constructor(receiver) {
    this.receiver = receiver;
    this.commands = [];
  }

  execute(command) {
    if (this.receiver[command]) {
      this.commands.push(command);
      this.receiver[command]();
    } else {
      console.log(`${command} isn't supported`);
    }
  }
  get commandsExecuted() {
    return this.commands;
  }
}

export { SpecialMath, Command };
