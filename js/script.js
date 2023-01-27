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
// let totalNoTax = document.getElementById("totalNoTax");
// let tax = document.getElementById("tax");
// let totalTaxed = document.getElementById("totalTaxed");
// let totalDevTaxed = document.getElementById("totalDevTaxed");
// let devsTax = document.getElementById("devsTax");
// let meterPrice = document.getElementById("meterPrice");
// let kitchenType = document.getElementById("kitchenType");
// let totalDevNoTax = document.getElementById("totalDevNoTax");
// let meterTotalPrice = document.getElementById("meterTotalPrice");
// let descUpCount = document.getElementById("descUpCount");
// let descDownCount = document.getElementById("descDownCount");
// let meterTotal = document.getElementById("meterTotal");
// let upCount = document.getElementById("upCount");
// let downCount = document.getElementById("downCount");
// let island = document.getElementById("island");

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
  updateTotals();
}
function calcManual(num) {
  let count = document.getElementById(`addCount${num}`).value;
  let price = document.getElementById(`addPrice${num}`).value;
  let total = document.getElementById(`addTotal${num}`);
  let totalVal = Math.round(count * price * 100) / 100;
  total.value = totalVal;
  updateTotals();
}
//Done =====================================================================

//Done =====================================================================
//Get kitchen sum of rows Totals
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


