# Nested Classes

## visibility of nested classes
- Public nested class: can be accessed from anywhere.
- Protected nested class: can be accessed from the class in which it is defined and from any subclass of that class.
- Private nested class: can be accessed only from the class in which it is defined.
- Static nested class: can be accessed from anywhere, just like static methods.
- Inner class: can be accessed from anywhere, just like instance methods.
- Anonymous class: can be accessed from anywhere, just like local variables.
- + Anonymous means that the class has no name.
- + It can be defined **inside statements, expressions, or blocks**.

## comparable in anonymous class:
Suppose we want to sort the objects list by name in anonymous class:
```java
// anonymous class
Collections.sort(list, new Comparator<Student>() {
    @Override
    public int compare(Student s1, Student s2) {
        return s1.getName().compareTo(s2.getName());
    }
});
```

### Difference between Comparable and Comparator
- Comparable: Compare this object with the specified object for order.
- Comparator: Compare two objects to determine their order.

If we have another class that implements Comparable interface:
```java
class Student implements Comparable<Student> {
    @Override
    public int compareTo(Student s) {
        return this.getName().compareTo(s.getName());
    }
}
```
And in the main class, we can sort the list by name like this:
```java
Collections.sort(list);
```

If we need to sort by grades, we can create a new class that implements Comparator interface:
```java
class GradeComparator implements Comparator<Student> {
    @Override
    public int compare(Student s1, Student s2) {
        return s1.getGrade() - s2.getGrade();
    }
}
```
Now we can sort the list by grades like this:
```java
Collections.sort(list, new GradeComparator());
```