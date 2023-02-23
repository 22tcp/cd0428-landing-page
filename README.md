# Table of contents
- [Table of contents](#table-of-contents)
- [Landing Page Project](#landing-page-project)
- [Demo-Preview](#demo-preview)
- [Installation](#installation)
- [Technologie](#technology)
- [Development](#development)
- [License](#license)
- [Footer](#footer)

## Landing Page Project

- an automatically growing navigation when sections are added
- scroll-awareness, position of section triggers active tagging
- NOT doing the hidden fixed menu bar  while not scrolling, it hides my efforts to activate the nav buttons while scrolling.  
  Mhm. Possibly fiddling with the z-position might be working. It's on the todo-list.

## Demo Preview
there is a website reachable - contact the author  
## Installation

Clone the project to a webserver's root directory.  
Open the website of the server and add the created directory  
http(s)://your-name-here/directory

## Technology

About namespacing  
This is experimental. I came up with it while reading about collisions of global variables.
I defined an object with a unique, long name in the global namespace.
Then a short variable "n" is declared with let and set equal to the object.
All methods and properties ( similar to variables) are declared prefixed with "n."   so they all rest in this secluded namespace.
Optional const and var declarations, as n.identifier becomes an object property.
It takes a moment to read into the object, though. I will continue to experiment.
Edit: after comparing the usual methods and closure style encapsulation I dropped my own version.
Especially because ES6 arrow function declarations do not work like named function declaration. They have no bindings to "this"
and can not be used as methods - which was my way to separate: put everything inside of one object.
I will keep on researching.

## Development
- navigation and scroll to element
I tackled some of the more stressing topics now. 
The nav list is created by using a DOM list of all sections present during runtime.  
the respective element ID is transferred as dataset variables into eac element's property list.  
There are no event listeners attached yet.  
The next function reacts according to the section IDs stored in the li elements and is added to the parent nav ul element.  
The click event of anything inside of the ul box bubbles the event target to this handler.  
I found out that  adding the event listener to the parent of the li navbuttons  
has a flaw in combination with dataset based decisions. Clicking the ul Element which is bigger    
than the buttons is possible and due to propagation the dataset value is null    
because the ul is not a li element with a valid dataset. This is prevented by != null comparing the dataset ref before using it.  
n.mkNav and the anonymous callback function added with "n.getNavListParent" solve two   
of the requested features.  

- scroll anywhere and activate  
At first I wrongly added the eventListener to the sections  - no scroll event fired.  
Then I had the correct idea, to scroll the whole document meant to bind the   
eventListener to the document/window.  
The styling for the active section was embedded in a setTimeout callback,  
looping over the section elements and evaluating every y-distance for every section.  
A difference window of -100 to +249 pixels towards the upper viewport border works ok
but I redid the computation and now use -150 to 0.5 * viewport height.  
This ensures that there is not that much "in between" error scrolling over section borders.
The css class is added when the condition is matched else it's removed.  

## License
As this is a fork of the udacity skeleton for this project
I kept the original license, so this is licensed as  [cc-nc-nd 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)



## Footer
Have a nice day, fly safe, do open source

--  
[Back](#table-of-contents)
