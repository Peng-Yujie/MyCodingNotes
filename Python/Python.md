# Python


## Socket

To build a server of web application, we can use the socket module of python by the following steps:
1. Create a socket object
2. Bind the socket to the port
3. Listen for incoming connections
4. Accept connections
5. Send a message back to the client


## File Input and Output
- Open a file: `file1 = open("file1.txt", "r")`
- Read a file: `file1.read()`
- Write a file: `file1.write("Hello World")`

### csv
- Read a csv file: `csv.reader(file1)`
- Write a csv file: `csv.writer(file1)`
- Read a csv file as a dictionary: `csv.DictReader(file1)`
- Write a csv file as a dictionary: `csv.DictWriter(file1, fieldnames=fieldnames)`

```python
import csv
with open('file1.csv', 'r') as file1:  # use 'with' to automatically close the file
    reader = csv.reader(file1)
    # header = next(reader)  # skip a row and save it as header
    # next(reader)  # skip a row
    for row in reader:
        # print(row)
        print (','.join(row))  # join the elements in the row with comma

# read a csv file and save the data as a list of dictionaries
with open('file1.csv', 'r') as file1:
    records = []
    reader = csv.reader(file1)
    header = next(reader)
    for row in reader:
        records.append({
            'id': row[0],
            'name': row[1],
            'age': row[2]
        })

# print records
for record in records:
    print(record)

# save the data as a csv file
with open('file2.csv', 'w') as file2:
    writer = csv.writer(file2)
    writer.writerow(['id', 'name', 'age'])
    for record in records:
        writer.writerow([record['id'], record['name'], record['age']])
```