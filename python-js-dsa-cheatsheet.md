# Python to JavaScript: Data Structures & Algorithms Cheatsheet

## Basic Syntax Differences

| Concept | Python | JavaScript |
|---------|--------|------------|
| Variable Declaration | `x = 5` | `let x = 5;` or `const x = 5;` or `var x = 5;` |
| Constant Declaration | `X = 5` (convention) | `const X = 5;` |
| Comments | `# Single line comment` | `// Single line comment` |
| Multi-line Comments | `''' Multi-line comment '''` | `/* Multi-line comment */` |
| Function Declaration | `def function_name(params):` | `function functionName(params) {}` or `const functionName = (params) => {};` |
| Conditional Statement | `if condition:` | `if (condition) {}` |
| Loops | `for item in items:` | `for (let i = 0; i < items.length; i++) {}` or `for (const item of items) {}` |
| Class Definition | `class ClassName:` | `class ClassName {}` |
| String Formatting | `f"Hello {name}"` | `` `Hello ${name}` `` |
| Print Statement | `print(value)` | `console.log(value);` |

## Data Types

| Python | JavaScript | Notes |
|--------|------------|-------|
| `int`, `float` | `Number` | JS doesn't distinguish between integers and floats |
| `str` | `String` | Similar string operations, but different methods |
| `bool` | `Boolean` | `True`/`False` vs `true`/`false` |
| `list` | `Array` | Similar purpose, different methods |
| `dict` | `Object` | Key-value pairs |
| `tuple` | No direct equivalent | Can use arrays with `Object.freeze()` |
| `set` | `Set` | Similar purpose in ES6+ |
| `None` | `null` or `undefined` | JS has two "empty" values |

## Arrays (Lists in Python)

### Creation

**Python:**
```python
my_list = [1, 2, 3, 4, 5]
empty_list = []
list_comprehension = [x * 2 for x in range(5)]
```

**JavaScript:**
```javascript
const myArray = [1, 2, 3, 4, 5];
const emptyArray = [];
const arrayMapping = Array.from({length: 5}, (_, i) => i * 2);
// Or
const arrayMapping2 = [...Array(5)].map((_, i) => i * 2);
```

### Common Operations

| Operation | Python | JavaScript |
|-----------|--------|------------|
| Access element | `my_list[0]` | `myArray[0]` |
| Length | `len(my_list)` | `myArray.length` |
| Append | `my_list.append(6)` | `myArray.push(6);` |
| Insert | `my_list.insert(1, 'x')` | `myArray.splice(1, 0, 'x');` |
| Remove | `my_list.remove(3)` | `myArray.splice(myArray.indexOf(3), 1);` |
| Pop last | `my_list.pop()` | `myArray.pop();` |
| Pop first | `my_list.pop(0)` | `myArray.shift();` |
| Add to front | `my_list.insert(0, x)` | `myArray.unshift(x);` |
| Slice | `my_list[1:4]` | `myArray.slice(1, 4);` |
| Check existence | `3 in my_list` | `myArray.includes(3);` |
| Find index | `my_list.index(3)` | `myArray.indexOf(3);` |
| Join | `"".join(my_list)` | `myArray.join("");` |
| Sort | `my_list.sort()` | `myArray.sort();` |
| Reverse | `my_list.reverse()` | `myArray.reverse();` |
| Copy | `my_list.copy()` or `my_list[:]` | `[...myArray]` or `myArray.slice()` |

## Objects (Dictionaries in Python)

### Creation

**Python:**
```python
my_dict = {'name': 'John', 'age': 30}
empty_dict = {}
dict_comp = {x: x*x for x in range(5)}
```

**JavaScript:**
```javascript
const myObj = {name: 'John', age: 30};
const emptyObj = {};
const objWithComputation = Object.fromEntries(
  [...Array(5)].map((_, i) => [i, i*i])
);
```

### Common Operations

| Operation | Python | JavaScript |
|-----------|--------|------------|
| Access value | `my_dict['name']` or `my_dict.get('name')` | `myObj['name']` or `myObj.name` |
| Set value | `my_dict['job'] = 'Developer'` | `myObj['job'] = 'Developer';` or `myObj.job = 'Developer';` |
| Get keys | `my_dict.keys()` | `Object.keys(myObj);` |
| Get values | `my_dict.values()` | `Object.values(myObj);` |
| Get key-value pairs | `my_dict.items()` | `Object.entries(myObj);` |
| Check if key exists | `'name' in my_dict` | `'name' in myObj` or `myObj.hasOwnProperty('name');` |
| Delete key | `del my_dict['name']` | `delete myObj.name;` |
| Merge | `{**dict1, **dict2}` | `{...obj1, ...obj2}` |

