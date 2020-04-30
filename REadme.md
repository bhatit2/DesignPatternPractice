## Creational Pattern

I have used factory pattern to delegate the responsibility of object creation to another class
In order to get single instance of employee object, I am using Singleton pattern. 

## Structural Pattern

#### Part A & B  

In order to interact between two classes i.e. OldCalculator and new Calculator in a cleaner manner, I have created a new  class UltimateCalculator which is  using other two classes internally and providing a cleaner interface to user hiding all complexity. This is facade pattern. 

#### Part C

Now in order to store the results of previous calculation, I have created CleverCalculator Class which have extended UltimateCalculator functionality by using memoization technique.

#### Part D

To enable logging functionality, I have created LoggingDecorator class which acts as a wrapper . This is decorator pattern.

## Behavioral Pattern

#### Part A 

For CumulativeSum Class, I am using Chain of Responsibility Design Pattern.

#### Part B 

For SpecialMath  Class, I am using Command Pattern.

#### Part C

To watch array for any changes, I am using Observer Pattern.


**CodeSandbox link :**
[Design Patterns in JS](https://codesandbox.io/s/dank-voice-bnob2?file=/index.html)
