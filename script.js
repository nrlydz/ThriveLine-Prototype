function showScreen(screenId) {
  // Hide all screens
  let screens = ["store-screen","age-screen","hub-screen","wallet-screen","phone-home","chrome-screen"];
  screens.forEach(id => {
    let el = document.getElementById(id);
    el.style.display = "none";
    el.classList.remove("fade-in");
  });

  // Show the requested screen with fade-in
  let screen = document.getElementById(screenId);
  screen.style.display = "block";
  screen.classList.add("fade-in");
}

// Download → Open flow
function downloadApp() {
  let btn = document.getElementById("download-btn");
  btn.innerText = "Open";
  btn.onclick = function() {
    document.getElementById("store-screen").style.display = "none";
    document.getElementById("age-screen").style.display = "block";
  };
}

// Populate scroll columns
const dayCol = document.getElementById("day");
const monthCol = document.getElementById("month");
const yearCol = document.getElementById("year");

for (let d = 1; d <= 31; d++) {
  dayCol.innerHTML += `<div>${d}</div>`;
}

const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
months.forEach(m => monthCol.innerHTML += `<div>${m}</div>`);

for (let y = 1980; y <= 2026; y++) {
  yearCol.innerHTML += `<div>${y}</div>`;
}

function getSelectedValue(column) {
  const scrollTop = column.scrollTop;
  const itemHeight = column.firstElementChild.offsetHeight;
  const index = Math.round(scrollTop / itemHeight);
  return column.children[index].innerText;
}

// Age verification
function verifyAge() {
  const year = parseInt(getSelectedValue(yearCol));
  const age = 2026 - year;

  if (age >= 17 && age <= 24) {
    document.getElementById("age-screen").style.display = "none";
    document.getElementById("hub-screen").style.display = "block";
  } else {
    document.getElementById("age-message").innerText = "This app is designed for 17–24 year‑olds.";
  }
}

// Hub → Wallet
function goToWallet() {
  document.getElementById("hub-screen").style.display = "none";
  document.getElementById("wallet-screen").style.display = "block";
}

function goBackToHub() {
  document.getElementById("wallet-screen").style.display = "none";
  document.getElementById("hub-screen").style.display = "block";
}

// Close app → phone home
function closeApp() {
  document.getElementById("hub-screen").style.display = "none";
  document.getElementById("phone-home").style.display = "block";
}

// Phone home → Chrome
function openChrome() {
  document.getElementById("phone-home").style.display = "none";
  document.getElementById("chrome-screen").style.display = "block";
}

// Chrome suspicious link
function triggerSuspicious() {
  document.getElementById("alert").style.display = "block";
  let riskNumber = document.getElementById("risk-number");
  riskNumber.innerText = parseInt(riskNumber.innerText) + 1;
}

function closeAlert() {
  document.getElementById("alert").style.display = "none";
}

function backToPhone() {
  document.getElementById("chrome-screen").style.display = "none";
  document.getElementById("phone-home").style.display = "block";
}

function reopenThriveLine() {
  document.getElementById("phone-home").style.display = "none";
  document.getElementById("hub-screen").style.display = "block";
}
