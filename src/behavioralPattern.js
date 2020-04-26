/** Part A */
//Chain of responsibility

class CumulativeSum {
  constructor() {
    this._total = 0;
  }
  add(num) {
    this._total += num;
    return this;
  }
  get sum() {
    return this._total;
  }
}

var sum1 = new CumulativeSum();
console.log(
  sum1
    .add(10)
    .add(2)
    .add(50).sum
);

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
    this._receiver = receiver;
    this._commands = [];
  }

  execute(command) {
    this._commands.push(command);
    this._receiver[command]();
  }
  get commandsExecuted() {
    return this._commands;
  }
}

const x = new Command(new SpecialMath(5));
x.execute("square");
x.execute("cube");

/**Part C */
//Observer Pattern
class Subject {
  constructor(arr) {
    if (Array.isArray(arr)) {
      this.arr = arr;
      this.observers = [];
    } else {
      throw Error("argument type should be array");
    }
  }
  //Methods to subscribe and notify observers
  subscribe(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    let index = this.observers.indexOf(observer);
    this.observers.splice(index, 1);
  }

  notifyObservers(method, res) {
    console.log("Original Array ", this.arr);
    this.observers.forEach(observer => {
      observer.update(method, res);
    });
  }

  // Native Array update methods interceptors
  push(...args) {
    let res = this.arr.push.apply(this.arr, args);
    this.notifyObservers("push", res);
  }

  pop() {
    let res = this.arr.pop.apply(this.arr);
    this.notifyObservers("pop", res);
  }

  concat(...args) {
    let res = this.arr.concat.apply(this.arr, args);
    this.notifyObservers("concat", res);
  }

  copyWithin(...args) {
    let res = this.arr.copyWithin.apply(this.arr, args);
    this.notifyObservers("copyWithin", res);
  }

  reverse() {
    let res = this.arr.reverse.apply(this.arr);
    this.notifyObservers("reverse", res);
  }

  shift() {
    let res = this.arr.shift.apply(this.arr);
    this.notifyObservers("shift", res);
  }

  unshift(...args) {
    let res = this.arr.unshift.apply(this.arr, args);
    this.notifyObservers("unshift", res);
  }

  slice(...args) {
    let res = this.arr.slice.apply(this.arr, args);
    this.notifyObservers("slice", res);
  }

  sort(...args) {
    let res = this.arr.sort.apply(this.arr, args);
    this.notifyObservers("sort", res);
  }

  join(...args) {
    let res = this.arr.join.apply(this.arr, args);
    this.notifyObservers("join", res);
  }

  map(...args) {
    let res = this.arr.map.apply(this.arr, args);
    this.notifyObservers("map", res);
  }

  reduce(...args) {
    let res = this.arr.map.apply(this.arr, args);
    this.notifyObservers("map", res);
  }
}

class Observer {
  constructor(subject) {
    this.subject = subject;
    this.subject.subscribe(this);
  }
  update(method, res) {
    console.log("Operation :", method);
    console.log("Returned Value : ", res);
  }
}

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
