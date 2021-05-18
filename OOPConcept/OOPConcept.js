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

        // upcast
            We can upcast a reference by storing a reference to an object 
            in a base-class-typed reference variable.  

        // Downcasting
            Downcasting is when we take a previously upcast reference, 
            and store that reference in a reference variable that is a 
            type closer to that of the actual object being referenced. 
            
    // Method Polymorphism 
        // Method Override 
            When a method in a derived class has the same signature 
            as a method in the base class, it will override the 
            implementation given in the base class. 
            Method overriding is sometimes called runtime polymorphism, 
            the implementation of the method that will be used is 
            determined by the type of the object being referenced at 
            runtime. 

        // Method Overloading
            this happens when two methods share the same name, but 
            have a different signature - that is, when they share 
            the same name, but the type/order/number of parameters 
            they accept are different. 
            Method overloading is called compile-time polymorphism.


// Abstraction and Encapsulation*

    // Abstraction  
        Abstraction is a process of hiding the implementation 
        details and showing only functionality to the user. 

        Abstraction is the principle of ''using simple things to 
        represent complex things.'' We often shorthand this as 
        '' data hiding,'' because the principle is the same:
        
        // Some points to remember : 
            An abstract class must be declared with an abstract keyword.
            It can have abstract and non-abstract methods.
            It cannot be instantiated.
            It can have constructors and static methods also.
            It can have final methods which will force the subclass not to change the body of the method.

    // Encapsulation  
        Encapsulation is how you go about restricting access to your 
        abstracted code, by using access modifiers. 

    // Generalization 
        Generalization is the process of extracting shared 
        characteristics from two or more classes, and combining 
        them into a generalized superclass. Shared characteristics 
        can be attributes, associations, or methods. 
        
    // Specialization
            Specialization means creating new subclasses from an 
            existing class. If it turns out that certain attributes, 
            associations, or methods only apply to some of the objects 
            of the class, a subclass can be created.  
