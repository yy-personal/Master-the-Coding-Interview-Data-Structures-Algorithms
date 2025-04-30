# Python to TypeScript: Data Structures & Algorithms Cheatsheet

## Basic Syntax Differences

| Concept | Python | TypeScript |
|---------|--------|------------|
| Variable Declaration | `x = 5` | `let x: number = 5;` or `const x: number = 5;` |
| Type Annotation | `x: int = 5` (type hints) | `let x: number = 5;` |
| Constant Declaration | `X = 5` (convention) | `const X: number = 5;` |
| Comments | `# Single line comment` | `// Single line comment` |
| Multi-line Comments | `''' Multi-line comment '''` | `/* Multi-line comment */` |
| Function Declaration | `def function_name(param: type) -> return_type:` | `function functionName(param: Type): ReturnType {}` or `const functionName = (param: Type): ReturnType => {};` |
| Conditional Statement | `if condition:` | `if (condition) {}` |
| Loops | `for item in items:` | `for (let i = 0; i < items.length; i++) {}` or `for (const item of items) {}` |
| Class Definition | `class ClassName:` | `class ClassName {}` |
| String Formatting | `f"Hello {name}"` | `` `Hello ${name}` `` |
| Print Statement | `print(value)` | `console.log(value);` |

## Data Types

| Python | TypeScript | Notes |
|--------|------------|-------|
| `int`, `float` | `number` | TS doesn't distinguish between integers and floats |
| `str` | `string` | Note the lowercase in TypeScript |
| `bool` | `boolean` | `True`/`False` vs `true`/`false` |
| `list` | `Array<T>` or `T[]` | Generic arrays with type parameter |
| `dict` | `Record<K, V>` or `{ [key: K]: V }` | Type-safe key-value pairs |
| `tuple` | `[T, U, V]` | Fixed-length array with specified types |
| `set` | `Set<T>` | Generic set with type parameter |
| `Union types` | `x: int or str` | `x: number \| string` |
| `Optional types` | `x: Optional[int]` | `x?: number` or `x: number \| undefined` |
| `None` | `null` or `undefined` | TypeScript has two "empty" values |

## Arrays (Lists in Python)

### Creation

**Python:**
```python
my_list = [1, 2, 3, 4, 5]
empty_list = []
list_comprehension = [x * 2 for x in range(5)]
typed_list: list[int] = [1, 2, 3]  # Python 3.9+
```

**TypeScript:**
```typescript
const myArray: number[] = [1, 2, 3, 4, 5];
// Alternative syntax
const myArray2: Array<number> = [1, 2, 3, 4, 5];
const emptyArray: number[] = [];
const arrayMapping: number[] = Array.from({length: 5}, (_, i) => i * 2);
// Or
const arrayMapping2: number[] = [...Array(5)].map((_, i) => i * 2);
```

### Common Operations

| Operation | Python | TypeScript |
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
| Map | `[x * 2 for x in my_list]` | `myArray.map(x => x * 2);` |
| Filter | `[x for x in my_list if x > 2]` | `myArray.filter(x => x > 2);` |
| Reduce | `sum(my_list)` | `myArray.reduce((acc, curr) => acc + curr, 0);` |

## Objects (Dictionaries in Python)

### Creation

**Python:**
```python
my_dict = {'name': 'John', 'age': 30}
empty_dict = {}
dict_comp = {x: x*x for x in range(5)}
typed_dict: dict[str, int] = {'a': 1, 'b': 2}  # Python 3.9+
```

**TypeScript:**
```typescript
// Interface definition
interface Person {
  name: string;
  age: number;
}

// Type alias
type NumericDict = Record<string, number>;

// Object with explicit interface
const myObj: Person = { name: 'John', age: 30 };

// Object with inferred types
const myObj2 = { name: 'John', age: 30 }; // TS infers types

// Empty object with type
const emptyObj: Record<string, number> = {};

// Using Record utility type
const numberSquares: Record<number, number> = {};
for (let i = 0; i < 5; i++) {
  numberSquares[i] = i * i;
}

// Index signature
const dict: { [key: string]: number } = {};
```

