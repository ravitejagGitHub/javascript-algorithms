//const MinHeap = require("./src/data-structures/heap/MinHeap");
import MinHeap from "./src/data-structures/heap/MinHeap";

const minheap = new MinHeap();
minheap.add(3);
minheap.add(2);
minheap.add(4);
minheap.add(1);
minheap.add(6);
console.log(minheap);
