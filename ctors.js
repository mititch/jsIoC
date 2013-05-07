function CtorA (cont) {
    this.objB = "interfaceB";
    this.objB = cont.Instance[this.objB](cont);

    this.doA = function () {
        this.objB.doB();
    };
}
CtorA.interface = "interfaceA";
    
function CtorB(cont) {
    this.doB = function() {
        alert('I am B!');
    };
}
CtorB.interface = "interfaceB";
