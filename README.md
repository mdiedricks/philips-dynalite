# Philips Dynalite
> A growing, yet quite incomplete, set of functions intended to be dropped into an HTML interface, to contorl Philips Dynalites.

## Table of Contents
* [General Information](#general-information)
* [Project Status](#project-status)
* [Setup Instructions](#setup-instructions)

## General Information

This project was instigated by a friend who was looking to built his own HTML interface to control some Dynalites, but wasn't sure how to implement the JavaScript.

This requires a bit of setup on the part of the user, but if you understand how to attach JavaScript to a button then you're good to go.

## Project Status

The set of instructions is not complete as there were many available that weren't necessary at the time this project happened.

I plan to build upon the functions and clean up the files when time allows again.

## Setup Instructions

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

