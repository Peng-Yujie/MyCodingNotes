# FileIO and Exception Handling

## FileNotFound Exception

### readFile
This exception is thrown when a file is not found. It is a checked exception, so it must be handled. The following code shows how to handle this exception.
[Throwable.md](./Throwable.md)

```java
File file = new File("test.txt");
Scanner input = null
try {
  // Try to pass the file name to the constructor
  Scanner input = new Scanner(file);
} catch (FileNotFoundException ex) {
  // If the file is not found, execute the catch block
  System.out.println("File not found");
  ex.printStackTrace(); // Print the stack trace
}

while(input.hasNext()) {
  System.out.println(input.nextLine());
}
input.close();
```

### writeFile
PrintWriter is used to write data to a file. The following code shows how to use PrintWriter to write data to a file.
- If the file does not exist, it will be created.
- If the file exists, it will be overwritten.
- Close the printWriter when you're done.
```java
PrintWriter output = null;
try{
  output = new PrintWriter("file.txt");
} catch (FileNotFoundException ex) {
  ex.printStackTrace();
}

output.write("File found");
output.close();
```
** What if the filename contains a path? **
```java
output = new PrintWriter("C:\\Users\\user\\Desktop\\file.txt");
```
- If there is no path, then the file must be in the same directory as the program.
- Single backslash does not work. Double forward slash works on Windows, but not on Mac or Linux.

## Scanner
### delimiter
The delimiter is a pattern that is used to find a token. The default delimiter is whitespace.
We can use the useDelimiter() method to change the delimiter.
```java
Scanner input = new Scanner("1, 2, 3, 4, 5");
input.useDelimiter(", ");
while(input.hasNext()) {
  System.out.println(input.next());
}
```
Read character by character
```java
Scanner input = new Scanner("ABCDE");
input.useDelimiter("");
while(input.hasNext()) {
  System.out.println(input.next()); // It's a string containing one character
}
```
