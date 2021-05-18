// Classes, Objects, and References* 

// class
    A class is a template used to instantiate objects. 
    It''s also called a type in some circumstances, such as 
    when used with a reference variable. A class used to 
    instantiate an object determines what states and behaviors 
    an object will possess - as a template, the object will possess 
    individual copies of the states and behaviors defined in the 
    class. 

// Object 
    An object is an instance of a class in memory. In most OOP 
    languages, you never interact with objects in memory directly. 
    Instead, you interact with them through their reference, 
    which is the memory address used by the JVM to find a 
    particular object. 

// Reference variable
    A reference variable is a variable that stores the reference 
    to an object in memory.   

// Inheritance*

    terminology:
        A class that is inherited from is called a base, super, or parent class.
        A class that inherits from another is likewise called a derived, sub, or child class.  

        Inheritance creates IS-A(N) relationships  

// Relationships: IS-A vs HAS-A* 

    Inheritance creates an Is-A relationship 
    // Composition or Aggregation
        a reference variable creates a HAS-A relationship

        // Composition 
            if Object B cannot exist without Object A

        // Aggregation
            If class A object has-a class B, but our application 
            also creates independent class B objects elsewhere.

// Polymorphism*
    Polymorphism - literally "many forms" - is the ability for 
    some code structures in an OOP language to be treated as 
    different structures at runtime. 
    
    // Object Polymorphism
        When discussing inheritance, it was explained that when 
        class B inherits from class A, an object of class B is 
        also considered to be an object of class A. That''s 
        object polymorphism.  
    
// Casting
    Casting is the process of storing a reference to an object 
    in memory inside a reference variable of a type different 
    than the object itself, or the last type of reference 
    variable used.

    We can upcast a reference by storing a reference to an object 
    in a base-class-typed reference variable.