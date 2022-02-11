const hcmjs = require('hcm-js');

class Class {
  constructor(log) {
    this.log = log || new hcmjs.Logger();
  }
}