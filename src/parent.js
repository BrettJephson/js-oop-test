(function(global){
    function ParentClass(instanceProperty)
    {
        /**
         * EXTEND
         **/
        var _super = Object.create(null);

        /**
         * PRIVATE
         **/
        var privateProperty = "private " + instanceProperty;

        /**
         * PUBLIC
         **/
        var api = Object.create(_super);
        api.constructor = this.constructor;
        api.publicMethod = function() {
            console.log( "publicMethod on ParentClass" );
            console.log( privateProperty );
            return "publicMethod1 in ParentClass";
        };
        api.publicMethod2 = function() {
            console.log( "publicMethod2 on ParentClass" );
            console.log( privateProperty );
            return "publicMethod2 in ParentClass";
        };
        api.returnPrivate = function() {
            return privateProperty;
        }
        return api;
    }

    global["ParentClass"] = ParentClass;
})(this);
