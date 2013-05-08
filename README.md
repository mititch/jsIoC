jsIoC
=====

IoC container for JavaScript

How to use:

* Load library

```js
<script src='jsioc.min.js'/>
```

* Add constructors of your objects

```js
function ConstructorA(cont) {
	//object definition
}

function ConstractorB(cont) {
	//object definition
}
```

* Instantiate container

```js
var cont = new JSIOC.Container();
```

* Configure container with dependencies and lifestyles

```js
cont.Configure({   
            'interfaceA': cont.Transient(ConstructorA),
            'interfaceB': cont.Singleton(ConstructorB),
        });
```
        
* Now you can instantiate object in code

```js
var objectA = cont.Instance['interfaceA'](cont);
```

* And inside other constructors

```js
function ConstractorB(cont) {
        
        this.propertyA = cont.Instance['interfaceA'](cont);
}
```
