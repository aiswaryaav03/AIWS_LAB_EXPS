// DOM Access using getElementById
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const peopleInput = document.getElementById("people");

const tipSpan = document.getElementById("tipAmount");
const totalSpan = document.getElementById("totalAmount");
const perPersonSpan = document.getElementById("perPerson");

// Calculation Function
function calculateTip() {

    let bill = parseFloat(billInput.value) || 0;
    let tipPercent = parseFloat(tipInput.value) || 0;
    let people = parseInt(peopleInput.value) || 1;

    let tipAmount = (bill * tipPercent) / 100;
    let totalAmount = bill + tipAmount;
    let perPerson = totalAmount / people;

    // Update DOM dynamically
    tipSpan.textContent = tipAmount.toFixed(2);
    totalSpan.textContent = totalAmount.toFixed(2);
    perPersonSpan.textContent = perPerson.toFixed(2);
}

// onkeyup → Live calculation while typing
billInput.onkeyup = calculateTip;
tipInput.onkeyup = calculateTip;
peopleInput.onkeyup = calculateTip;

// onchange → When arrows / value changed
billInput.onchange = calculateTip;
tipInput.onchange = calculateTip;
peopleInput.onchange = calculateTip;

// onsubmit → Prevent page reload
document.getElementById("tipForm").onsubmit = function (event) {
    event.preventDefault(); // IMPORTANT FOR EXAM
    calculateTip();
};