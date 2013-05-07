var JSIOC = (function (jsioc){

        jsioc.Container = function() {

                this.Configure = function (config){

                        this.Instance = config;
                }

                this.Transient = function (ctor){
                        
                        return function (cont) {

                                return new ctor(cont);
                        }
                }

                this.Singleton = function (ctor){
                        
                        return function (cont) {                        
                                
                                var sngl = new ctor(cont);

                                this[ctor.interface] = function () {return sngl;} 

                                return sngl;

                        };
                }
        }

        return jsioc;

}(JSIOC || {}));
