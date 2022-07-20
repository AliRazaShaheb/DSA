class Stack {
  constructor() {
    this.arr = [];
  }
  push(element, ...rest) {
    this.arr.push(element, ...rest);
  }

  pop() {
    return this.arr.pop();
  }
  peek() {
    return this.arr[this.arr.length - 1];
  }
  size() {
    return this.arr.length;
  }
  isEmpty() {
    return this.arr.length === 0;
  }
  print() {
    return console.log(this.arr.toString());
  }
}

export default Stack;
