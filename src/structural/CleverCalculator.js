import UltimateCalculator from "./UltimateCalculator";

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

export default CleverCalculator;
