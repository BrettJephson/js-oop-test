# js-oop-test

Test implementation of a 'class' in javascript. Behaviours I wanted this implementation to exhibit:

* Instantiation:
    * Create new instances of the class, preferably with the new keyword.
* Inheritance
    * A subclass that extends a class should inherit all public methods and properties from that class. It should also be possible to call the parent's method if overriding a method.
* Encapsulation
    * A class should have private variables and these should not be static, in other words, they should not be shared across all instances of a subclass.
    * There should be no direct read or write access to a private variable from outside the instance of a class. However, it should be possible to read and write the private variable through both private and public methods within the instance.

## Implementation

How this implementation works:

* I use a function as the class
* Within this class I create a _super variable and populate it with either the class this one extends or an empty object:

```js
// class doesn't extend anything except an empty object
var _super = Object.create(null); // an object literal would work as well
// class extending a ParentClass - the scope of the this keyword at this point is the Class being instantiated
var _super = ParentClass.call( this );
```

* I define private properties and methods for the class instance within the function closure.
* I create an api object for the class's public properties and methods. This object is created from _super with the constructor set to this class's constructor:

```js
var api = Object.create(_super);
api.constructor = this.constructor;
```

* I add or override any properties and methods specific to this class.
* If overriding a method on the class being extended it is still possible to call the extended classes method:

```js
_super.publicMethod.call( this ); // call method on ParentClass but with this class as the scope
```

* Finally, I return the api object.