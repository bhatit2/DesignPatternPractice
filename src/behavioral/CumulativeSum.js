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

export default CumulativeSum;