## Sets

### Creation

**Python:**
```python
my_set = {1, 2, 3, 4, 5}
empty_set = set()
set_comprehension = {x for x in range(5) if x % 2 == 0}
```

**JavaScript:**
```javascript
const mySet = new Set([1, 2, 3, 4, 5]);
const emptySet = new Set();
const filteredSet = new Set(
  [...Array(5)].map((_, i) => i).filter(x => x % 2 === 0)
);
```

### Common Operations

| Operation | Python | JavaScript |
|-----------|--------|------------|
| Add | `my_set.add(6)` | `mySet.add(6);` |
| Remove | `my_set.remove(3)` | `mySet.delete(3);` |
| Check existence | `3 in my_set` | `mySet.has(3);` |
| Size | `len(my_set)` | `mySet.size` |
| Union | `set_a | set_b` | `new Set([...setA, ...setB]);` |
| Intersection | `set_a & set_b` | `new Set([...setA].filter(x => setB.has(x)));` |
| Difference | `set_a - set_b` | `new Set([...setA].filter(x => !setB.has(x)));` |
| Clear | `my_set.clear()` | `mySet.clear();` |

## Implementing Common Data Structures

### Stack

**Python:**
```python
# Using a list as a stack
stack = []
stack.append(1)  # Push
stack.append(2)
top_item = stack.pop()  # Pop
is_empty = len(stack) == 0
```

**JavaScript:**
```javascript
// Using an array as a stack
const stack = [];
stack.push(1);  // Push
stack.push(2);
const topItem = stack.pop();  // Pop
const isEmpty = stack.length === 0;

// Class implementation
class Stack {
  constructor() {
    this.items = [];
  }
  
  push(element) {
    this.items.push(element);
  }
  
  pop() {
    if(this.items.length === 0) return "Underflow";
    return this.items.pop();
  }
  
  peek() {
    return this.items[this.items.length - 1];
  }
  
  isEmpty() {
    return this.items.length === 0;
  }
}
```

### Queue

**Python:**
```python
# Using collections.deque
from collections import deque
queue = deque()
queue.append(1)  # Enqueue
queue.append(2)
front_item = queue.popleft()  # Dequeue
is_empty = len(queue) == 0
```

**JavaScript:**
```javascript
// Using array (less efficient for large queues)
const queue = [];
queue.push(1);  // Enqueue
queue.push(2);
const frontItem = queue.shift();  // Dequeue
const isEmpty = queue.length === 0;

// Class implementation
class Queue {
  constructor() {
    this.items = {};
    this.frontIndex = 0;
    this.backIndex = 0;
  }
  
  enqueue(element) {
    this.items[this.backIndex] = element;
    this.backIndex++;
  }
  
  dequeue() {
    if(this.frontIndex === this.backIndex) return "Underflow";
    const item = this.items[this.frontIndex];
    delete this.items[this.frontIndex];
    this.frontIndex++;
    return item;
  }
  
  peek() {
    return this.items[this.frontIndex];
  }
  
  isEmpty() {
    return this.frontIndex === this.backIndex;
  }
  
  size() {
    return this.backIndex - this.frontIndex;
  }
}
```

### Linked List

**Python:**
```python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None
    
    def append(self, data):
        new_node = Node(data)
        if not self.head:
            self.head = new_node
            return
        
        current = self.head
        while current.next:
            current = current.next
        current.next = new_node
    
    def print_list(self):
        current = self.head
        while current:
            print(current.data, end=" -> ")
            current = current.next
        print("None")
```

**JavaScript:**
```javascript
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  
  append(data) {
    const newNode = new Node(data);
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
  
  printList() {
    let current = this.head;
    let result = '';
    while (current) {
      result += current.data + ' -> ';
      current = current.next;
    }
    result += 'null';
    console.log(result);
  }
}
```

## Common Algorithms

### Binary Search

**Python:**
```python
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    
    while left <= right:
        mid = (left + right) // 2
        
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    
    return -1  # Target not found
```

