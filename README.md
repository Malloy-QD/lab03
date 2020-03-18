# lab03-Web-Languages
Exercise 1: Password validator
Create a webpage that allows the user to enter a password two times in order to validate it.

Web page content:

Two password fields
first to enter the password and a second to verify it
A button labelled "Validate" that alerts one of the following messages:
Display informative error message if any of the following occur:
the passwords entered don't match
the passwords are not at least 8 characters long
Exercise 2: Slide show!
Create a new webpage that has a single img tag and two buttons labeled previous and next. Your slideshow should...

contain at least five pictures of your choice (appropriate for class)
cycle through all the pictures
wrap around to the beginning if I keep pushing next
wrap around to the end if I keep pushing previous
force the images to be all the same size regardless of the original image files' dimensions
Exercise 4: CSS Manipulation
Create a web page that have a paragraph with some dummy text. Near the paragraph have text fields to accept the following values:

Border:

red value
green value
blue value
width
Background color:

red value
green value
blue value
Finally, have a button that, when clicked, changes the border and background color to be as specified. You can use either the rgb() method or a color code, but you should tell the user what units they are in (00-FF or 0-255).

//in JavaScript

//Access the tag:
var someTag = docuement.getElementById("theTagsId");


//Change the style attribute
someTag.style.backgroundColor = "red";
NOTE: the names of the style attributes in CSS are all hyphenated (e.g. background-color) but in JavaScript they are nearly all converted to camel-case.

Here is a reference of the style properties that JavaScript can access and change.

Excercise 5: Publication
In addition to uploading your code to github, place your files in the public_html on your EECS account. You can then access them through the URL:

http://people.eecs.ku.edu/~yourKUuserNameHere

Example:
http://people.eecs.ku.edu/~jrmiller
//Display Dr. Miller's EECS homepage
//Why not mine? Mine is a hot mess.
