/** @format */
(function ($) {
	"use strict";

	$(document).ready(function () {
		$(".multiple-checkboxes").multiselect({
			includeSelectAllOption: true,
		});
	});
})(jQuery);

let devTotal = 0;
let totalNoTax = document.getElementById("totalNoTax");
let tax = document.getElementById("tax");
let totalTaxed = document.getElementById("totalTaxed");

function taxing() {
	getPrice();
	tax.value = Math.round(totalNoTax.value * 0.15 * 100) / 100;
	totalTaxed.value = Math.round(totalNoTax.value * 1.15 * 100) / 100;
}

let meterPrice = document.getElementById("meterPrice");
let kitchenType = document.getElementById("kitchenType");
let totalDevNoTax = document.getElementById("totalDevNoTax");
function getPrice() {
	let totalNoTax = document.getElementById("totalNoTax");
	let tax = document.getElementById("tax");
	let totalTaxed = document.getElementById("totalTaxed");
	var arr = document.querySelectorAll(".dev-price");
	var total = 0;
	for (var i = 0; i < arr.length; i++) {
    if (parseFloat(arr[i].value)) {
      total += parseFloat(arr[i].value);
		}
		total = Math.round(total * 100) / 100;
		totalDevNoTax.value = total;
		tax.value = Math.round(total * 0.15 * 100) / 100;
		totalTaxed.value = Math.round(total * 1.15 * 100) / 100;
	}
	meterPrice.value = kitchenType.value;
	updateTotals();
	getMeters();
}

let meterTotalPrice = document.getElementById("meterTotalPrice");
let descUpCount = document.getElementById("descUpCount");
let descDownCount = document.getElementById("descDownCount");
let meterTotal = document.getElementById("meterTotal");
let upCount = document.getElementById("upCount");
let downCount = document.getElementById("downCount");
let island = document.getElementById("island");



function getMeters() { 
  meterTotal.value =
	Math.round(
	  (
		(parseFloat(upCount.value)*0.34) +
		 (parseFloat(downCount.value)*0.66)+
		 (parseFloat(island.value)*0.7)-
		 (parseFloat(descDownCount.value)*0.64)-
		 (parseFloat(descUpCount.value)*0.34)
		 )
	* 100) / 100;
	meterTotalPrice.value = Math.round(
		(
			(
			(parseFloat(upCount.value)*0.34) +
			(parseFloat(downCount.value)*0.66)+
			(parseFloat(island.value)*0.7)-
			(parseFloat(descDownCount.value)*0.64)-
			(parseFloat(descUpCount.value)*0.34)
			)
			*
			(parseFloat(meterPrice.value))
		
		)* 100) / 100;  
};

function show() {

	var devs = document.querySelectorAll(".devicesData");
	devs.forEach(function (devs) {
		if (devs.classList.contains("hide")) {
			devs.classList.remove("hide");
		} else {
			devs.classList.add("hide");
		}
	});

	var nonDevs = document.querySelectorAll(".section");
	nonDevs.forEach(function (nonDevs) {
		if (nonDevs.classList.contains("hide")) {
			nonDevs.classList.remove("hide");
		} else {
			nonDevs.classList.add("hide");
		}
	});
totalNoTax.value=0
totalDevNoTax.value=0

	taxing();
	updateTotals();
}


function calc (num){
let count = document.getElementById(`addCount${num}`).value;
let price = document.getElementById(`addName${num}`).value;
let total = document.getElementById(`addTotal${num}`);
let totalVal = Math.round( count * price * 100) / 100;
  total.value = totalVal;
  updateTotals();
}

function updateTotalsGT(index){
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

 function updateTotals() {
			let tax = document.getElementById("tax");
			let totalTaxed = document.getElementById("totalTaxed");
			let height = document.getElementById("height");
			let heightCount = document.getElementById("heightCount");
			let heightTotalPrice = document.getElementById("heightTotalPrice");
			let discount = document.getElementById("discount");
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
	 
	 heightTotalPrice.value = Math.round(((parseFloat(height.value) * parseFloat(heightCount.value) * 2) *
		 (parseFloat(meterPrice.value) * 0.22)* 100) / 100);
		//  totalTaxed.value = parseFloat(totalTaxed.value) + parseFloat(heightTotalPrice.value);
	//  if (!isNaN(discount.value)){
	// 	 discount.value = 0;
	//  }
		let totalCost = 0;
	 if (!isNaN(totalNoTax.value) && !isNaN(meterTotalPrice.value) && !isNaN(heightTotalPrice.value)) {
		 if (!isNaN(discount.value)) {
			 
			 totalCost = parseFloat(totalNoTax.value) + parseFloat(meterTotalPrice.value) + parseFloat(heightTotalPrice.value);
			 totalCost = totalCost - parseFloat(discount.value);
			} else {
			 totalCost = parseFloat(totalNoTax.value) + parseFloat(meterTotalPrice.value) + parseFloat(heightTotalPrice.value);
			 
			}
		}
		totalNoTax.value = totalCost;
		tax.value = Math.round(totalCost * 0.15 * 100) / 100;
		totalTaxed.value = Math.round(totalCost * 1.15 * 100) / 100;
			updateTotalsGT('00');
			updateTotalsGT('01');
			updateTotalsGT('02');
			updateTotalsGT('03');
			updateTotalsGT('04');
			updateTotalsGT('05');
			updateTotalsGT('06');
			updateTotalsGT('07');
			updateTotalsGT('08');
			updateTotalsGT('09');
			updateTotalsGT('10');
			updateTotalsGT('11');
			updateTotalsGT('12');
			updateTotalsGT('13');
			updateTotalsGT('14');
			updateTotalsGT('15');
 }


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

let originalState;

window.addEventListener("beforeprint", function() {
  originalState = document.body.innerHTML;
  hideEmptyInputs();
});

// window.addEventListener("afterprint", function() {
//   document.body.innerHTML = originalState;
// });


function hideEmptyInputs() {
	let inputs = document.querySelectorAll("input");
	inputs.forEach(function(input) {
	  if (input.value === "" || input.value === "0") {
		if (!input.parentNode.classList.contains("exclude")) {
		  input.parentNode.parentNode.style.display = "none";
		}
	  }
	});
  }
  
// let editButton = document.getElementById("editButton");
// editButton.addEventListener("click", changeDisplay);
// function changeDisplay() {
// 	let element = document.querySelector(".content");
// 	element.style.display = "flex";
//   }