function difference() {
 
  let totalTaxed = document.getElementById("totalTaxed");
  let difference = document.getElementById("difference");
  let manualCalc = document.getElementById("manualCalc");
  if (!isNaN(manualCalc.value) && !isNaN(totalTaxed.value)) {
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






////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

// let totalNoTax = document.getElementById("totalNoTax");
// let tax = document.getElementById("tax");
// let totalTaxed = document.getElementById("totalTaxed");
// let totalDevTaxed = document.getElementById("totalDevTaxed");
// let devsTax = document.getElementById("devsTax");
// let meterPrice = document.getElementById("meterPrice");
// let kitchenType = document.getElementById("kitchenType");
// let totalDevNoTax = document.getElementById("totalDevNoTax");
// let meterTotalPrice = document.getElementById("meterTotalPrice");
// let descUpCount = document.getElementById("descUpCount");
// let descDownCount = document.getElementById("descDownCount");
// let meterTotal = document.getElementById("meterTotal");
// let upCount = document.getElementById("upCount");
// let downCount = document.getElementById("downCount");
// let island = document.getElementById("island");

// function taxing() {
// 	getPrice();
// 	tax.value = Math.round(totalNoTax.value * 0.15 * 100) / 100;
// 	totalTaxed.value = Math.round(totalNoTax.value * 1.15 * 100) / 100;
// }

// function getPrice() {
// 	let totalNoTax = document.getElementById("totalNoTax");
// 	let tax = document.getElementById("tax");
// 	let totalTaxed = document.getElementById("totalTaxed");
// 	var arr = document.querySelectorAll(".dev-price");
// 	var total = 0;
// 	for (var i = 0; i < arr.length; i++) {
//     if (parseFloat(arr[i].value)) {
//       total += parseFloat(arr[i].value);
// 		}
// 		total = Math.round(total * 100) / 100;
// 		totalDevNoTax.value = total;
// 		tax.value = Math.round(total * 0.15 * 100) / 100;
// 		totalTaxed.value = Math.round(total * 1.15 * 100) / 100;
// 	}
// 	meterPrice.value = kitchenType.value;
// 	updateTotals();
// 	getMeters();
// }

// function getMeters() {
//   meterTotal.value =
// 	Math.round(
// 	  (
// 		(parseFloat(upCount.value)*0.34) +
// 		 (parseFloat(downCount.value)*0.66)+
// 		 (parseFloat(island.value)*0.7)-
// 		 (parseFloat(descDownCount.value)*0.64)-
// 		 (parseFloat(descUpCount.value)*0.34)
// 		 )
// 	* 100) / 100;
// 	meterTotalPrice.value = Math.round(
// 		(
// 			(
// 			(parseFloat(upCount.value)*0.34) +
// 			(parseFloat(downCount.value)*0.66)+
// 			(parseFloat(island.value)*0.7)-
// 			(parseFloat(descDownCount.value)*0.64)-
// 			(parseFloat(descUpCount.value)*0.34)
// 			)
// 			*
// 			(parseFloat(meterPrice.value))

// 		)* 100) / 100;
// };

//  function updateTotals() {
// 	 let tax = document.getElementById("tax");
// 	 let totalTaxed = document.getElementById("totalTaxed");
// 	 let height = document.getElementById("height");
// 	 let heightCount = document.getElementById("heightCount");
// 	 let heightTotalPrice = document.getElementById("heightTotalPrice");
// 	 let discount = document.getElementById("discount");
// 	 var arr = document.querySelectorAll(".addGT");
// 	 var total = 0;
// 	 for (var i = 0; i < arr.length; i++) {
// 		 if (parseFloat(arr[i].value)) {
// 			 total += parseFloat(arr[i].value);
// 			}
// 			total = Math.round(total * 100) / 100;
// 			totalNoTax.value = total;
// 			tax.value = Math.round(total * 0.15 * 100) / 100;
// 			totalTaxed.value = Math.round(total * 1.15 * 100) / 100;
// 		}

// 		heightTotalPrice.value = Math.round(((parseFloat(height.value) * parseFloat(heightCount.value) * 2) * 	(parseFloat(meterPrice.value) * 0.22)* 100) / 100);
// 			let totalCost = 0;
// 			if (!isNaN(totalNoTax.value) && !isNaN(meterTotalPrice.value) && !isNaN(heightTotalPrice.value)) {
// 				if (!isNaN(discount.value)) {
// 					totalCost = parseFloat(totalNoTax.value) + parseFloat(meterTotalPrice.value) + parseFloat(heightTotalPrice.value);
// 					totalCost = totalCost - parseFloat(discount.value);
// 				} else {
// 					totalCost = parseFloat(totalNoTax.value) + parseFloat(meterTotalPrice.value) + parseFloat(heightTotalPrice.value);
// 				}
// 			}
// 			totalNoTax.value = totalCost;
// 			devsTax.value = Math.round(totalDevNoTax.value * 0.15 * 100) / 100;
// 	 		totalDevTaxed.value = Math.round(totalDevNoTax.value * 1.15 * 100) / 100;

// 			tax.value = Math.round(totalCost * 0.15 * 100) / 100;
// 			totalTaxed.value = Math.round(totalCost * 1.15 * 100) / 100;
// 	 for (var i = 0; i <= 15; i++) {
// 		if (i < 10) {
// 			updateTotalsGT("0" + i);
// 		} else {
// 			updateTotalsGT(i.toString());
// 		}
// 	}
// 		}

////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

//  //collapsing
//  var coll = document.getElementsByClassName("collapsible");
//  var i;
//  for (i = 0; i < coll.length; i++) {
// 		coll[i].addEventListener("click", function () {
// 			this.classList.toggle("active");
// 			var content = this.parentElement.getElementsByClassName("content");
// 			// content[i].style.display = "flex";
// 			for (i = 0; i < content.length; i++) {
// 				if (content[i].style.display === "flex") {
// 					content[i].style.display = "none";
// 				} else {
// 					content[i].style.display = "flex";
// 				}
// 			}
// 		});
//  }

// function printPdf()
// {
//   var fileName = document.getElementById("mainContractNo").value;
//   // window.print({
//   // 	zoom: 0.3, // scale factor of 75%
//   // });
//   // }

//   // Source HTMLElement or a string containing HTML.
//   // var elementHTML = document.querySelector("#fullSite");

//   // window.jsPDF = window.jspdf.jsPDF;
//   var pdf = new jsPDF({
//     unit: "mm",
//     format: "a4",
//   });

//   // Convert_HTML_To_PDF();
//   // Convert HTML content to PDF
//   // function Convert_HTML_To_PDF()
//   // {
//     // var doc = new jsPDF();

//     // Source HTMLElement or a string containing HTML.
//     // var elementHTML = document.querySelector("#fullSite");

//     // doc.html(elementHTML, {
//     // doc.html(document.body, {
//     //   callback: function (doc)
//     //   {
//     //     // Save the PDF
//     //     doc.save("document-html.pdf");
//     //   },
//     //   margin: [10, 10, 10, 10],
//     //   autoPaging: "text",
//     //   x: 0,
//     //   y: 0,
//     //   width: 190, //target width in the PDF document
//     //   windowWidth: 675, //window width in CSS pixels
//     // });

//     html2canvas(document.body, {
//       zoom: 0.75,
//       width: 800,
//       height: 1200,
//       orientation: "portrait",
//       textDirection: "rtl",
//     }).then(function (canvas)
//     {
//       // add the canvas element to the PDF as a JPEG image
//       pdf.addImage(canvas, "JPEG", 0, 0);
//       // save the PDF
//       pdf.save(fileName + ".pdf");
//     });

//   }

// }

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////// new short code///////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

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

function taxing() {
  getPrice();
}

function getPrice() {
  var arr = document.querySelectorAll(".dev-price");
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    if (parseFloat(arr[i].value)) {
      total += parseFloat(arr[i].value);
    }
  }
  total = Math.round(total * 100) / 100;
  totalDevNoTax.value = total;
  tax.value = Math.round(total * 0.15 * 100) / 100;
  totalTaxed.value = Math.round(total * 1.15 * 100) / 100;
  meterPrice.value = kitchenType.value;
  getMeters();
  updateTotals();
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
      (up2 * 0.34 +
        down2 * 0.66 +
        island2 * 0.7 -
        descDown2 * 0.64 -
        descUp2 * 0.34) *
        100
    ) / 100;
  meterTotal.value = total;
  meterTotalPrice.value = Math.round(total * price2 * 100) / 100;
}

