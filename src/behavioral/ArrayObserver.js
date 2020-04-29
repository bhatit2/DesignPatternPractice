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

export { Subject, Observer };
