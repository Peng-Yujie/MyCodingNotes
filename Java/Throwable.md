# Throwable
- Throwable
  - Error
  - Exception
    - Checked Exception
      - IOException
        - FileNotFoundException
        - MalformedURLException
        - UnknownHostException
      - ClassNotFoundException
    - Unchecked Exception
      - RuntimeException
        - ArithmeticException
        - ClassCastException
        - IllegalArgumentException
          - NumberFormatException
        - IndexOutOfBoundsException
        - NoSuchElementException
          - InputMismatchException
        - NullPointerException

## try-catch
If a code block has the potential to throw an exception, we can use try-catch block to handle the exception.
Try to execute the code in try block, if there is an exception, catch it and execute the code in catch block.
The code after catch block will be executed no matter there is an exception or not.

```java
try {
    // code that may throw exception
} catch (Exception e) {
    // code to handle exception
} 
// code that will be executed no matter there is an exception or not
System.out.println("After try-catch block");
```

## Error
Error is a subclass of Throwable that indicates serious problems that a reasonable application **should not try to catch**. Most such errors are abnormal conditions.
> Why should not try to catch? Because it is not recoverable. For example, OutOfMemoryError, StackOverflowError, etc.

## Exception
Exception is a subclass of Throwable that indicates conditions that a reasonable application might want to catch.

### Throw exception
We can throw an exception by using the throw keyword.
```java
throw new Exception("Exception message");
```

We need to tell the compiler that this method may throw an exception by using the throws keyword.
```java
public void withdraw(double amount) throws IllegalArgumentException {
    if (amount < balance) {
        throw new IllegalArgumentException("Insufficient balance");
    } else {
        balance -= amount;
    }
}
```

Then, when we call this method, we need to handle the exception by using try-catch block or throws keyword.
```java
public void transfer(double amount, Account target) {
    try {
        withdraw(amount);
        target.deposit(amount);
    } catch (IllegalArgumentException e) {
        System.out.println(e.getMessage());
    }
}
```
or
```java
public void transfer(double amount, Account target) throws IllegalArgumentException {
    this.withdraw(amount);
    target.deposit(amount);
}
```

### Print error message
We usually do one of two options when we catch an exception:
- e.getMessage()
  print the error message to the console

- e.printStackTrace()
  print the error message and the stack trace to the console
  **better for debugging**

### Multiple Exceptions
Use multiple catch blocks to handle different exceptions.
Catch the more specific exception first, then the more general exception.
```java
try {
    // code that may throw exception
} catch (Exception1 e) {
    // code to handle exception1
} catch (Exception2 e) {
    // code to handle exception2
} catch (Exception3 e) {
    // code to handle exception3
} finally {
    // code that will be executed no matter there is an exception or not
    // usually used to close resources
}
```

### Try-with-resources
Put the resource in the try block, and the resource will be **closed automatically** after the try block.

```java
try (Scanner input = new Scanner(file)) {
    // code that may throw exception
} catch (Exception e) {
    // code to handle exception
}
```

- If there are multiple resources in the try block, The resource that is declared first will be closed last.
- Only objects that implement the AutoCloseable interface can be used in the try-with-resources statement.
  e.g. Scanner, PrintWriter, etc.

### Design own exception
```java
public class NSFException extends IllegalArgumentException {
    public NSFException(String message) {
        super(message);
    }
}
```


