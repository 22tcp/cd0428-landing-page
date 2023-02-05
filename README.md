# Landing Page Project

## Todos

The goal is to achieve an automatically growing navigation
when a section is added to the html page.

Furthermore I am asked to hightlight the active section 
in the viewport, a click on a nav item shall smoothly scroll to the linked section.

## my namespacing
I defined an object with a unique, long name in the global namespace.
Then a short variable "n" is declared with let and set equal to the object.
All methods and properties ( similar to variables) are declared prefixed with "n."   so they all rest in this secluded namespace.
It's harder to read but evades possible collisions within global namespaces.

## solution finding
### navigation and scroll to element

  I tackled some of the more stressing topics now. 

The nav list is created by using a DOM list of all sections present during runtime.
the respective element ID is transferred as dataset variables into eac element's property list.
There are no event listeners attached yet.
The next function reacts according to the section IDs stored in the li elements and is added to the parent nav ul element.  The click event of anything inside of the ul box bubbles the event target to this handler.

I found out that  adding the event listener to the parent of the li navbuttons
has a flaw in combination with dataset based decisions. Clicking the ul Element which is bigger than the buttons is possible and due to propagation the dataset value is null because the ul is not a li element with a valid dataset. This is prevented by != null comparing the dataset ref before using it.

n.mkNav and the anonymous callback function added with "n.getNavListParent" solve two 
of the requested features.

### scroll anywhere and activate

At first I wrongly added the eventListener to the sections  - no scroll event fired.
Then I had the correct idea, to scroll the whole document meant to bind the 
eventListener to the document/window. 
The styling for the active section was embedded in a setTimeout callback,
looping over the section elements and evaluating every y-distance for every section.
A difference window of -100 to +249 pixels towards the upper viewport border works ok.

The css class is added when the condition is matched else it's removed.





