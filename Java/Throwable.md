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

### IOException
#### FileNotFoundException

#### MalformedURLException

#### UnknownHostException

### ClassNotFoundException

### RuntimeException
#### ArithmeticException

#### ClassCastException

#### IllegalArgumentException
##### NumberFormatException

#### IndexOutOfBoundsException

#### NoSuchElementException
##### InputMismatchException

#### NullPointerException
