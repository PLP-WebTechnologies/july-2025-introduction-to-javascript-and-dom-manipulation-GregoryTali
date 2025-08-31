// ======================================
// Part 1: Variables, Data Types & Conditionals
// ======================================
document.getElementById("checkNumberBtn").addEventListener("click", function () {
  let userInput = document.getElementById("userNumber").value; // Variable
  let resultMessage = "";

  if (userInput === "") {
    resultMessage = "⚠️ Please enter a number.";
  } else if (userInput % 2 === 0) {
    resultMessage = userInput + " is even.";
  } else {
    resultMessage = userInput + " is odd.";
  }

  // DOM Interaction 1: Update text
  document.getElementById("numberResult").innerHTML = resultMessage;
});

// ======================================
// Part 2: Functions — Reusability
// ======================================

// Custom Function 1: Add numbers
function addNumbers(a, b) {
  return a + b;
}

// Custom Function 2: Format message
function formatMessage(text) {
  return "✅ Result: " + text;
}

document.getElementById("addNumbersBtn").addEventListener("click", function () {
  let sum = addNumbers(5, 10); // Use function
  // DOM Interaction 2: Display formatted result
  document.getElementById("sumResult").innerHTML = formatMessage(sum);
});

// ======================================
// Part 3: Loops — Repetition
// ======================================

document.getElementById("showLoopsBtn").addEventListener("click", function () {
  let output = "<strong>For Loop:</strong><br>";

  // Loop Example 1: For loop
  for (let i = 1; i <= 5; i++) {
    output += "Count: " + i + "<br>";
  }

  output += "<br><strong>While Loop:</strong><br>";
  
  // Loop Example 2: While loop
  let j = 5;
  while (j > 0) {
    output += "Countdown: " + j + "<br>";
    j--;
  }

  // DOM Interaction 3: Inject loop output into page
  document.getElementById("loopOutput").innerHTML = output;
});

// ======================================
// Part 4: DOM — Interactivity
// ======================================

// Toggle class on the title
document.getElementById("toggleTitleBtn").addEventListener("click", function () {
  document.getElementById("title").classList.toggle("highlight");
});

// Create elements dynamically
let list = document.getElementById("dynamicList");
["Apple", "Banana", "Cherry"].forEach(item => {
  let li = document.createElement("li");
  li.textContent = item;
  list.appendChild(li);
});
