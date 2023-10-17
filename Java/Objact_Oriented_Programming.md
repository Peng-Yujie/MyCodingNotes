# OOP

## Main Concepts
---
navigation:
- [Abstraction](#abstraction)
- [Encapsulation](#encapsulation)
- [Inheritance](#inheritance)
- [Polymorphism](#polymorphism)
- [Interface](#interface)
---

## Abstraction
- Hiding internal details and showing functionality only.
- Abstract class can have abstract and non-abstract methods.
- Abstract class can have constructor and static methods also.
- Abstract class cannot be instantiated.
- Abstract class can have final, non-final, static and non-static variables.

### Abstract Method
- A method that is declared as abstract and does not have implementation is known as an abstract method.
- If a class has an abstract method, **the class must be abstract**.
- An abstract method has a name, parameters, and a return type, but no body.

## Encapsulation
- Binding (or wrapping) code and data together into a single unit.
- Data encapsulation is the most striking feature of a class.
- A Java class is the example of encapsulation. Java bean is the fully encapsulated class because all the data members are private here.

## Inheritance
- A class that is derived from another class is called a subclass (also a derived class, extended class, or child class).
- The class from which the subclass is derived is called a superclass (also a base class or a parent class).

### Constructors in Inheritance
- If there is no super() in the subclass constructor, the compiler automatically inserts a super() at the beginning of the constructor, which means the subclass constructor will invoke the no-arg constructor of the superclass by default.

### Method Overriding
- The subclass can access the superclass's non-private methods and variables directly.
- Override: The subclass has the same method name, same parameters or signature, and same return type as a method in the superclass.
- Overload: The subclass has the same method name but **different** parameters or signature, or **different** return type as a method in the superclass.

## Polymorphism
- Polymorphism means "many forms", and it occurs when we have many classes that are related to each other by inheritance.

## Interface
- An Interface is a **reference** type in Java. It is similar to class. It is a collection of abstract methods. A class implements an interface, thereby inheriting the abstract methods of the interface.
- An Interface can contain only constants, method signatures, default methods, static methods, and nested types. Method bodies exist only for default methods and static methods.
- Implementing two interfaces that have default methods with the same name, the compiler will throw an error. You must either implement the method or declare the same method in the subclass as abstract.

## Abstract Class vs Interface
- Abstract class can have abstract and non-abstract methods.
- Abstract class doesn't support multiple inheritance.
- Abstract class can have final, non-final, static and non-static variables.
- Abstract class can provide the implementation of interface.
- The interface keyword is used to declare an interface. It can have only abstract methods.
- Interface supports multiple inheritance.

## Primitive Data Type vs Class
- Primitive type stores data, while class stores a reference to an object.
- Primitive cannot be null, while class can be null.
- Primitive has no methods, while class has methods.

## Static
### Static Variable
- Static variables are also known as Class variables.
- Static variables track data that are shared among all instances of a class, while instance variables track data that are unique to each instance.
- There is a single copy of static variables for all objects of a class.

### Static Method
- A static method can access or modify static variables, but not instance variables.
- If the method is static, it could no longer access the instance variables of the class.
- Calling a static method is like: `ClassName.methodName()`

**Can we override static method?**
- No, we cannot override static methods
- Static methods cannot be overridden because the method is associated with a class, not with an object.
- Final methods cannot be overridden.
- Private methods cannot be overridden because they are not visible from other classes.
- A constructor cannot be overridden.

**Can we overload static method?**
- Yes, we can overload static methods.

## Enums
- Enums are used to represent a fixed number of well-known values.
- By default, all enum constructors are private, enums are static and final.