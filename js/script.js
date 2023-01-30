/** @format */
(function ($) {
  "use strict";

  $(document).ready(function () {
    $(".multiple-checkboxes").multiselect({
      includeSelectAllOption: true,
    });
  });
})(jQuery);

//Done =====================================================================
// Variables
let totalNoTax = document.getElementById("totalNoTax");
let tax = document.getElementById("tax");
let totalTaxed = document.getElementById("totalTaxed");
let totalDevTaxed = document.getElementById("totalDevTaxed");
let devsTax = document.getElementById("devsTax");
let meterPrice = document.getElementById("meterPrice");
let kitchenType = document.getElementById("kitchenType");
let totalDevNoTax = document.getElementById("totalDevNoTax");
let meterTotalPrice = document.getElementById("meterTotalPrice");
let descUpCount = document.getElementById("descUpCount");
let descDownCount = document.getElementById("descDownCount");
let meterTotal = document.getElementById("meterTotal");
let upCount = document.getElementById("upCount");
let downCount = document.getElementById("downCount");
let island = document.getElementById("island");
let DevSupergasTotal, DevOtherTotal;

//Done =====================================================================
// show section
function show(type) {
  if (type == "devices") {
    var divsToHide = document.querySelectorAll(".section");
    var divsToShow = document.querySelectorAll(".devicesData");
  } else if (type == "kitchen") {
    var divsToHide = document.querySelectorAll(".devicesData");
    var divsToShow = document.querySelectorAll(".section");
  }
  divsToShow.forEach(function (divsToShow) {
    divsToShow.classList.remove("hide");
  });
  divsToHide.forEach(function (divsToHide) {
    divsToHide.classList.add("hide");
  });
}
//Done =====================================================================

//Done =====================================================================
//Get kitchen rows Totals
function calc(num) {
  let count = document.getElementById(`addCount${num}`).value;
  let price = document.getElementById(`addName${num}`).value;
  let total = document.getElementById(`addTotal${num}`);
  let totalVal = Math.round(count * price * 100) / 100;
  total.value = totalVal;
  getPrice();
}
function calcManual(num) {
  let count = document.getElementById(`addCount${num}`).value;
  let price = document.getElementById(`addPrice${num}`).value;
  let total = document.getElementById(`addTotal${num}`);
  let totalVal = Math.round(count * price * 100) / 100;
  total.value = totalVal;
  getPrice();
}
//Done =====================================================================

//Done =====================================================================
//Get kitchen sum of rows Totals (span after title)
function updateTotalsGT(index) {
  var arr = document.querySelectorAll(`.addGT${index}`);
  var gTotal = 0;
  for (var i = 0; i < arr.length; i++) {
    if (parseFloat(arr[i].value)) {
      gTotal += parseFloat(arr[i].value);
    }
    gTotal = Math.round(gTotal * 100) / 100;
    document.getElementById(`addGTT${index}`).innerHTML = gTotal;
  }
}
//Done =====================================================================


function differenceCheck() {
 
  let totalTaxed = document.getElementById("totalTaxed");
  let difference = document.getElementById("difference");
  let manualCalc = document.getElementById("manualCalc");
  if (!manualCalc.value > 0) {
    manualCalc.value = 0;
  }
  if (!isNaN(manualCalc.value) && !isNaN(totalTaxed.value) && !isNaN(difference.value)) {
    difference.value = Math.round(
      (parseFloat(manualCalc.value) - parseFloat(totalTaxed.value))
      * 100) / 100;
    if (difference.value > 0) {
      difference.classList.add("bg-success");
      difference.classList.remove("bg-danger");
    } else if (difference.value < 0) {
      difference.classList.remove("bg-success");
      difference.classList.add("bg-danger");
    } else {
      difference.classList.remove("bg-danger");
      difference.classList.remove("bg-success");
    }
    
  } else {
    difference.value = 0;
  }
  

}


////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////// new short code///////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function getPrice() {
  meterPrice.value = kitchenType.value;
  totalNoTax.value = 0;
  
  getMeters();
  calcKit();
  updateTotals();
  devicesTotals();
}



function devicesTotals() {
  calcDevSG();
  calcDev();
  var arr = document.querySelectorAll(".dev-price");
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    if (parseFloat(arr[i].value)) {
      total += parseFloat(arr[i].value);
    }
  }
  total = Math.round(total * 100) / 100;
  totalDevNoTax.value = total;
  devsTax.value = Math.round(total * 0.15 * 100) / 100;
  totalDevTaxed.value = Math.round(total * 1.15 * 100) / 100;
}

