// Prices
const COLOR_PRICE = 300;
const BROWN_PRICE = 200;
const MILKY_PRICE = 250;
const BLACK_PRICE = 350;

// DOM Access using getElementById
const colorInput = document.getElementById("color");
const brownInput = document.getElementById("brown");
const milkyInput = document.getElementById("milky");
const blackInput = document.getElementById("black");
const totalSpan = document.getElementById("total");

// Function to calculate total
function calculateTotal() {
    let colorQty = parseInt(colorInput.value) || 0;
    let brownQty = parseInt(brownInput.value) || 0;
    let milkyQty = parseInt(milkyInput.value) || 0;
    let blackQty = parseInt(blackInput.value) || 0;

    let total =
        (colorQty * COLOR_PRICE) +
        (brownQty * BROWN_PRICE) +
        (milkyQty * MILKY_PRICE) +
        (blackQty * BLACK_PRICE);

    totalSpan.textContent = total;
}

// onclick event
document.getElementById("orderBtn").onclick = function () {
    calculateTotal();
};

// onkeyup event (live calculation while typing)
colorInput.onkeyup = calculateTotal;
brownInput.onkeyup = calculateTotal;
milkyInput.onkeyup = calculateTotal;
blackInput.onkeyup = calculateTotal;

// onchange event (when value changed via arrows)
colorInput.onchange = calculateTotal;
brownInput.onchange = calculateTotal;
milkyInput.onchange = calculateTotal;
blackInput.onchange = calculateTotal;