### Common Operations

| Operation | Python | TypeScript |
|-----------|--------|------------|
| Access value | `my_dict['name']` or `my_dict.get('name')` | `myObj['name']` or `myObj.name` |
| Set value | `my_dict['job'] = 'Developer'` | `myObj['job'] = 'Developer';` or `myObj.job = 'Developer';` |
| Get keys | `my_dict.keys()` | `Object.keys(myObj);` |
| Get values | `my_dict.values()` | `Object.values(myObj);` |
| Get key-value pairs | `my_dict.items()` | `Object.entries(myObj);` |
| Check if key exists | `'name' in my_dict` | `'name' in myObj` or `myObj.hasOwnProperty('name');` |
| Delete key | `del my_dict['name']` | `delete myObj.name;` |
| Merge | `{**dict1, **dict2}` | `{...obj1, ...obj2}` |
| Type checking | `isinstance(value, dict)` | `typeof value === 'object' && value !== null` |

## Sets

### Creation

**Python:**
```python
my_set = {1, 2, 3, 4, 5}
empty_set = set()
set_comprehension = {x for x in range(5) if x % 2 == 0}
typed_set: set[int] = {1, 2, 3}  # Python 3.9+
```

**TypeScript:**
```typescript
const mySet: Set<number> = new Set([1, 2, 3, 4, 5]);
const emptySet: Set<number> = new Set();
const filteredSet: Set<number> = new Set(
  [...Array(5)].map((_, i) => i).filter(x => x % 2 === 0)
);
```

### Common Operations

| Operation | Python | TypeScript |
|-----------|--------|------------|
| Add | `my_set.add(6)` | `mySet.add(6);` |
| Remove | `my_set.remove(3)` | `mySet.delete(3);` |
| Check existence | `3 in my_set` | `mySet.has(3);` |
| Size | `len(my_set)` | `mySet.size` |
| Union | `set_a \| set_b` | `new Set([...setA, ...setB]);` |
| Intersection | `set_a & set_b` | `new Set([...setA].filter(x => setB.has(x)));` |
| Difference | `set_a - set_b` | `new Set([...setA].filter(x => !setB.has(x)));` |
| Clear | `my_set.clear()` | `mySet.clear();` |
| Convert to array | `list(my_set)` | `Array.from(mySet);` or `[...mySet]` |

## Tuples

### Creation

**Python:**
```python
my_tuple = (1, 'hello', True)
empty_tuple = ()
single_item_tuple = (1,)
# Type annotations
point: tuple[int, int] = (10, 20)  # Python 3.9+
```

**TypeScript:**
```typescript
// Define a tuple type
type StringNumberPair = [string, number];
type Point = [number, number];

// Create tuples
const myTuple: [number, string, boolean] = [1, 'hello', true];
// Error if types don't match:
// const wrongTuple: [number, string] = [1, 2];

// Empty tuple
const emptyTuple: [] = [];

// Named tuple (using interface)
interface NamedPoint {
  x: number;
  y: number;
}
const point: NamedPoint = { x: 10, y: 20 };
```

### Operations

| Operation | Python | TypeScript |
|-----------|--------|------------|
| Access element | `my_tuple[0]` | `myTuple[0]` |
| Length | `len(my_tuple)` | `myTuple.length` |
| Destructuring | `a, b, c = my_tuple` | `const [a, b, c] = myTuple;` |
| Readonly | `my_tuple` (tuples are immutable) | `const myTuple: readonly [number, string] = [1, "hello"];` |

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

