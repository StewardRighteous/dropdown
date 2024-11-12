# Dropdown - Show/ Hide Elements
This is a simple package that will let you show or hide elements (Majorly dropdowns in NavBar, menu, Ads or popups, etc...). It contains three major functions that will help you do this which are as follows:

### showDropDown(element, displayStyle)
This function helps you to show a particular element after it has been hidden. It takes two parameters :
    1. element - the element you want to show from being hidden
    2. displayStyle(optional) - default set to "block", you can choose from "inline, sticky, absolute". To understand the options, learn about CSS display.

### hideDropDown(element)
    This functions takes an element and hides it.

### toggleShowOrHideDropDown(element, displayStyle)
    This function will Help you to toggle an element to show and hide by taking the element and its respective display style

---
## Warning
The Package uses show and hide in the element class names to indicate the visibility. Using class named hide or show will mess with the package's logic. So avoid naming class as "show" or "hide". Even if you make it avoid messing with the "display" value.  

v1.0.1 - added better export statement