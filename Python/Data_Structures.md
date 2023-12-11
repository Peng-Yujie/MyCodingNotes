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

## JSON in Python
- JSON is a data format that is used to store and exchange data.
- Use JSON and MongoDB to store data in the database.

```python
# Create a JSON object
json1 = {
    "name": "John",
    "age": 30,
    "city": "New York"
}

# Create a collection in MongoDB
collection = db["customers"]

# Insert the JSON object into the collection
collection.insert_one(json1)

# Find the JSON object in the collection
collection.find_one(json1)

# Create a list of JSON objects
json2 = [
    {
        "name": "Amy",
        "age": 20,
        "city": "San Francisco"
    },
    {
        "name": "Hannah",
        "age": 25,
        "city": "Chicago"
    },
    {
        "name": "Michael",
        "age": 35,
        "city": "Las Vegas"
    },
    {
        "name": "Sandy",
        "age": 40,
        "city": "Seattle"
    }
]

# Insert json1 into json2
json2.append(json1)
```
