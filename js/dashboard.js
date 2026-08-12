// Scrooll Behaviour
const scrollElements = document.querySelectorAll(".scroll-reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15
});

scrollElements.forEach((element) => {
  observer.observe(element);
});





// SIDE BAR NAVIGATION!!!!

const menuBtn = document.getElementById("menuBtn");

const sideBarMenu = document.getElementById("sideBarMenu")

const sidebarOverlay = document.getElementById("sidebarOverlay")

menuBtn.addEventListener("click", () => {
  sideBarMenu.classList.toggle ("show");

  sidebarOverlay.classList.toggle("show")

  if (sideBarMenu.classList.contains("show")) {
    menuBtn.textContent = "✕";
  } else {
    menuBtn.textContent = "☰";
  }
})

// This remove the sideBar clicks on it.

sidebarOverlay.addEventListener("click", () => {
  sideBarMenu.classList.remove("show");
  sidebarOverlay.classList.remove("show");

  menuBtn.textContent = "☰";
});







//  Dark and Light Mode.
const darkAndLight = document.getElementsByClassName("darkandLight")[0];

darkAndLight.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    document.getElementsByClassName("darkMode")[0].textContent = "Light Mode";
  } else {
    document.getElementsByClassName("darkMode")[0].textContent = "Dark Mode";
  }
});

//  Notification Icon.

const notification = document.getElementsByClassName("notification")[0];
const notificationCount = document.getElementById("noti");

notification.addEventListener("click", () => {
  notificationCount.textContent = "0";
});







// Select the Recent Trade box
const lastSectionBox = document.getElementsByClassName("lastSectionBox")[1];

const addTradesBtn = document.getElementById("addTradesBtn");

// Trade Container

const tradeContainer = document.createElement("div");
tradeContainer.setAttribute("class", "tradeContainer");

// Save Trade Container

const saveTradesContainer = document.createElement("div");
saveTradesContainer.setAttribute("class", "saveTradesContainer");

// Add Save Trade to Trade Container
tradeContainer.append(saveTradesContainer);

// Add form container to Recent Trade box
lastSectionBox.append(tradeContainer);

const getTradeData = JSON.parse(localStorage.getItem("tradeData"));

// Get today Trade
 const todayTrade = document.getElementById("todayTrade")
 
  const todayDate = new Date().toISOString().split("T")[0];

if (getTradeData) {
  const saveTradeData = document.createElement("div");
  saveTradeData.setAttribute("class", "saveTradeData");

  // Compare date trade entry and today date to dynamically change the Trade.
  if (getTradeData.date === todayDate) {
    todayTrade.textContent = "1"
 } else {
  todayTrade.textContent ="0"
 }

//  WIN RATE: First get the element.
const winRate = document.getElementById("winRate")

// Compare user input.
if(getTradeData.result === "win" || getTradeData.result === "Win" || getTradeData.result === "WIN") {
  winRate.textContent = "100%"
  winRate.style.color = "#16A34A"
} else {
  winRate.textContent = "0%"
  winRate.style.color = "#DC2626"
}

// Today PnL: First get the element and compare them.

 const todayPnL = document.getElementById("todayPnL")
 if(getTradeData.date === todayDate) {
  todayPnL.textContent = `${getTradeData.pnl}`
 } else {
  todayPnL.textContent = "$0.00"
 }

//  BEST TRADE
 const bestTrade = document.getElementById("bestTrade")
//  COMPARE THE RESULT TO WIN IN OTHER TO DANYNAMICALLY CHANGE THE TEXT CONTENT
if (getTradeData.result === "win" || getTradeData.result === "WIN" || getTradeData.result === "Win") {
  bestTrade.textContent = `+${getTradeData.pnl}`
} else {
  bestTrade.textContent = "$0.00"
}

// WORST TRADE
 const worstTrade = document.getElementById("worstTrade")
 if(getTradeData.result === "Loss" || getTradeData.result === "loss" || getTradeData.result === "LOSS") {
  worstTrade.textContent = "$0.00"
 } else {
  worstTrade.textContent = "$0.00"
 }

  //  Pair Name
  const pair = document.createElement("p");
  pair.textContent = `Pair: ${getTradeData.pair}`;

  //  Entry Price
  const entry = document.createElement("p");
  entry.textContent = `Entry Price: ${getTradeData.entryPrice}`;

  //  Stop Loss
  const stop = document.createElement("p");
  stop.textContent = `Stop Loss: ${getTradeData.stopLoss}`;

  //  Take Profit
  const take = document.createElement("p");
  take.textContent = `Take Profit: ${getTradeData.takeProfit}`;

  // Result
 const result = document.createElement("p")
 result.textContent = `Result: ${getTradeData.result}`

  // P&L
  const pnl = document.createElement("p")
  pnl.textContent = `p$L: ${getTradeData.pnl}`

  saveTradeData.append(pair, entry, stop, take, result, pnl);

  saveTradesContainer.append(saveTradeData);
}