**JavaScript:**
```javascript
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  
  return -1;  // Target not found
}
```

### Quick Sort

**Python:**
```python
def quick_sort(arr):
    if len(arr) <= 1:
        return arr
    
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]
    
    return quick_sort(left) + middle + quick_sort(right)
```

**JavaScript:**
```javascript
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  
  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr[pivotIndex];
  
  const left = [];
  const middle = [];
  const right = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else if (arr[i] === pivot) {
      middle.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  
  return [...quickSort(left), ...middle, ...quickSort(right)];
}
```

### Breadth-First Search (for Graphs)

**Python:**
```python
from collections import defaultdict, deque

class Graph:
    def __init__(self):
        self.graph = defaultdict(list)
    
    def add_edge(self, u, v):
        self.graph[u].append(v)
    
    def bfs(self, start):
        visited = set()
        queue = deque([start])
        visited.add(start)
        
        while queue:
            vertex = queue.popleft()
            print(vertex, end=" ")
            
            for neighbor in self.graph[vertex]:
                if neighbor not in visited:
                    visited.add(neighbor)
                    queue.append(neighbor)
```

**JavaScript:**
```javascript
class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  
  addEdge(source, destination) {
    if (!this.adjacencyList[source]) {
      this.addVertex(source);
    }
    if (!this.adjacencyList[destination]) {
      this.addVertex(destination);
    }
    this.adjacencyList[source].push(destination);
  }
  
  bfs(start) {
    const visited = {};
    const queue = [start];
    const result = [];
    visited[start] = true;
    
    while (queue.length) {
      const currentVertex = queue.shift();
      result.push(currentVertex);
      
      this.adjacencyList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    
    return result;
  }
}
```

### Dynamic Programming - Fibonacci

**Python:**
```python
# Memoization approach
def fibonacci(n, memo={}):
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    
    memo[n] = fibonacci(n-1, memo) + fibonacci(n-2, memo)
    return memo[n]

# Tabulation approach
def fibonacci_tab(n):
    if n <= 1:
        return n
    
    fib = [0] * (n + 1)
    fib[1] = 1
    
    for i in range(2, n + 1):
        fib[i] = fib[i-1] + fib[i-2]
    
    return fib[n]
```

**JavaScript:**
```javascript
// Memoization approach
function fibonacci(n, memo = {}) {
  if (n in memo) {
    return memo[n];
  }
  if (n <= 1) {
    return n;
  }
  
  memo[n] = fibonacci(n-1, memo) + fibonacci(n-2, memo);
  return memo[n];
}

// Tabulation approach
function fibonacciTab(n) {
  if (n <= 1) {
    return n;
  }
  
  const fib = Array(n + 1).fill(0);
  fib[1] = 1;
  
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i-1] + fib[i-2];
  }
  
  return fib[n];
}
```

## Important Runtime Environment Differences

1. **Execution Context:**
   - Python: Typically runs in a standalone interpreter
   - JavaScript: Traditionally runs in browsers, but also in Node.js for server-side

2. **Concurrency:**
   - Python: Global Interpreter Lock (GIL) can limit true parallelism
   - JavaScript: Single-threaded with event loop, uses asynchronous programming

3. **Type System:**
   - Python: Strong, dynamic typing with type hints in newer versions
   - JavaScript: Weak, dynamic typing with TypeScript as a typed superset

4. **Memory Management:**
   - Python: Reference counting + garbage collection
   - JavaScript: Automatic garbage collection

5. **Standard Library:**
   - Python: Rich standard library with "batteries included" philosophy
   - JavaScript: Smaller core library, relies more on npm ecosystem

## Asynchronous Programming

**Python:**
```python
import asyncio

async def fetch_data():
    print("Start fetching")
    await asyncio.sleep(2)  # Simulating API call
    print("Done fetching")
    return {"data": "here"}

async def main():
    result = await fetch_data()
    print(result)

asyncio.run(main())
```

**JavaScript:**
```javascript
// Using Promises
function fetchData() {
  console.log("Start fetching");
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Done fetching");
      resolve({data: "here"});
    }, 2000);
  });
}

fetchData().then(result => {
  console.log(result);
});

// Using async/await
async function main() {
  console.log("Start fetching");
  const result = await new Promise((resolve) => {
    setTimeout(() => {
      console.log("Done fetching");
      resolve({data: "here"});
    }, 2000);
  });
  console.log(result);
}

main();
```

