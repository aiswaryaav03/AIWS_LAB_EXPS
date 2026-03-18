# exp_6_aiws

📅 Interactive Event Management System
A sleek, responsive web application built with HTML5, CSS3 (Modern UI), and jQuery. This system allows users to browse upcoming events, view specific details with smooth animations, and register for events with automatic data passing.
 Features
Interactive Event Cards: Modern "Glassmorphism" design with hover effects.
Smooth UI/UX: Uses jQuery slideToggle() to reveal details and dynamic text changes (Show/Hide).
DOM Traversing: Precisely targets and highlights selected events using jQuery traversing methods (siblings, closest, parent).
Data Persistence: Automatically passes the Event Title from the listing page to the registration form via URL parameters.
Read-Only Inputs: Prevents users from tampering with the selected event name on the registration page.


Browse: Scroll through the list of events.
Show Details: Click the "Show Details" button. The background will change, the title will be highlighted in blue, and an alert will confirm your selection.
Register: Click the "Register Now" button inside the expanded details.
Auto-Fill: You will be redirected to the registration page where the Event Name is already filled and locked (non-editable).
💻 Tech Stack Used
Frontend: HTML5, CSS3 (Flexbox, Google Fonts "Poppins")
Scripting: JavaScript / jQuery 3.6.0
Communication: URL Query Strings (?event=Name)
📝 Technical Logic Summary
Redirect Logic:
window.location.href = "register.html?event=" + encodeURIComponent(eventName);
Retrieval Logic:
const params = new URLSearchParams(window.location.search);
Effects:
.slideToggle(), .css(), .addClass()
