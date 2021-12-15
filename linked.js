class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    (this.head = null), (this.size = 0);
  }
  insertFirst(value) {
    this.head = new Node(value, this.head);
    this.size++;
  }
  printListData() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
  insertLast(value) {
    let node = new Node(value, null);
    let current;
    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }
  clearList() {
    this.head = null;
    this.size = 0;
  }
  insertAt(data, index) {
    if (index > 0 && index > this.size) {
      return;
    }
    if (index == 0) {
      this.insertFirst(data);
      return;
    }
    const node = new Node(data); // value = 17, next = null
    let current, previous;

    current = this.head;
    let count = 0;
    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }
    node.next = current;
    previous.next = node;
    this.size++;
  }
  getAt(index) {
    let current = this.head;
    let count = 0;
    while (count < index) {
      current = current.next;
      count++;
    }
    console.log(current.value);
  }
  removeAt(index) {
    if (index > 0 && index > this.size) return;

    let current = this.head,
      previous,
      count = 0;

    if (index == 0) {
      this.head = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.size--;
  }
}

const list1 = new LinkedList();
list1.insertFirst(10);
list1.insertFirst(15);
list1.insertFirst(20);
list1.insertLast(5);
list1.insertAt(17, 1);
list1.printListData();
console.log(JSON.stringify(list1));
list1.removeAt(2);