**TypeScript:**
```typescript
// Using a class with generics
class Stack<T> {
  private items: T[] = [];
  
  push(element: T): void {
    this.items.push(element);
  }
  
  pop(): T | undefined {
    return this.items.pop();
  }
  
  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }
  
  isEmpty(): boolean {
    return this.items.length === 0;
  }
  
  size(): number {
    return this.items.length;
  }
}

// Usage
const stack = new Stack<number>();
stack.push(1);
stack.push(2);
const topItem = stack.pop();
const isEmpty = stack.isEmpty();
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

**TypeScript:**
```typescript
class Queue<T> {
  private items: { [key: number]: T } = {};
  private frontIndex: number = 0;
  private backIndex: number = 0;
  
  enqueue(element: T): void {
    this.items[this.backIndex] = element;
    this.backIndex++;
  }
  
  dequeue(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    
    const item = this.items[this.frontIndex];
    delete this.items[this.frontIndex];
    this.frontIndex++;
    return item;
  }
  
  peek(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.frontIndex];
  }
  
  isEmpty(): boolean {
    return this.frontIndex === this.backIndex;
  }
  
  size(): number {
    return this.backIndex - this.frontIndex;
  }
}

// Usage
const queue = new Queue<number>();
queue.enqueue(1);
queue.enqueue(2);
const frontItem = queue.dequeue();
const isEmpty = queue.isEmpty();
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