//calcing supergas devices
function calcDevSG() {
  let devSGType, devSGCode, devSGPrice, devSGTax, devSGTotal;
  let devSGTotalNoTax = 0;
  let devSGTotalTax = 0;
  let devSGTotalTaxed = 0;
  let i = 1;
  while (true) {
    devSGType = document.getElementById("devSGType0" + i);
    if (!devSGType) break;
    devSGCode = document.getElementById("devSGCode0" + i);
    devSGPrice = document.getElementById("devSGPrice0" + i);
    devSGTax = document.getElementById("devSGTax0" + i);
    devSGTotal = document.getElementById("devSGTotal0" + i);
    devSGCode.value = devSGType.selectedOptions[0].getAttribute("data-code");
    devSGPrice.value = devSGType.selectedOptions[0].getAttribute("data-price");
    devSGTax.value = Math.round(devSGPrice.value * 0.15 * 100) / 100;
    devSGTotal.value = Math.round(devSGPrice.value * 1.15 * 100) / 100;
    devSGTotalNoTax += parseFloat(devSGPrice.value);
    devSGTotalTax += parseFloat(devSGTax.value);
    devSGTotalTaxed += parseFloat(devSGTotal.value);
    i++;
  }
}

function calcDev() {
  // Get all rows
const rows = document.querySelectorAll(".row");
// Function to calculate tax and total
function devTaxing(e) {
  // Get the current row
  const row = e.target.closest(".row");
  // Get the price field
  const priceField = row.querySelector(".devPrice");
  // Get the tax field
  const taxField = row.querySelector(".devTax");
  // Get the total field
  const totalField = row.querySelector(".devTotal");

  // Get the price value
  const price = parseFloat(priceField.value);
  // Calculate the tax (15% of price)
  const tax = price * 0.15;
  // Calculate the total (price + tax)
  const total = price + tax;
  // Round tax and total to 2 decimal places
  const roundTax = Math.round(tax * 100) / 100;
  const roundTotal = Math.round(total * 100) / 100;

  // Update the tax and total fields
  taxField.value = roundTax;
  totalField.value = roundTotal;

  // Update the tax and total fields
  taxField.value = roundTax;
  totalField.value = roundTotal;
  }
  // Add an event listener to each price field
rows.forEach((row) => {
  const priceField = row.querySelector(".devPrice");
  if (priceField) priceField.addEventListener("input", devTaxing);
});
}


function getMeters() {
  var up2 = parseFloat(upCount.value);
  var down2 = parseFloat(downCount.value);
  var island2 = parseFloat(island.value);
  var descDown2 = parseFloat(descDownCount.value);
  var descUp2 = parseFloat(descUpCount.value);
  var price2 = parseFloat(meterPrice.value);

  var total =
    Math.round(
      (up2 * 0.34 +   down2 * 0.66 +  island2 * 0.7 -   descDown2 * 0.64 -   descUp2 * 0.34) *    100 ) / 100;
  meterTotal.value = total;
  meterTotalPrice.value = Math.round(total * price2 * 100) / 100;
}

function calcKit() {
    //getting total of every totato with class addGt
	var arr = document.querySelectorAll(".addGT");
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    if (parseFloat(arr[i].value)) {
      total += parseFloat(arr[i].value);
    }
    total = Math.round(total * 100) / 100;
    totalNoTax.value = total;
    tax.value = Math.round(total * 0.15 * 100) / 100;
    totalTaxed.value = Math.round(total * 1.15 * 100) / 100;
  }
}

function updateTotals() {


  //getting total of main data section (meters and so )
  heightTotalPrice.value = Math.round(
    (parseFloat(height.value) *
      parseFloat(heightCount.value) *
      2 *
      (parseFloat(meterPrice.value) * 0.22) *
      100) /
      100
  );
	let totalCost = 0;
	let discountValue = 0;
  if (   !isNaN(totalNoTax.value) &&   !isNaN(meterTotalPrice.value) &&  !isNaN(heightTotalPrice.value)  ) {
    if (!isNaN(discount.value) && discount.value > 0) {
      discountValue = (parseFloat(meterTotalPrice.value) * parseFloat(discount.value)) / 100;
      totalCost = parseFloat(totalNoTax.value) + parseFloat(meterTotalPrice.value) +	parseFloat(heightTotalPrice.value);
      totalCost = totalCost - discountValue;
    } else {
      totalCost = parseFloat(totalNoTax.value) +  parseFloat(meterTotalPrice.value) +   parseFloat(heightTotalPrice.value);
    }
  }
  totalNoTax.value = 0;
  totalNoTax.value = totalCost;
  tax.value = Math.round(totalCost * 0.15 * 100) / 100;
  totalTaxed.value = Math.round(totalCost * 1.15 * 100) / 100;

  for (var i = 0; i <= 15; i++) {
    if (i < 10) {
      updateTotalsGT("0" + i);
    } else {
      updateTotalsGT(i.toString());
    }
  }
  differenceCheck();
}