addTradesBtn.addEventListener("click", () => {
  // Prevent creating another form if one already exists
  if (document.getElementById("tradeLogs")) {
    return;
  }

  // Select the Recent Trade box
  // const lastSectionBox = document.getElementsByClassName("lastSectionBox")[1];

  // Create a container for the form
  const formContainer = document.createElement("div");
  formContainer.setAttribute("id", "formContainer");

  // Create the form
  const form = document.createElement("form");
  form.setAttribute("id", "tradeLogs");

  // Pair
  const pairLabel = document.createElement("label");
  pairLabel.textContent = "Pair";

  const pairInput = document.createElement("input");
  pairInput.setAttribute("type", "text");

  // Entry Price
  const entryLabel = document.createElement("label");
  entryLabel.textContent = "Entry Price";

  const entryInput = document.createElement("input");
  entryInput.setAttribute("type", "number");

  // Stop Loss
  const stopLabel = document.createElement("label");
  stopLabel.textContent = "Stop Loss";

  const stopInput = document.createElement("input");
  stopInput.setAttribute("type", "number");

  // Take Profit
  const takeProfitLabel = document.createElement("label");
  takeProfitLabel.textContent = "Take Profit";

  const takeProfitInput = document.createElement("input");
  takeProfitInput.setAttribute("type", "number");

 // Result
  const resultLabel = document.createElement("label")
  resultLabel.textContent = "Result"

  const resultInput = document.createElement("input")
  resultInput.setAttribute("type", "text")

  // pnL
  const pnLlabel = document.createElement("label")
  pnLlabel.textContent = "pnL"

  const pnLInput = document.createElement("input")
  pnLInput.setAttribute("type", "number")

  // Save button
  const saveButton = document.createElement("button");
  saveButton.setAttribute("type", "submit");
  saveButton.setAttribute("id", "saveBtn");
  saveButton.textContent = "Save Trade";

  // Add everything to the form
  form.append(
    pairLabel,
    pairInput,
    entryLabel,
    entryInput,
    stopLabel,
    stopInput,
    takeProfitLabel,
    takeProfitInput,
     resultLabel,
    resultInput,
    pnLlabel,
    pnLInput,
    saveButton,
  );

  // Add form to form container
  formContainer.append(form);

  // Add formContainer to Trade Container
  tradeContainer.append(formContainer);

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const tradeLogsInput = pairInput.value;
    const entryPrice = entryInput.value;
    const stopLoss = stopInput.value;
    const takeProfit = takeProfitInput.value;
    const result = resultInput.value;
    const pnl = pnLInput.value

    const trade = {
      pair: tradeLogsInput,
      entryPrice: entryPrice,
      stopLoss: stopLoss,
      takeProfit: takeProfit,
      date: todayDate,
      result: result,
      pnl: pnl,
    };

    localStorage.setItem("tradeData", JSON.stringify(trade));

    formContainer.remove();

    
    // Calculate the Risk Reward

let risk = entryInput.value - stopInput.value;
let reward = takeProfitInput.value - entryInput.value;

let riskReward = reward / risk;

const percent = document.getElementById("percent");

const riskRewardDisplay = document.getElementById("riskReward");

// Round RR to 2 decimal places
const roundedRiskReward = riskReward.toFixed(2);

riskRewardDisplay.textContent = `1 : ${roundedRiskReward.toFixed(2)}`;


// Get the account balance

const accountBalance = document.getElementById("accountBalance");

// Convert the number which is a string to number
let accountAmount = parseFloat(accountBalance.textContent);

let riskDistance = parseFloat(entryPrice) - parseFloat(stopLoss);

// Calculate the percentage of the account balance

const riskPercent = (riskDistance / accountAmount) * 100;

// Round risk percentage to 2 decimal places
const roundedRiskPercent = riskPercent.toFixed(2);

percent.textContent = `${roundedRiskPercent.toFixed(2)}%`;


  });
});
