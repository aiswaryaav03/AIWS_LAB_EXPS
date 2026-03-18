# AIWS_EXP5
TASK_1
# JavaScript Utility Projects

A collection of interactive web applications focusing on **asynchronous JavaScript**, **DOM manipulation**, and **CSS3 animations**.

---

## 1. Speed Quiz App with Timer
A high-pressure MCQ application that tests user knowledge under a strict time limit.

###  Features
*   **Countdown Timer:** 10-second total duration using `setInterval()`.
*   **Visual Warnings:** Displays a "Only 5 seconds remaining!" alert when the clock hits 5s.
*   **Auto-Submission:** Automatically calculates and submits results if the timer reaches zero.
*   **State Management:** Disables all inputs post-submission to prevent late changes.
*   **Responsive Design:** Vibrant, mobile-friendly UI with gradient backgrounds.

###  Technical Implementation
- **Logic:** Uses `FormData` for efficient answer extraction.
- **Timing:** Implements `clearInterval()` to halt execution upon manual submission.
- **Styling:** CSS3 Flexbox and "Blink" keyframe animations.

- TASK_2
- ## 2. Event Countdown Timer
A dynamic countdown tool for event registration forms that tracks time until a specific future date.

### Features
*   **Live Updates:** Real-time calculation of remaining Days, Hours, Minutes, and Seconds.
*   **Dynamic Selection:** Includes a `datetime-local` picker allowing users to set custom event dates.
*   **Validation:** Prevents selection of past dates using the `min` attribute.
*   **Status Indicators:** Automatically hides the clock and displays "Registration Closed" when the event starts.
*   **Modern UI:** "Glassmorphism" design using `backdrop-filter` and semi-transparent layers.

### Technical Implementation
- **Date Math:** Calculates time differences using `Date.getTime()` and mathematical modulo (`%`) operations.
- **Formatting:** Uses `String.padStart(2, '0')` to maintain a consistent 00:00:00 clock format.
- **Event Listeners:** The `change` event ensures the timer resets and updates immediately upon user input.

