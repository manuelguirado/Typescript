//stack implementation LIFO (Last In First Out)
class qeue<T> {
  private data: T[] = [];
  enqueue(item: T) {
    this.data.push(item);
  }
  deqeue(): T | undefined {
    return this.data.shift();
  }
  front(): T | undefined {
    return this.data[0];
  }
  isEmpty(): boolean {
    return this.data.length === 0;
  }
  size(): number {
    return this.data.length;
  }
}
console.log("qeue");
const q = new qeue<number>();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q.deqeue());
console.log(q.front());
console.log(q.size());
console.log(q.isEmpty());
//linked list implementation
class node<T> {
  data: T;
  next: node<T> | null;
  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}
class linkedList<T> {
  head: node<T> | null;
  constructor() {
    this.head = null;
  }
  //add method
  add(data: T) {
    const newNode = new node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
  //remove method
  remove(data: T) {
    if (!this.head) {
      return;
    }
    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }
  //search method
  search(data: T) {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        return `found ${data}`;
      }
      current = current.next;
    }
  }
  //travesal method
  travesal() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
  //size method

  size() {
    let current = this.head;
    let count = 0;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }
  //isEmpty method
  isEmpty() {
    return this.head === null;
  }
  //update method
  update(data: T, newData: T) {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        current.data = newData;
        return;
      }
      current = current.next;
    }
    console.log("data not found");
  }
}
class stacks<T> {
  private data: T[] = [];
  push(element: T) {
    this.data.push(element);
  }
  pop(): T | undefined {
    return this.data.pop();
  }
  isEmpty() {
    return this.data.length === 0;
  }
  size() {
    return this.data.length;
  }
  top() {
    return this.data[this.data.length - 1];
  }
}