**TypeScript:**
```typescript
class Node<T> {
  data: T;
  next: Node<T> | null;
  
  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList<T> {
  private head: Node<T> | null = null;
  
  append(data: T): void {
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
  
  prepend(data: T): void {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }
  
  delete(data: T): void {
    if (!this.head) {
      return;
    }
    
    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }
    
    let current = this.head;
    while (current.next && current.next.data !== data) {
      current = current.next;
    }
    
    if (current.next) {
      current.next = current.next.next;
    }
  }
  
  find(data: T): Node<T> | null {
    if (!this.head) {
      return null;
    }
    
    let current = this.head;
    while (current && current.data !== data) {
      current = current.next;
    }
    
    return current;
  }
  
  printList(): void {
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

// Usage
const linkedList = new LinkedList<number>();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.printList(); // Output: 1 -> 2 -> 3 -> null
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

**TypeScript:**
```typescript
function binarySearch<T>(arr: T[], target: T): number {
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

// For numeric arrays, using type constraint
function numericBinarySearch<T extends number>(arr: T[], target: T): number {
  // Same implementation
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

**TypeScript:**
```typescript
function quickSort<T>(arr: T[]): T[] {
  if (arr.length <= 1) {
    return arr;
  }
  
  const pivotIndex = Math.floor(arr.length / 2);
  const pivot = arr[pivotIndex];
  
  const left: T[] = [];
  const middle: T[] = [];
  const right: T[] = [];
  
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

// Version with comparable constraint
function quickSortComparable<T extends number | string>(arr: T[]): T[] {
  // Same implementation, but now only works with types that can be compared with < >
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

**TypeScript:**
```typescript
class Graph<T> {
  private adjacencyList: Map<T, T[]> = new Map();
  
  addVertex(vertex: T): void {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }
  
  addEdge(source: T, destination: T): void {
    this.addVertex(source);
    this.addVertex(destination);
    this.adjacencyList.get(source)!.push(destination);
  }
  
  bfs(start: T): T[] {
    const visited = new Set<T>();
    const queue: T[] = [start];
    const result: T[] = [];
    visited.add(start);
    
    while (queue.length) {
      const currentVertex = queue.shift()!;
      result.push(currentVertex);
      
      const neighbors = this.adjacencyList.get(currentVertex) || [];
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
    
    return result;
  }
  
  dfs(start: T): T[] {
    const visited = new Set<T>();
    const result: T[] = [];
    
    const dfsHelper = (vertex: T): void => {
      visited.add(vertex);
      result.push(vertex);
      
      const neighbors = this.adjacencyList.get(vertex) || [];
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          dfsHelper(neighbor);
        }
      }
    };
    
    dfsHelper(start);
    return result;
  }
}

// Usage
const graph = new Graph<string>();
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
console.log(graph.bfs('A')); // Output: ['A', 'B', 'C', 'D', 'E']
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

**TypeScript:**
```typescript
// Memoization approach
function fibonacci(n: number, memo: Record<number, number> = {}): number {
  if (n in memo) {
    return memo[n];
  }
  if (n <= 1) {
    return n;
  }
  
  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}

// Tabulation approach
function fibonacciTab(n: number): number {
  if (n <= 1) {
    return n;
  }
  
  const fib: number[] = Array(n + 1).fill(0);
  fib[1] = 1;
  
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  
  return fib[n];
}
```

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

**TypeScript:**
```typescript
// Using Promises
function fetchData(): Promise<{data: string}> {
  console.log("Start fetching");
  return new Promise<{data: string}>((resolve) => {
    setTimeout(() => {
      console.log("Done fetching");
      resolve({data: "here"});
    }, 2000);
  });
}

// Using async/await
async function main(): Promise<void> {
  console.log("Start fetching");
  const result = await fetchData();
  console.log(result);
}

main();

// Type-safe handling of async operations
interface ApiResponse<T> {
  data: T;
  status: number;
}

async function fetchTypedData<T>(url: string): Promise<ApiResponse<T>> {
  const response = await fetch(url);
  const data: T = await response.json();
  return {
    data,
    status: response.status
  };
}

// Usage
interface User {
  id: number;
  name: string;
}

async function getUser(id: number): Promise<User> {
  const response = await fetchTypedData<User>(`/api/users/${id}`);
  return response.data;
}
```

## TypeScript-Specific Features

### Type Interfaces and Type Aliases

```typescript
// Interface for objects
interface User {
  id: number;
  name: string;
  email: string;
  age?: number;  // Optional property
  readonly createdAt: Date;  // Read-only property
}

// Extending interfaces
interface Employee extends User {
  department: string;
  salary: number;
}

// Type alias (can be used for more than just objects)
type ID = string | number;

type Point = {
  x: number;
  y: number;
};

// Union types
type Result<T> = {
  success: true;
  value: T;
} | {
  success: false;
  error: string;
};

// Usage of Result type
function divide(a: number, b: number): Result<number> {
  if (b === 0) {
    return {
      success: false,
      error: "Cannot divide by zero"
    };
  }
  
  return {
    success: true,
    value: a / b
  };
}

// Type inference with result
const result = divide(10, 2);
if (result.success) {
  // TypeScript knows result.value is a number here
  console.log(result.value);
} else {
  // TypeScript knows result.error is a string here
  console.log(result.error);
}
```

### Generics

```typescript
// Generic function
function identity<T>(arg: T): T {
  return arg;
}

const num = identity<number>(42);  // Explicitly specify number
const str = identity("hello");     // TypeScript infers string

// Generic interface
interface Repository<T> {
  findById(id: number): T;
  findAll(): T[];
  save(item: T): void;
}

// Implementing generic interface
class UserRepository implements Repository<User> {
  private users: User[] = [];
  
  findById(id: number): User {
    const found = this.users.find(user => user.id === id);
    if (!found) {
      throw new Error(`User with id ${id} not found`);
    }
    return found;
  }
  
  findAll(): User[] {
    return this.users;
  }
  
  save(user: User): void {
    this.users.push(user);
  }
}

// Generic constraints
interface Lengthwise {
  length: number;
}

function logLength<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);  // OK because we constrained T to have .length
  return arg;
}

logLength("hello");  // Works with strings
logLength([1, 2, 3]);  // Works with arrays
// logLength(123);  // Error: number doesn't have .length
```

### Utility Types

TypeScript provides built-in utility types to facilitate common type transformations:

```typescript
// Define a base interface
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

// Partial - makes all properties optional
type PartialUser = Partial<User>;
// Equivalent to: { id?: number; name?: string; email?: string; password?: string; }

// Required - makes all properties required
type RequiredUser = Required<PartialUser>;
// Back to: { id: number; name: string; email: string; password: string; }

// Pick - select a subset of properties
type UserCredentials = Pick<User, 'email' | 'password'>;
// Equivalent to: { email: string; password: string; }

// Omit - remove specific properties
type PublicUser = Omit<User, 'password'>;
// Equivalent to: { id: number; name: string; email: string; }

// Record - create a type with specified properties
type UserRoles = Record<string, string>;
// Equivalent to: { [key: string]: string }

// Readonly - make all properties readonly
type ReadonlyUser = Readonly<User>;
// All properties become readonly

// Example usage of utility types
function updateUser(id: number, userUpdate: Partial<User>): void {
  // Only need to provide the fields to update, not the entire user object
}

updateUser(1, { name: "New Name" });  // Valid
```

## Debugging in TypeScript

```typescript
// Basic logging
console.log("Debug:", variable);
console.table(arrayOfObjects);  // Displays complex data in table format
console.time("operation") && console.timeEnd("operation");  // Measures time

// TypeScript-specific debugging with type assertions
function debugValue<T>(value: T): T {
  console.log(typeof value, value);
  return value;
}

// Type guards for debugging
function isError(obj: any): obj is Error {
  return obj instanceof Error;
}

function processResult(result: unknown): void {
  if (isError(result)) {
    console.error("Error occurred:", result.message);
    // TypeScript now knows result is an Error
  } else {
    console.log("Success:", result);
  }
}
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

**TypeScript:**
```typescript
function hasPairWithSum(arr: number[], targetSum: number): boolean {
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

**TypeScript:**
```typescript
function maxSubarraySum(arr: number[], k: number): number | null {
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

## Common Pitfalls When Transitioning

1. **Type Checking:**
   - Python: `isinstance(obj, Type)`
   - TypeScript: Type guards like `typeof obj === 'string'` or `obj instanceof Class`

2. **Variable Scoping:**
   - Python: Block scope doesn't create new scopes (except for functions/classes)
   - TypeScript: Block scope with `let`/`const` follows JavaScript rules

3. **Null Checking:**
   - Python: `if x is None`
   - TypeScript: `if (x === null)` or `if (x === undefined)` or `if (x == null)` for both

4. **Optional Arguments:**
   - Python: `def func(arg=default_value)`
   - TypeScript: `function func(arg: Type = defaultValue)` or `function func(arg?: Type)`

5. **String Methods:**
   - Python: `str.lower()`, `str.split()`
   - TypeScript: `str.toLowerCase()`, `str.split()`

6. **Class Properties:**
   - Python: Defined in `__init__` with `self.property`
   - TypeScript: Defined in the class body or constructor with `this.property`

7. **Truthy/Falsy Values:**
   - Python: Empty collections, `0`, `None`, and empty strings are falsy
   - TypeScript: Follows JavaScript rules (`0`, `""`, `null`, `undefined`, `NaN`, `false`)

8. **Error Handling:**
   - Python: `try/except/finally`
   - TypeScript: `try/catch/finally`

## Resources for Further Learning

1. **TypeScript Documentation**
   - [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
   - [TypeScript Playground](https://www.typescriptlang.org/play)

2. **Data Structures & Algorithms in TypeScript**
   - "Hands-On Data Structures and Algorithms with TypeScript" by Bhargav Ponnapalli
   - "Data Structures and Algorithms in TypeScript" (various online courses)

3. **Online Practice**
   - LeetCode (supports TypeScript)
   - HackerRank (supports TypeScript in their web IDE)
   - CodeSignal (supports TypeScript)

4. **TypeScript Runtime Environments**
   - Node.js with ts-node for server-side TypeScript
   - Deno (built-in TypeScript support)
   - Browser with TypeScript transpiled to JavaScript
