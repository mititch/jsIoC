function Container() {

        var _self = this;
        _self._krnl = {};
        
        this.Instance = {};

        this.Config = function (config){

                this.Instance = config;
        }

        this.Persistent = function (ctor){
                
                return function (cont) {
                        return new ctor(cont);
                }
        }

        this.Singleton = function (ctor){
                
                return function (cont) {                        
                        if (!_self._krnl[ctor.interface]) {
                                _self._krnl[ctor.interface] = new ctor(cont)
                        }
                        return _self._krnl[ctor.interface];
                };
        }
}