function updateTotals() {
  // let tax = document.getElementById("tax");
  // let totalTaxed = document.getElementById("totalTaxed");
  // let height = document.getElementById("height");
  // let heightCount = document.getElementById("heightCount");
  // let heightTotalPrice = document.getElementById("heightTotalPrice");
  // let discount = document.getElementById("discount");
  // let totalNoTax = document.getElementById("totalNoTax");
  // let meterTotalPrice = document.getElementById("meterTotalPrice");
  // let meterPrice = document.getElementById("meterPrice");
  // let totalDevNoTax = document.getElementById("totalDevNoTax");
  // let devsTax = document.getElementById("devsTax");
  // let totalDevTaxed = document.getElementById("totalDevTaxed");
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
  if (
    !isNaN(totalNoTax.value) &&
    !isNaN(meterTotalPrice.value) &&
    !isNaN(heightTotalPrice.value)
  ) {
    if (!isNaN(discount.value) && discount.value > 0) {
			discountValue= (parseFloat(meterTotalPrice.value) * parseFloat(discount.value))/100;
      totalCost =
        parseFloat(totalNoTax.value) +
        parseFloat(meterTotalPrice.value) +
				parseFloat(heightTotalPrice.value);
      totalCost = totalCost - discountValue;
    } else {
      totalCost =
        parseFloat(totalNoTax.value) +
        parseFloat(meterTotalPrice.value) +
        parseFloat(heightTotalPrice.value);
    }
  }
  totalNoTax.value = totalCost;
  devsTax.value = Math.round(totalDevNoTax.value * 0.15 * 100) / 100;
  totalDevTaxed.value = Math.round(totalDevNoTax.value * 1.15 * 100) / 100;
  tax.value = Math.round(totalCost * 0.15 * 100) / 100;
  totalTaxed.value = Math.round(totalCost * 1.15 * 100) / 100;
  for (var i = 0; i <= 15; i++) {
    if (i < 10) {
      updateTotalsGT("0" + i);
    } else {
      updateTotalsGT(i.toString());
    }
  }
  difference();
}














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










// function hideEmptyInputs() {
//   let inputs = document.querySelectorAll("input");
//   inputs.forEach(function (input) {
//     if (input.value === "" || input.value === "0") {
//       if (!input.parentNode.classList.contains("exclude")) {
//         input.parentNode.parentNode.style.display = "none";
//       }
//     }
//   });
// }

// let originalState;

// window.addEventListener("beforeprint", function () {
  //   // originalState = document.body.innerHTML;
  //   hideEmptyInputs();
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
  
  






// window.onbeforeprint = hideEmptyInputs;


