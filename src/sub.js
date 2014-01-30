(function(global){
    function SubClass(instanceProperty)
    {
        /**
         * EXTEND
         **/
        var _super = ParentClass.call( this, instanceProperty );
        
        /**
         * PRIVATE
         **/
         var privateProperty = "private sub " + instanceProperty;

        /**
         * PUBLIC
         **/
        var api = Object.create(_super);
        api.constructor = this.constructor;
        api.prototype = this.constructor.prototype;
        api.publicMethod = function() {
            _super.publicMethod.call(this); // call method on ParentClass
            console.log( "publicMethod on SubClass" );
            console.log( privateProperty );
            return "publicMethod1 in SubClass"
        }
        return api;
    }

    global['SubClass'] = SubClass;
})(this);