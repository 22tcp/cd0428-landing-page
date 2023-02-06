  # useful new tech:
  ## string templates
  ## destructuring
  ## object literal shorthand
  ```
    const gemstone = {
        type: 'quartz',
        color: 'rose',
        carat: 21.29
      };      
    const {type, color, carat} = gemstone;    
  ```
  ## create link and add properties
  ```
      var a = document.createElement('a');
      var linkText = document.createTextNode("my title text");
      a.appendChild(linkText);
      a.title = "my title text";
      a.href = "http://example.com";
      document.body.appendChild(a);
  ```

  ## shorthand method deccing
  ```
    let gemstone = {
      type,
      color,
      carat,
      calculateWorth() { ... }
    };
  ```
  ## iterable protocol


  ## for ..of loop
  ```
    const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (const digit of digits) {
      if (digit % 2 === 0) {
        continue;
      }
      console.log(digit);
    }
  ```
  ## capitalize first letter locale-sensitive
  ```
    const capitalize = ([ first, ...rest ], locale = navigator.language) =>
    first === undefined ? '' : first.toLocaleUpperCase(locale) + rest.join('')
  ```

  ## for ...of loop
  ### spread operator  "..."  array to elements
    ```
      const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
      console.log(...primes);
    ```

  ## nodeType Values  
    ```
      ELEMENT_NODE 	1  
      ATTRIBUTE_NODE 	2  
      TEXT_NODE 	3
      CDATA_SECTION_NODE 	4
      PROCESSING_INSTRUCTION_NODE 	7
      COMMENT_NODE 	8
      DOCUMENT_NODE 	9
      DOCUMENT_TYPE_NODE 	10
      DOCUMENT_FRAGMENT_NODE 	11
    ```

  document.querySelector(-css selector string-)
  document.createElement(-stringofElementtype-)
  document.createTextNode(-unparsed string-)

  element.appendChild(-ElementLiteral-)
  !!move!! existing child element when used multiple times on same element

  --- own research because: where is copy
  Node.cloneNode([deep])  deep: all subnodes including text are cloned
  remember to change the ID if existant because it can cause doubles

  Element.insertAdjacentHTML(-positional string argument-, -htmlTextToAdd-)

  ## remove methods:

      .removeChild()
      .remove()

  interesting properties for it

      .firstElementChild
      .parentElement

  Page Styling

      .style.prop
      .cssText
      .setAttribute()
      .className
      .classList

  Level of Specificity
  CSS Rule

  Least specific   rules in a stylesheet (external css )

  More specific    rules in a style tag (file head)

  Most specific    rules in a tag's style attribute

  mainHeading.style.color = 'red';

  the .classList property has a number of properties of its own. Some of the most popularly used ones are:

      .add() - to add a class to the list
      .remove() - to remove a class from the list
      .toggle() - to add the class if it doesn't exists or remove it from the list if it does already exist
      .contains() 

      modifying individual styles with .style.prop
      updating multiple styles at once with .style.cssText
      getting/setting a list of classes with .className
      getting/setting/toggling CSS classes with .classList

  ## Event handling

      The EventTarget page says that EventTarget

      is an interface implemented by objects that can receive events and may have listeners for them.

      and

      Element, document, and window are the most common event targets, but other objects can be event targets too…

      TARGET.addEventListener( EVENT, callback f )

    Type Coercion, equality checks

    JavaScript has the double equality (==) operator that will allow type coercion. It also has the triple equality (===) symbol that will prevent type coercion when comparing

    Only the stack-address wise equal function that was bound to an event can be used to remove it from its element, anything else is memory address unequal and thus 
      does not match the bindind

      ```
      function myEventListeningFunction() {
        console.log('howdy');
      }

      // adds a listener for clicks, to run the `myEventListeningFunction` function
      document.addEventListener('click', myEventListeningFunction);

      // immediately removes the click listener that should run the `myEventListeningFunction` function
      document.removeEventListener('click', myEventListeningFunction);
      ```

      ### Phases of event propagation
      
        -Capturing , only fires listeners with 3rd parameter set to true
        -At target  - eventL is fired at element with listener
        -bubbling - event from child went up to its parent elements and then fires listeners there
      
      among many different child elements pick the ones of interest - event updrift->air_bubble_s in water hit the parent and gives .nodeName in UPPERCASE (wtf?)
    ```
      document.querySelector('#content').addEventListener('click', function (evt) {
          if (evt.target.nodeName === 'SPAN') {  // ← verifies target is desired element
              console.log('A span was clicked with text ' + evt.target.textContent);
          }
      });
    ```

  ## DOM Ready Event

    document.addEventListener( 'DOMContentLoaded', function(){...} );
    Performance measurement 
    performance.now() tstamp millisecond resolution

    use a non-rendered mini Document to assemble html nodes:
    
    const fragment = document.createDocumentFragment();  // ← uses a DocumentFragment instead of a <div>

    Browser reflow and repaint effort minimization
    
    Each visible alteration per element leads to reflow + repaint PER ELEMENT
    hiding the parent, altering the children deleting, adding while invisible reduces the reflow calculation to one.

    Modern virtual DOM libraries like react use this to plan a lowest effort approach for alterations in the DOM regarding reflows and repaint counts.

    https://developers.google.com/speed/docs/insights/browser-reflow

  ## js runtime:
    - Function stacking 
    - single thread processing
    - run-to-completion
    
  ## JavaScript's concurrency model 
    The JavaScript Event Loop
    The simplest explanation of JavaScript's concurrency model uses two rules: If some JavaScript is running, let it run until it is finished ("run-to-completion"). If no JavaScript is running, run any pending event handlers
    an event listener handler function can't just be added directly to the Call Stack because of JavaScript's run-to-completion nature; we can't interrupt any code that might currently be happening. So the function is placed in the Queue. When all of the functions in the Call Stack have finished (also known as idle time), then the Queue is checked to see if anything is waiting. If something is in the Queue, then it's run, creating an entry on the call stack.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop

  ## setTimeout() with Delay of 0

    An interesting aspect to setTimeout() is that we can pass it a delay of 0 milliseconds.

    setTimeout(function sayHi() {
        console.log('Howdy');
    }, 0);  // ← 0 milliseconds!

    You might think that since it has a delay of 0 milliseconds, that the sayHi function would run immediately. However, it still goes through the JavaScript Event Loop. So the function is handed off to the browser where the browser starts a timer for 0 milliseconds. Since the timer ends immediately, the sayHi function will move to the Queue, and then to the Call Stack once the Call Stack has finished executing any currently-running tasks.

    So why is this helpful? Well, this technique can help us to convert potentially long-running code to one that's broken up to allow for the browser to handle user interactions!

    https://javascript.info/settimeout-setinterval