// function hideEmptyInputs() {
//   const inputs = document.querySelectorAll('.addGT');
//   for (let i = 0; i < inputs.length; i++) {
//     inputs[i].addEventListener("input", function() {
//       if (this.value == "" || this.value == "0") {
//         this.parentNode.parentNode.style.display = "none !important";
//       } else {
//         this.parentNode.parentNode.style.display = "flex !important";
//       }
//     });
//   }
// }


// function hideEmptyInputs() {
//   for (let i = 1; i <= 40; i++) {
//     let row = document.querySelector(`.addRow${i < 10 ? "0" + i : i}`);
//     let input = document.querySelector(`#addGT${i < 10 ? "0" + i : i}`);
//     if (input) {
//       if (input.value > 0) {
//         row.style.display = "none";
//       } else {
//         row.style.display = "flex";
//       }
//     }
//   }
// }








  // let inputs = document.querySelectorAll(`addGT`);
  // inputs.forEach(function (input) {
    //   if (input.value !== "" || input.value !== "0" || !input.parentNode.classList.contains("exclude")) {
      //       input.parentNode.parentNode.style.display = "flex";
      //     } else {
        //     input.parentNode.parentNode.style.display = "none";
        //     }
        // });
      // }
      
      
/*       function hideEmptyRows() {
        for (let i = 1; i <= 40; i++) {
          let row = document.querySelector(`.addRow${i < 10 ? "0" + i : i}`);
          let input = document.querySelector(`#addTotal${i < 10 ? "0" + i : i}`);
          input.addEventListener("input", function() {
            if (this.value > 0) {
              row.style.display = "none";
            } else {
              row.style.display = "flex";
            }
          });
        }
  for (let d = 1; d <= 10; d++) {
    let devRow = document.querySelector(`.devRow${d < 10 ? '0' + d : d}`);
    let devInput = document.querySelector(`#devTotal${d < 10 ? '0' + d : d}`);
    if (devInput.value === "" || devInput.value == 0) {
      devRow.classList.add("hide-on-print");
    } else {
      devInput.classList.remove("hide-on-print");
    }
  }
} */
// window.onbeforeprint = hideEmptyRows;


// function printPdf() {
// let pageHeight = doc.internal.pageSize.height || doc.internal.pageSize.getHeight()
// let pageWidth = doc.internal.pageSize.width || doc.internal.pageSize.getWidth()
// let recipientBlock = document.querySelector(".div2-block")
// let rHeight = recipientBlock.clientHeight
// let rWidth = recipientBlock.clientWidth

// doc.fromHTML(document.querySelector(".div1-block"),
//    22, 17, { 'width': 200, 'height': 200 },
//    function (a) {
//       doc.fromHTML(document.querySelector(".div2-block"),
//           pageWidth / 2 - rWidth / 4,
//           pageHeight / 2 - rHeight / 4,
//           { 'width': 200, 'height': 200 },
//           function (a) {
//               let blobPDF = new Blob([doc.output()], { type: 'application/pdf' });
//               let blobUrl = URL.createObjectURL(blobPDF);
//               window.open(blobUrl);
//                 });
//         });

// }
// let element = document.getElementById('collectAll');

// var element = document.getElementById('element-to-print');
// var opt = {
//   margin:       1,
//   filename:     'myfile.pdf',
//   image:        { type: 'jpeg', quality: 0.98 },
//   html2canvas:  { scale: 2 },
//   jsPDF:        { unit: 'in', format: 'A4', orientation: 'portrait' }
// };
// function printPdf() {
//   html2pdf(element, opt);
// };



// Import the jsPDF library
// var jsPDF = require('jspdf');

// Select the button and input elements
var button = document.querySelector('#save-button');
var input = document.querySelector('#mainContractNo');

// Add an event listener to the button
// Add an event listener to the button
button.addEventListener('click', function() {
  // Get the value of the input
  var contractNo = input.value;

  // // Add the input value to the page
  // var div = document.createElement('div');
  // div.innerHTML = 'Contract No: ' + contractNo;
  // document.body.appendChild(div);
  let originalState;
      originalState = document.body.innerHTML;
    hideEmptyInputs();
    window.print();
    document.body.innerHTML= originalState;
  // Prompt the user to save or print the page
});