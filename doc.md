# Helpers
ECMAScript 5 helpers for working with DOM.  

It contains three modules:
- [dom-cache](#dom-cache) - keeps the references to the elements in the cache.
- [link-handler](#link-handler) - functions for switching tabs.
- [dom-helpers](#dom-helpers) - several helpers for working with DOM.

## Usage

```html
  <script src="dist/Helpers/index.js"></script>
  <script>
      var dom = Helpers.dom;
      var body = dom.query('body');
      body.style.backgroundColor = 'aquamarine';
  </script>
```

## dom-cache
It looks for DOM elements, applying methods querySelector and querySelectorAll, only once, and then keeps them in the cache.

#### Usage dom-cache
```js
var dom = Helpers.dom;

var elem  = dom.query(selector);	// corresponds to: var elem  = document.querySelector(selector);
var elems = dom.queryAll(selector);	// corresponds to: var elems = document.querySelectorAll(selector);
```

## link-handler
It helps to set up simple tab switching simulating page navigation.

#### Usage link-handler
```js
var linkHandler = Helpers.linkHandler,
    leafOver = linkHandler.leafOver;
```

`leafOver` function accepts two parameters, both DOM elements or selectors.
The first parameter is elements that need to be hidden, the second one is an element to be opened.
```js
leafOver(elementsToHide, targetElement);
```
*Tip: hide the elements using an attribute hidden before running the function.*  
  
The second way:
```js
var followLink = Helpers.followLink;
```

`followLink` function is a wrapper for `leafOver`. It handles all links that have the `link` class. It only accepts one parameter, that is elements to hide. 
The target element of the link attribute `href` is the element that will be opened.
```js
// all sections will be hidden when clicking on any 'a.link' element inside the document.body,
// except the target element of the link attribute `href`

document.body.onclick = function() {
    followLink('section');
}
```
`followLink` can accept callback as an optional second parameter. The callback can also accept an optional parameter, that is, the target element.
```js
document.body.onclick = function() {
    followLink('section', function(target) {
        target.classList.add('opened');
    });
}
```

## dom-helpers
It provides several functions for working with DOM elements:

| Function | Parameters | Description |
| --- | --- | --- |
| createElement | 1. tagName (string) <br> 2. className (string) or attributes (object) or null <br> (optional) <br> 3. content (string, optional) | creates a new DOM element with attributes and content |
| toggleClass |  1. DOM element <br> 2. className to be removed (string)  <br> 3. className to be added (string, optional) | changes classNames of DOM elements |
| delegate |  1. selector of target element (string) <br> 2. event  <br> 3. callback (can accept one or two optional parameters: target element, event) | delegates events |

#### Usage dom-helpers
```js
var helpers = Helpers.helpers;
var section = helpers.createElement('section', {id: 'some-section', hidden: ''}, 'Lorem ipsum dolor sit amet...');
document.body.appendChild(section);
```

***

These modules can be used as CommonJS modules. The `dom-cache` and `dom-helpers` modules can be used either in a common package or separately. 
The `link-handler` module only depends on the other two.  

### Browser Support
| Firefox 12+ | Chrome 18+ | Safari 8+ | Opera 18+ | IE 10+ | 
| --- | --- | --- | --- | --- |

### License
The project is available under the [MIT](./license) license.  

