console.log("linked list");
const ll = new linkedList<number>();
ll.add(1);
ll.add(2);
ll.add(3);
ll.add(4);
ll.remove(3);
ll.travesal();
console.log(ll.search(2));
console.log(ll.size());
console.log(JSON.stringify(ll.head, null, 2));
//tuple implementation
let tuple: [number, string, boolean] = [1, "hello", true];
console.log("tuple");
//stack implementation
let stack = new stacks<number>();
stack.push(1);
stack.push(2);
stack.push(3);
stack.size();
stack.pop();
console.log(stack.top());
console.log(stack.isEmpty());
console.log(stack.size());
//tree implementation
class treeNode {
  value: number;
  left: treeNode | null;
  right: treeNode | null;
  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class binaryTree {
  root: treeNode | null;
  constructor() {
    this.root = null;
  }
  insert(value: number): void {
    this.root = this.insertNode(this.root, value);
  }
  private insertNode(root: treeNode | null, value: number): treeNode {
    if (!root) {
      return new treeNode(value);
    }
    //insert nodes
    if (value < root.value) {
      root.left = this.insertNode(root.left, value);
    } else {
      root.right = this.insertNode(root.right, value);
    }
    return root;
  }
  inOrderTraversal() {
    const result: number[] = [];
    this.inOrderTraversalNode(this.root, result);
    return result;
  }
  private inOrderTraversalNode(root: treeNode | null, result: number[]): void {
    if (root) {
      this.inOrderTraversalNode(root.left, result);
      result.push(root.value);
      this.inOrderTraversalNode(root.right, result);
    }
  }
  leafnodes() {
    return this.leafnodesNode(this.root);
  }
  private leafnodesNode(root: treeNode | null): number {
    if (!root) {
      return 0;
    }
    if (!root.left && !root.right) {
      return 1;
    }
    return this.leafnodesNode(root.left) + this.leafnodesNode(root.right);
  }
  height() {
    return this.heightNode(this.root);
  }
  private heightNode(root: treeNode | null): number {
    if (!root) {
      return 0;
    }
    const leftHeight = this.heightNode(root.left);
    const rightHeight = this.heightNode(root.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }
  search(value: number) {
    return this.searchNode(this.root, value);
  }
  private searchNode(root: treeNode | null, value: number): boolean {

    if ( !root){
      return false;
    }
    if (root.value === value){
      return true;
    }
    if (value < root.value){
      return this.searchNode(root.left, value);
    }
    return this.searchNode(root.right, value);
}
}
let bt = new binaryTree();
bt.insert(10);
bt.insert(5);
bt.insert(15);
bt.insert(3);
bt.insert(7);
bt.insert(12);
bt.insert(17);
console.log("binary tree");
console.log(bt.inOrderTraversal());
console.log(bt.leafnodes());
console.log(bt.height());
console.log(bt.search(12));
//graph implementation
class graph{
  adjacencyList : Map<string, string[]>;
  constructor(){
    this.adjacencyList = new Map();
  }
  addVertex(vertex : string){
    if(!this.adjacencyList.has(vertex)){
      this.adjacencyList.set(vertex, []);
    }
  }
  addEdge(vertex1 : string, vertex2 : string){
    this.adjacencyList.get(vertex1)?.push(vertex2);
    this.adjacencyList.get(vertex2)?.push(vertex1);
  }
  depthFirstTraversal(startVertex : string) : string[]{
     const visited : Set<string> = new Set();
     const result : string[] = [];
     const dfs = (vertex : string) => {
        visited.add(vertex);
        result.push(vertex);
        const neighbors = this.adjacencyList.get(vertex) || [];
        for ( const neighbor of neighbors){
          if(!visited.has(neighbor)){
            dfs(neighbor);
          }
        } 
       
       

  }
  dfs(startVertex);
  return result;
}

}
console.log("graph");
let g  = new graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
for (const [key, value] of g.adjacencyList) {
  console.log(key, value);
}

console.log("depth first traversal", g.depthFirstTraversal('A'));
//hash table implementation
class hashTable<T> {
    table: { [key : string] : T[]   };
    constructor(){
      this.table = {};
    }
    insert(key : string, value : T) : void{
       if (!this.table[key]){
          this.table[key] = [];
        }
        this.table[key].push(value);

    }
    search(key : string) : T[] | undefined{ 
      return this.table[key];
    }
}
console.log("hash table");
const stringHash = new hashTable<string>();
stringHash.insert("name", "john");
stringHash.insert("name", "doe"); 
stringHash.insert("name", "smith");
console.log(stringHash.search("name"));
//Heap implementation
class minHeap{
  private heap  : number[];
  constructor(){
    this.heap = [];
  }
  insert(value : number){
    this.heap.push(value);
    this.bubbleUp(this.heap.length - 1);
  }
  extractMin() : number | undefined{
     if (this.heap.length === 0){
        return undefined;
     }
     const min = this.heap[0];
     const lastElement = this.heap.pop();
     if (this.heap.length > 0 && lastElement !== undefined) {
        this.heap[0] = lastElement;
        this.bubbleDown(0);
     }
      return min;
  }
  private bubbleUp(index : number) : void{
    while (index > 0){
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] <= this.heap[index]){
          break;
      }
      [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
      index = parentIndex;
    }
}
 private bubbleDown(index : number) : void{
    while (true){

      const  leftChildIndex = 2 *  index + 1;
      const  rightChildIndex = 2 * index + 2;
      let smallestIndex = index;
      if (this.heap[leftChildIndex] < this.heap[smallestIndex]){
          smallestIndex = leftChildIndex;
      }
      if(this.heap[rightChildIndex] < this.heap[smallestIndex]){
          smallestIndex = rightChildIndex;
      }
      if (smallestIndex === index){
          break;
      }
      [this.heap[index], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[index]];
      index = smallestIndex;

}
}
}
console.log("min heap");
const mh = new minHeap();
mh.insert(10);
mh.insert(5);
mh.insert(15);  
mh.insert(3);
mh.insert(7);
console.log(mh.extractMin());
console.log(mh);