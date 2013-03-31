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
}());