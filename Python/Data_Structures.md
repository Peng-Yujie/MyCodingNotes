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
```

## Tuple
- Tuple is similar to list, but it is immutable, we cannot change the value of the tuple.
- The elements in the tuple are in order, can be duplicated, and can be of different types.

```python
# Create a tuple
tuple1 = (1, 2, 3, 4, 5)
```

## Set
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
```

## Dictionary
- Dictionary is a data structure that stores key-value pairs, which each key is unique.

```python
# Create a dictionary
dict1 = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}
```

- append()
- clear()
- copy()
- count()


## Comprehension and Filter
- Comprehension is a concise way to create a list, set, or dictionary.
- Filter is a concise way to filter a list, set, or dictionary.

### List
```python
# Create a list
list1 = [1, 2, 3, 4, 5]

# Create a list with a for loop
list2 = []
for i in list1:
    list2.append(i)

# Create a list with comprehension
list3 = [i for i in list1]

# Create a list with comprehension and filter
list4 = [i for i in list1 if i > 3]
```

### Dictionary
```python
# Create a dictionary
dict1 = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5}

# Create a dictionary with comprehension
dict2 = {k: v for k, v in dict1.items()}

# Create a dictionary with comprehension and filter
dict3 = {k: v for k, v in dict1.items() if v > 3}
```
