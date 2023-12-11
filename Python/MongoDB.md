# MongoDB
- MongoDB is a NoSQL database program.
- MongoDB stores data in JSON-like documents.

## Query
- Create: `db.collection.insert_one(json1)`
- Read: `db.collection.find_one(json1)`
- Update: `db.collection.update_one(json1, json2)`
- Delete: `db.collection.delete_one(json1)`

### insert_one()
- Insert a document into a collection: `collection.insert_one(json1)`
- If the collection does not exist, MongoDB will create it.
- If json1 has same key as the existing document in the collection, MongoDB will overwrite the existing document.

```python
# Create a collection in MongoDB
collection = db["customers"]

# Create a JSON object
json1 = {
    "name": "John",
    "age": 30,
    "city": "New York"
}

collection.insert_one(json1)
```

### find_one()
- Find the first document in a collection
- If found, return the document. Otherwise, return `None`.

```python
john = collection.find_one({"name": "John"})
print(john)
```

### update_one()
- Find the first document in a collection and update it

```python
# Update the age to 32
collection.update_one(
  {"name": "John"},
  {"$set": {"age": 32}})

print(collection.find_one({"name": "John"}))
```

### delete_one()
- Delete the first document in a collection

```python
collection.delete_one({"name": "John"})
```

## Query Operators
- `$gt`: greater than
- `$gte`: greater than or equal to
- `$lt`: less than
- `$lte`: less than or equal to
- `$ne`: not equal to
- `$in`: in
- `$nin`: not in
- `$and`: and
- `$or`: or
- `$not`: not
- `$nor`: nor

```python
# Find the documents where the address starts with the letter "S"
query1 = {"address": {"$gt": "S"}}
# Find the name containing the letter "i"
query2 = {"name": {"$regex": "i"}}
# Find the age less than 30
query3 = {"age": {"$lt": 30}}
# Find the name containing the letter "i" and the age less than 30
query4 = {"$and": [
    {"name": {"$regex": "i"}},
    {"age": {"$lt": 30}}
]}
# Use the query
records = collection.find(query4)
for record in records:
    # print(record)
    # format the output
    print(f"Name: {record['name']}, Age: {record['age']}")
```