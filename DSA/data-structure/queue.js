class Queue {
  constructor() {
    this.list = [];
  }
  enqueue(ele, ...rest) {
    this.list.push(ele, ...rest);
  }
  dequeue() {
    return this.list.shift();
  }
  peek() {
    return this.list[this.list.length - 1];
  }
  isEmpty() {
    return this.list.length === 0;
  }
  size() {
    return this.list.length;
  }
  print() {
    console.log(this.list);
  }
}

export default Queue;
