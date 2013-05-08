jsIoC
=====

IoC container for JavaScript

How to use:

1. Load library

<script src='jsioc.min.js'></script>

2. Add constructors of your objects

function ConstructorA(cont) {
	//some action
}

function ConstractorB(cont) {
	//some action
}

3. Instantiate container

var cont = new JSIOC.Container();

4. Configure container with dependencies and lifestyles

cont.Configure({   
            'interfaceA': cont.Transient(ConstructorA),
            'interfaceB': cont.Singleton(ConstructorB),
        });
        
5. Now you can instantiate object in code

var objectA = cont.Instance['interfaceA'](cont);

6. And inside other constructors

function ConstractorB(cont) {
        
        this.propertyA = cont.Instance['interfaceA'](cont);
}