## Common Pitfalls When Transitioning

1. **Indentation vs. Braces:**
   - Python uses indentation for code blocks
   - JavaScript uses braces `{}` and semicolons `;`

2. **Variable Scoping:**
   - Python: Block scope doesn't create new scopes (except for functions/classes)
   - JavaScript: Block scope with `let`/`const` but not with `var`

3. **Array Copying:**
   - Python: `new_list = old_list[:]` creates a shallow copy
   - JavaScript: `const newArray = [...oldArray]` or `oldArray.slice()` for shallow copy

4. **Function Arguments:**
   - Python: Has default arguments, `*args`, and `**kwargs`
   - JavaScript: Has default parameters, rest parameters (`...args`)

5. **Truthiness:**
   - Python: Empty collections, `0`, `None`, and empty strings are falsy
   - JavaScript: More values are falsy (`0`, `""`, `null`, `undefined`, `NaN`, `false`)

6. **String Methods:**
   - Python: `str.lower()`, `str.split()`, etc.
   - JavaScript: `str.toLowerCase()`, `str.split()`, etc.

7. **Class Properties:**
   - Python: Defined in `__init__` with `self.property`
   - JavaScript: Defined in `constructor` with `this.property`

## Debugging Tools

**Python:**
```python
import pdb

def problematic_function():
    x = 10
    y = 0
    pdb.set_trace()  # Debugger stops here
    return x / y

# Or using print for quick debugging
print(f"Debug: variable={variable}")
```

**JavaScript:**
```javascript
function problematicFunction() {
  const x = 10;
  const y = 0;
  debugger;  // Debugger stops here in browser dev tools
  return x / y;
}

// Or using console methods
console.log("Debug:", variable);
console.table(arrayOfObjects);  // Displays complex data in table format
console.time("label") && console.timeEnd("label");  // Measures time
```

## Problem-Solving Pattern Comparison

### Pattern: Two Pointers

**Python:**
```python
def has_pair_with_sum(arr, target_sum):
    left, right = 0, len(arr) - 1
    
    while left < right:
        current_sum = arr[left] + arr[right]
        
        if current_sum == target_sum:
            return True
        elif current_sum < target_sum:
            left += 1
        else:
            right -= 1
    
    return False
```

**JavaScript:**
```javascript
function hasPairWithSum(arr, targetSum) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left < right) {
    const currentSum = arr[left] + arr[right];
    
    if (currentSum === targetSum) {
      return true;
    } else if (currentSum < targetSum) {
      left++;
    } else {
      right--;
    }
  }
  
  return false;
}
```

### Pattern: Sliding Window

**Python:**
```python
def max_subarray_sum(arr, k):
    if len(arr) < k:
        return None
    
    max_sum = current_sum = sum(arr[:k])
    
    for i in range(k, len(arr)):
        current_sum = current_sum - arr[i-k] + arr[i]
        max_sum = max(max_sum, current_sum)
    
    return max_sum
```

**JavaScript:**
```javascript
function maxSubarraySum(arr, k) {
  if (arr.length < k) {
    return null;
  }
  
  let maxSum = 0;
  let currentSum = 0;
  
  // Calculate sum of first k elements
  for (let i = 0; i < k; i++) {
    currentSum += arr[i];
  }
  maxSum = currentSum;
  
  // Slide the window
  for (let i = k; i < arr.length; i++) {
    currentSum = currentSum - arr[i - k] + arr[i];
    maxSum = Math.max(maxSum, currentSum);
  }
  
  return maxSum;
}
```

## Resources for Further Learning

1. **JavaScript Documentation**
   - [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
   - [JavaScript.info](https://javascript.info/)

2. **Data Structures & Algorithms in JavaScript**
   - "Grokking Algorithms" by Aditya Bhargava
   - "JavaScript Data Structures and Algorithms" by Sammie Bae

3. **Online Practice**
   - LeetCode (supports both Python and JavaScript)
   - HackerRank (supports both Python and JavaScript)
   - CodeSignal (supports both Python and JavaScript)

4. **JavaScript Runtime Environments**
   - Node.js for server-side JavaScript
   - Chrome DevTools for browser JavaScript debugging
