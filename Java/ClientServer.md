# Client and Server

## How to build a client-server connection
1. Run server
2. Server socket listens for client connection

```java
ServerSocket serverSocket = new ServerSocket(8000);
```

3. Run client
4. Client socket connects to server socket

```java
Socket socket = new Socket("localhost", 8000);
```

5. Server socket accepts client connection

```java
Socket socket = serverSocket.accept();
```

6. Client and server communicate

## Define a server class
1. socket: Socket
  - port number
2. input: DataInputStream
3. output: DataOutputStream