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
                        
                        return function Creator(cont) {                        
                                
                                Creator.sngl || (Creator.sngl = new ctor(cont));

                                return Creator.sngl;
                        };
                }
        }

        return jsioc;

}(JSIOC || {}));