///////////////////////////////////////////////////////////////////////////////////////
////////////////// get tax and total for each device row //////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
// // Get all rows
// const rows = document.querySelectorAll(".row");
// // Function to calculate tax and total
// function devTaxing(e) {
//   // Get the current row
//   const row = e.target.closest(".row");
//   // Get the price field
//   const priceField = row.querySelector(".devPrice");
//   // Get the tax field
//   const taxField = row.querySelector(".devTax");
//   // Get the total field
//   const totalField = row.querySelector(".devTotal");

//   // Get the price value
//   const price = parseFloat(priceField.value);
//   // Calculate the tax (15% of price)
//   const tax = price * 0.15;
//   // Calculate the total (price + tax)
//   const total = price + tax;
//   // Round tax and total to 2 decimal places
//   const roundTax = Math.round(tax * 100) / 100;
//   const roundTotal = Math.round(total * 100) / 100;

//   // Update the tax and total fields
//   taxField.value = roundTax;
//   totalField.value = roundTotal;

//   // Update the tax and total fields
//   taxField.value = roundTax;
//   totalField.value = roundTotal;
// }

// // Add an event listener to each price field
// rows.forEach((row) => {
//   const priceField = row.querySelector(".devPrice");
//   if (priceField) priceField.addEventListener("input", devTaxing);
// });

  
  
  let originalState;
  window.addEventListener("beforeprint", function () {
      originalState = document.body.innerHTML;
    hideEmptyInputs();
  });
  window.addEventListener("afterprint", function () {
      document.body.innerHTML= originalState;
  });
  
 
  //working to hide empty input 
  function hideEmptyInputs() {
    for (let i = 1; i <= 40; i++) {
      let row = document.querySelector(`.addRow${i < 10 ? "0" + i : i}`);
      let input = document.getElementById(`addTotal${i}`);
      if (input.value > 0) {
        row.style.display = "flex";
      } else {
        row.style.display = "none";
      };
    }
    //hide devices
    for (let d = 1; d <= 8; d++) {
      let devRow = document.querySelector(`.devRow${d < 10 ? '0' + d : d}`);
      let devInput = document.getElementById(`devTotal${d}`);
      if (devInput.value > 0) {
        devRow.style.display = "flex";
      } else {
        devRow.style.display = "none";
      }
    }
    
  }
  
  

//change the title with contract name

function changeTitle() {
  let title;
  let contractNo = document.getElementById('mainContractNo').value;
  let customer = document.getElementById('customerName').value;
  title = `Ev-Calc-${contractNo}-${customer}`;
  document.title = title;
  
}


///////////////////////////////////////////////////////////////////////////
//Save and resore Working
///////////////////////////////////////////////////////////////////////////
      
      
function saveForm() {
  const mainContractNo = document.getElementById("mainContractNo").value;
  const inputs = document.querySelectorAll("input, textarea, select");
  const data = {};
  for (const input of inputs) {
    data[input.id] = input.value;
  }
  sessionStorage.setItem(mainContractNo, JSON.stringify(data));
}

function restoreForm() {
  const mainContractNo = prompt("ادخل رقم العقد");
  const storedData = sessionStorage.getItem(mainContractNo);
  if (storedData) {
    const data = JSON.parse(storedData);
    const inputs = document.querySelectorAll("input, textarea, select");
    for (const input of inputs) {
      if (data.hasOwnProperty(input.id)) {
        input.value = data[input.id];
      }
    }
  } else {
    alert("لا يوجد عقد مسجل بهذا الرقم");
  }
}

function clearForm() {
  sessionStorage.removeItem(mainContractNo);
  const inputs = document.querySelectorAll("input, textarea, select");
  for (const input of inputs) {
    input.value = "";
  }
}