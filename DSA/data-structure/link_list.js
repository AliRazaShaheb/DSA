class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// === approach -1
// const printLinkList = (head) => {
//   let current = head;
//   while (current !== null) {
//     console.log(current.value);
//     current = current.next;
//   }
// };

// === approach -2
// const printLinkList = (head) => {
//   if (head === null) return;
//   console.log(head.value);
//   printLinkList(head.next);
// };

// === approach -3
// const printLinkList = (head) => {
//   let current = head;
//   const valueHolder = [];
//   while (current !== null) {
//     valueHolder.push(current.value);
//     current = current.next;
//   }
//   return valueHolder;
// };

// === approach -4
const printLinkList = (head) => {
  const valueHolder = [];
  fillValues(head, valueHolder);
  return valueHolder;
};

const fillValues = (head, arr) => {
  if (head === null) return;
  arr.push(head.value);
  fillValues(head.next, arr);
};

// sum of link list

const printLinkListSum = (head) => {
  const arr = [];
  let sum = 0;
  sumLL(head, arr);
  // sum option-1
  // for (let v of arr) {
  //   sum += +v;
  // }
  // sum option-2
  // sum = arr.reduce((acc, curr)=> {
  //   return acc + parseFloat(curr)
  // },0)

  // sum option -3;
  // arr.forEach((each) => {
  //   sum += Number(each);
  // });

  // sum option -4 recursively
  const recusive_sum = (arr) =>
    arr.length === 1 ? arr[0] : arr.pop() + recusive_sum(arr);
  sum = recusive_sum(arr);
  return sum;
};

function sumLL(head, arr) {
  if (head === null) return;
  // arr.push(head.value);
  arr.push(Number(head.value));
  sumLL(head.next, arr);
}

export { Node, printLinkList, printLinkListSum };
