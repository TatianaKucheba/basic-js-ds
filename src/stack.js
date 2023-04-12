const { NotImplementedError } = require('../extensions/index.js');

class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack.push(element);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack.slice(-1)[0];
  }
}

module.exports = {
  Stack
};