(function(){
    var parentInstance1,
        parentInstance2,
        subInstance1,
        subInstance2;

    module("Test OOP", {
        setup: function() {
            parentInstance1 = new ParentClass(0);
            parentInstance2 = new ParentClass(1);
            subInstance1 = new SubClass(2);
            subInstance2 = new SubClass(3);
        },
        teardown: function() {
            parentInstance1 = null;
            parentInstance2 = null;
            subInstance1 = null;
            subInstance2 = null;
        }
    });

    test("privatePropertyNotAccessible", function(){
        strictEqual( parentInstance1.privateProperty, undefined );
    });

    test("publicMethodIsAccessible", function(){
        notEqual( parentInstance1.publicMethod, undefined );
    });

    test("publicMethodCanAccessPrivateProperty", function() {
        equal( parentInstance1.returnPrivate(), "private 0" );
    });

    test("subClassInheritsPublicMethodFromParentClass", function() {
        equal( subInstance1.publicMethod2(), parentInstance1.publicMethod2() );
    });

    test("subClassCanOverridePublicMethodFromParentClass", function() {
        notEqual( subInstance1.publicMethod(), parentInstance1.publicMethod() );
    });
    
    test("instanceOfParentClass", function() {
        equal( parentInstance1 instanceof ParentClass, true );

        console.log( Object.getPrototypeOf( parentInstance1 ) );
        console.log( ParentClass.prototype );
        console.log( Object.getPrototypeOf( subInstance1 ) );
        console.log( SubClass.prototype );
        equal( subInstance1 instanceof ParentClass, true );
    });
    
    test("instanceOfSubClass", function() {
        equal( parentInstance1 instanceof SubClass, false );
        equal( subInstance1 instanceof SubClass, true );
        equal( subInstance1 instanceof Object, true );
    });
}());