function CtorA (cont) {
    
    this.objB = 'interfaceB';
    this.objB = cont.Instance[this.objB](cont);

    this.doA = function () {
        this.objB.doB();
    };
}
    
function CtorB(cont) {
    
    this.doB = function() {
        alert('I am B!');
    };
}
