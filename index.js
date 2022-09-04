// Import stylesheets
import "./style.css";
import { Fibonacci } from "./DSA/fibonacci";
import { Factorial } from "./DSA/factorial";
import { isPrimeNum } from "./DSA/primeNumber";
import { PowerOf, isPowerOf2 } from "./DSA/powerOf";
import Stack from "./DSA/data-structure/stack";
import Queue from "./DSA/data-structure/queue";
import {
  printLinkList,
  Node,
  printLinkListSum
} from "./DSA/data-structure/link_list";
// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>DATA STRUCTURE & ALGORITHM</h1>`;
console.clear();
// Q1 - Fibonacci Number
// console.log(Fibonacci(10)); // [0,1,1,3,5,7,9,11,13,15] = 65

// Q2 - Factorial Number
// console.log(Factorial(5)); //[4*3*2*1] = 24

//Q3 - Prime Number
// console.log(isPrimeNum(3));

// Q4 - Power of Two
// console.log(PowerOf(2, 10));

// Q5 - is power of two
// console.log(isPowerOf2(99));

/**
 * data structure
 */
//STACK
// const stack = new Stack();
// stack.push("hello from push");
// stack.push("123", "world", "javascript", "typescript");
// console.log(stack.print());
// console.log(stack.pop());
// console.log(stack.size());
// console.log(stack.print());

//QUEUE
// const queue = new Queue();
// queue.enqueue("hello", "bhaisahab", "not sure", "what");
// queue.dequeue();
// console.log(queue.print());
// queue.enqueue("ali raza")
// console.log(queue.isEmpty())

// LINK LIST
const a = new Node("10");
const b = new Node("20");
const c = new Node("30");
const d = new Node("40");
const e = new Node("50");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(printLinkList(a));
console.log(printLinkListSum(a));
