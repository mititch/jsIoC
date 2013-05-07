var JSIOC = (function (jsioc){

        jsioc.Container = function() {
                
                var _self = this;
                _self._krnl = {};

                this.Instance = {};

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
                                
                                _self._krnl[ctor.interface] || (_self._krnl[ctor.interface] = new ctor(cont));

                                return _self._krnl[ctor.interface];
                        };
                }
        }

        return jsioc;

}(JSIOC || {}));
