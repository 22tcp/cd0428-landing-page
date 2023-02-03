/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
// NameSpace - glue all definitions to a long, unique object identifier
var landingPage_nameSpace = {};
// Nobody wants to type that more than twice, shortcut: n
let n = landingPage_nameSpace;
//n.activeElement = "dom object";
n.liFragment = document.createDocumentFragment();
// console.log(" Fragment :" + n.liFragment + "\n");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

n.getNavListParent = function () {
  return document.getElementById("navbar__list");
}

//console.log(" element: " + n.getNavListParent() );

n.logData = function (data) { console.log(" Out: " + data); }

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
// build the nav

n.getSections = function () {
  let _sectionList = document.querySelectorAll("Section");
  let sectionElementList = [];
  for ( let _liElement of _sectionList ) {
    sectionElementList.push(_liElement);
  }
  return sectionElementList;
} ();

// this method works by appending the created nav elements to namespace wide defined liFragment 
n.mkNav = function (sectionElement) {
    let _tempLi = document.createElement("li");
    let _tempName = document.createTextNode(" " + sectionElement.dataset.nav + " ");
    _tempLi.appendChild(_tempName);
    _tempLi.classList.add("menu__link");
    n.liFragment.appendChild(_tempLi);
}
// getSections returns an array of DOM Elements - mkNav is called on all of them to produce html nodes
n.getSections.forEach(n.mkNav);



n.getNavListParent().appendChild(n.liFragment);

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active