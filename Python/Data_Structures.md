# Data Structures in Python

## List

- List is a fundamental data structure in Python.
- List is mutable, which means we can change the value of the list.
- The elements in the list are in order, can be duplicated, and can be of different types.
- The elements in the list can be accessed by index.

```python
# Create a list
list1 = [1, 2, 3, 4, 5]
list2 = ['a', 'b', 'c', 'd', 'e']
list3 = [1, 'a', 2, 'b', 3, 'c', 4, 'd', 5, 'e']

# Create a list of n duplicates
list4 = [1] * 5
```

### Loop through a List

```python
nums = [1, 2, 3]

# Use index
for i in range(len(nums)):
    print(nums[i])

# Without index
for num in nums:
    print(num)

# Use index and value
for i, num in enumerate(nums):
    print(i, num)
```

### List Methods

```python
nums.sort() # Sort the list
nums.reverse() # Reverse the list
nums.append(4) # Add an element to the end of the list
nums.insert(0, 0) # Insert an element at the index
nums.pop() # Remove the last element
nums.pop(0) # Remove the element at the index
```

### List Comprehension and Filter

```python
# Create a list
list1 = [1, 2, 3, 4, 5]

# Create a list with a for loop
list2 = []
for i in list1:
    list2.append(i)

# Create a list with comprehension
list3 = [i for i in list1]

# Create a 2D list with comprehension
arr = [[0] * 3 for _ in range(3)]

# Create a list with comprehension and filter
list4 = [i for i in list1 if i > 3]
```

## Stack

- Stack is a data structure that stores elements in a last-in-first-out (LIFO) order.
- In python, we can use `list` to implement a stack.

```python
# Create a stack
stack = []

# Add an element to the stack
stack.append(1)
stack.append(2)

# Peek the last element in the stack
stack[-1]

# Pop the last element in the stack
stack.pop()  # 2
```

## Queue

- Queue is a data structure that stores elements in a first-in-first-out (FIFO) order.
- Difference between `queue.Queue` and `collections.deque`:
  - `queue.Queue` is a thread-safe queue, which means it can be used in a multi-threaded environment.
  - `collections.deque` is a double-ended queue, which means we can add or remove elements from both ends.
  - Commonly, we use `collections.deque`.

```python
from collections import deque

# Create a queue
queue = deque()

# Add an element to the queue
queue.append(1)
queue.append(2)
queue.append(3)

# Peek the first element in the queue
queue[0]

# Pop the first element in the queue
queue.popleft()  # 1
```

## Set (HashSet)

- Set is a data structure that stores unordered, unique elements.
- Set is useful when we need to store unique elements without order.

```python
# Create a set
set1 = {1, 2, 3, 4, 5}

# Add an element to the set
set1.add(6)

# Add 6 again to the set
set1.add(6) # The set will not change because 6 is already in the set

# Remove an element from the set
set1.remove(6)

# Duplicate the set
set2 = set1.copy()

# List to set
list1 = [1, 2, 3, 4, 5]
set3 = set(list1)
```

## Dictionary (HashMap)

- Dictionary is a data structure that stores key-value pairs, which each key is unique.

```python
# Create a dictionary
dict1 = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}
```

- append()
- clear()
- copy()
- count()

### Dictionary Comprehension and Filter

```python
# Create a dictionary
dict1 = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}

# Create a dictionary with comprehension
dict2 = {k: v for k, v in dict1.items()}

# Create a dictionary with comprehension and filter
dict3 = {k: v for k, v in dict1.items() if v > 3}
```

### Loop through a Dictionary

```python
# Loop through keys
for key in dict1:
    print(key, dict1[key])

# Loop through values
for value in dict1.values():
    print(value)

# Loop through keys and values
for key, value in dict1.items():
    print(key, value)
```

## Tuple

- Tuple is similar to list, but it is immutable, we cannot **change the value** of the tuple once it is created.
- The elements in the tuple are in order, can be duplicated, and can be of different types.

```python
# Create a tuple
tuple1 = (1, 2, 3, 4, 5)
```

`Tuple` can be used as a key in `set` or `dictionary`, but `list` cannot.

```python
# Create a dictionary with tuple key
dict1 = {(1, 2): 1, (3, 4): 2}

# Insert a tuple to a set
set1 = set()
set1.add((1, 2))

# This does not work
dict2 = {[1, 2]: 1, [3, 4]: 2}
```

## Heap

- Heap is a binary tree data structure that satisfies the heap property.
- In Python, we can use `heapq` to implement a heap.

```python
import heapq

# Create a heap
heap = []
heapq.heappush(heap, 1)
heapq.heappush(heap, 2)

# Min value is always at index 0
heap[0]

# Print in order
while heap:
    print(heapq.heappop(heap))

# No Max heaps, but we can use negative values
heap2 = []
heapq.heappush(heap2, -1)
heapq.heappush(heap2, -2)

# Max value is always at index 0
print(-1 * heap2[0])  # 2

# List to heap
list1 = [1, 2, 3, 4, 5]
heapq.heapify(list1)  # list1 is now a heap
while list1:
    print(heapq.heappop(list1))
```
