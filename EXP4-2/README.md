# AIWS_EXP4-2-

Tip Calculator – DOM Based Web Application
Project Description

The Tip Calculator is a client-side web application developed using HTML, CSS, and JavaScript.
The application enables users to enter the bill amount, tip percentage, and number of people, then dynamically calculates:
Tip amount
Total payable amount
Per-person share
All calculations are performed without reloading the page, demonstrating DOM manipulation and JavaScript event handling.

Objectives

Design an interactive webpage using HTML, CSS, and JavaScript
Implement DOM element access methods
Handle user input via JavaScript events
Perform client-side calculations
Update content dynamically without page refresh

Features
✔ User-friendly input interface
✔ Live calculation while typing
✔ Automatic updates on value change
✔ No page reload (fully client-side)
✔ Clean and responsive layout

Calculations Performed

The application computes:
Tip Amount = (Bill × Tip %) / 100
Total Amount = Bill + Tip Amount
Per Person Share = Total Amount / Number of People

Technologies Used

HTML → Page structure
CSS → Layout and styling
JavaScript → Logic, DOM manipulation, event handling

DOM Methods Used

The application uses standard DOM access techniques:
document.getElementById()
These methods allow JavaScript to read user inputs and update results dynamically.

Events Implemented

The webpage responds to user actions using:
onkeyup → Real-time calculation while typing
onchange → Detect value modifications
onsubmit → Form submission handling

Working Principle

User enters bill amount
User enters tip percentage
User specifies number of people
JavaScript retrieves input values via DOM
Calculations are performed
Results are displayed dynamically
All updates occur without page reload.
