// ================================
// Part 2: JavaScript Functions
// ================================

// Global variable
let globalMultiplier = 2;

// Function with parameters + return
function calculateRectangleArea(width, height) {
  // Demonstrates local scope
  let area = width * height;
  return area * globalMultiplier; // using global + local scope
}

// Function to update DOM with result
function showArea() {
  const resultElement = document.getElementById("calcResult");
  let width = 5, height = 10; // example values
  let area = calculateRectangleArea(width, height);
  resultElement.textContent = `Rectangle area (with multiplier): ${area}`;
}

// Attach event listener
document.getElementById("calcBtn").addEventListener("click", showArea);

// ================================
// Part 3: Combining CSS + JS
// ================================

// Reusable function to toggle animation
function toggleAnimation(element, className) {
  element.classList.toggle(className);
}

// Grab elements
const animateBtn = document.getElementById("animateBtn");
const jsBox = document.querySelector(".js-box");

// Event to trigger CSS animation class
animateBtn.addEventListener("click", () => {
  toggleAnimation(jsBox, "animate");
});

// ================================
// Extra Example of Function Scope
// ================================
function scopeDemo() {
  let localVar = "I’m local!";
  console.log(localVar); // Accessible here
}
// console.log(localVar); // Would cause an error (not in scope)
