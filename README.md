# philips-dynalite
## Build your own dynalite interface

Small library of functions you can implement in a basic website to control your dynalites.
This readme contains instructions for those who might not already be familiar with javascript but want to implement these functions on a basic html page to control their dynalites.

To send parameters to your server functions to buttons with event listeners as follows:

*In your HTML*
<button id="myButton">Press Me</button>

*In your javascript*
document.getElementById('myButton').addEventListener('click', <myFunction>);

Each function will come with it's own set of parameters you need to declare.

Likewise, to get parameter values from your server to display, a simple set-up might look like the following:

*In your HTML*
<div id="myDisplay"></div>

*In your javascript*
setInterval(,500)

## Functions

The functions in this library are designed to be called by eventlisteners on any html document.

The functions are based on those set in the Philips Dynalite document, PDEG_CGI.pdf.

*display*

The display will display the current data queried from the endpoint

*button one*

