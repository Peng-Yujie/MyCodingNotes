# CPSC1181 Final Review

## Todo
- [ ] Inheritance
- [ ] Polymorphism
- [ ] Interface
- [ ] Abstract Class
- [ ] Enums
- [ ] Modifiers
- [ ] Nested Class
- [ ] Exception Handling
- [ ] File I/O
- [ ] JavaFX
- [x] Threads
- [ ] Networking

## [Inheritance](./Objact_Oriented_Programming.md#inheritance)

## [Exception](./Throwable.md#exception)
**RuntimeException**
- NullPointerException
- ArithmeticException
- ArrayIndexOutOfBoundsException
- ClassCastException
- NumberFormatException

**Compile-time Exception**
must be handled by try-catch or throws
- IOException
- ClassNotFoundException

## [File I/O](./FileIO.md)

## [JavaFX](./JavaFX.md)

## [Threads](./FinalReview.md#threads)
1. Define the thread
  - `extends Thread`
  - `implements Runnable`
2. Define the variables and constructor
3. Override `run()`
  - use `try-catch` to handle exception
4. Create the thread in the main method
  - if `extends Thread`, create the object and call `start()`
  ```java
  Cat cat = new Cat(); // class Cat extends Thread
  cat.start();
  ```
  - if `implements Runnable`, create the object, create a thread object, and call `start()`
  ```java
  Cat cat = new Cat(); // class Cat implements Runnable
  Thread thread = new Thread(cat);
  thread.start();
  ```
Difference between `start()` and `run()`:
- `start()` creates a new thread and executes the code concurrently while `run()` executes the code in the current thread.
- the remaining code after `start()` will be executed immediately while the remaining code after `run()` will be executed after the `run()` method finishes.

### Lock
- ReentrantLock: a lock that can be acquired multiple times by the same thread.
```java
Lock lock = new ReentrantLock();
// in the thread
lock.lock();
try {
  // do something
} finally {
  lock.unlock();
}
```


## [Networking](./ClientServer.md)
- Server
- + ServerSocket
- + Socket

main method to start the server
```java
// Server
ServerSocket serverSocket = new ServerSocket(8000);
MyClass myClass = new MyClass();
// multiple clients
while (true) {
  // listen for a connection request
  Socket client = serverSocket.accept();
  // create a service for the client
  Service service = new Service(client, myClass);
  // create a thread to handle the connection
  new Thread(new HandleAClient(socket)).start();
}
```
Service class to handle the client 
```java
// Service
class Service implements Runnable{
  private Socket client;
  private DataInputStream in;
  private DataOutputStream out;
  private MyClass myClass;

  public Service(Socket client, MyClass myClass) {
    this.client = client;
    this.myClass = myClass;
  }

  @Override
  public void run() {
    try {
      // create data input and output streams
      in = new DataInputStream(client.getInputStream());
      out = new DataOutputStream(client.getOutputStream());
      // get the command protocol from the client
      String command = in.readUTF(); // string command
      int num = in.readInt(); // int command
      // process the command
      switch (command) {
        case "command1":
          // do something
          out.writeUTF("something");
          out.flush();
          break;
        case "command2":
          // do something
          break;
        default:
          // do something
          break;
      }
    } catch (IOException e) {
      e.printStackTrace();
    } finally {
      try {
        client.close();
      } catch (IOException e) {
        e.printStackTrace();
      }
    }
  }
}
```

- Client

main method to start the client
```java
// Client
Socket socket = new Socket("localhost", 8000);
// create data input and output streams
DataInputStream in = new DataInputStream(socket.getInputStream());
DataOutputStream out = new DataOutputStream(socket.getOutputStream());
String response = in.readUTF();
out.writeUTF("command1");
response = in.readUTF();
System.out.println(response);
```
- Protocol
interface to define the protocol
```java
// Protocol
public interface Protocol {
  String COMMAND1 = "command1";
  String COMMAND2 = "command2";
}
```