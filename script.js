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

function getPrice() {
	// let tax = document.getElementById("tax");
	// let totalTaxed = document.getElementById("totalTaxed");
	var arr = document.querySelectorAll(".dev-price");
	var total = 0;
	for (var i = 0; i < arr.length; i++) {
    if (parseFloat(arr[i].value)) {
      total += parseFloat(arr[i].value);
		}
		total = Math.round(total * 100) / 100;
		document.getElementById("totalDevNoTax").value = total;
		tax.value = Math.round(total * 0.15 * 100) / 100;
		totalTaxed.value = Math.round(total * 1.15 * 100) / 100;
	}
	updateTotals();
	getMeters();
}

function getMeters() { 
  let descUpCount = document.getElementById("descUpCount");
  let descDownCount = document.getElementById("descDownCount");
  let meterTotal = document.getElementById("meterTotal");
  let upCount = document.getElementById("upCount");
  let downCount = document.getElementById("downCount");
  meterTotal.value =
	Math.round(
	  ((parseFloat(upCount.value)*0.34) + (parseFloat(downCount.value))*0.66)
	* 100) / 100;
  
  discountedMeterTotal.value =
		Math.round(
			(parseFloat(descUpCount.value) + parseFloat(descDownCount.value)) * 100
		) / 100;
  

};

function start() {
	let customerName = document.getElementById("customerName").value;
	let customerPhone = document.getElementById("customerPhone").value;
	let email = document.getElementById("email").value;
	let city = document.getElementById("city").value;
	let salesman = document.getElementById("salesman").value;
	let showroom = document.getElementById("showroom").value;
	let workDays = document.getElementById("workDays").value;
	let totalNoTax = document.getElementById("totalNoTax").value;
	let conrtactType = document.getElementById("conrtactType").value;
	let cabinetType = document.getElementById("cabinetType").value;
	let handelCode = document.getElementById("handelCode").value;
	let handelCount = document.getElementById("handelCount").value;
	let doorType = document.getElementById("doorType").value;
	let doorCode = document.getElementById("doorCode").value;
	let doorColor = document.getElementById("doorColor").value;
	let cabinetAdd = document.getElementById("cabinetAdd").value;
	let shelf01 = document.getElementById("shelf01").value;
	let nala = document.getElementById("nala").value;
	let nalaPaint = document.getElementById("nalaPaint").value;
	let doorAddName = document.getElementById("doorAddName").value;
	let doorAddValue = document.getElementById("doorAddValue").value;
	let georgianBar = document.getElementById("georgianBar").value;
	let glass = document.getElementById("glass").value;
	let doorOpen = document.getElementById("doorOpen").value;
	let glassAddonName = document.getElementById("glassAddonName").value;
	let glassAddonValue = document.getElementById("glassAddonValue").value;
	let surfaceType = document.getElementById("surfaceType").value;
	let surfaceCode = document.getElementById("surfaceCode").value;
	let sinkType = document.getElementById("sinkType").value;
	let sinkCode = document.getElementById("sinkCode").value;
	let surfaceExtra = document.getElementById("surfaceExtra").value;
	let wallCover = document.getElementById("wallCover").value;
	let upperCor = document.getElementById("upperCor").value;
	let lowerCor = document.getElementById("lowerCor").value;
	let shelfHanged = document.getElementById("shelfHanged").value;
	let light = document.getElementById("light").value;
	let cabinetOpen = document.getElementById("cabinetOpen").value;
	let drawerSmall = document.getElementById("drawerSmall").value;
	let drawerMed = document.getElementById("drawerMed").value;
	let drawerLar = document.getElementById("drawerLar").value;
	let factoryInstructions = document.getElementById(
		"factoryInstructions"
	).value;
	let generalAddName01 = document.getElementById("generalAddName01").value;
	let generalAddValue01 = document.getElementById("generalAddValue01").value;
	let generalAddName02 = document.getElementById("generalAddName02").value;
	let generalAddValue02 = document.getElementById("generalAddValue02").value;
	let generalAddName03 = document.getElementById("generalAddName03").value;
	let generalAddValue03 = document.getElementById("generalAddValue03").value;
	let accName01 = document.getElementById("accName01").value;
	let accValue01 = document.getElementById("accValue01").value;
	let accName02 = document.getElementById("accName02").value;
	let accValue02 = document.getElementById("accValue02").value;
	let accName03 = document.getElementById("accName03").value;
	let accValue03 = document.getElementById("accValue03").value;
	let accName04 = document.getElementById("accName04").value;
	let accValue04 = document.getElementById("accValue04").value;
	let accName05 = document.getElementById("accName05").value;
	let accValue05 = document.getElementById("accValue05").value;
	let accName06 = document.getElementById("accName06").value;
	let accValue06 = document.getElementById("accValue06").value;
	let mainContractNo = document.getElementById("mainContractNo").value;
	let devType01 = document.getElementById("devType01").value;
	let devType02 = document.getElementById("devType02").value;
	let devType03 = document.getElementById("devType03").value;
	let devType04 = document.getElementById("devType04").value;
	let devType05 = document.getElementById("devType05").value;
	let devType06 = document.getElementById("devType06").value;
	let devType07 = document.getElementById("devType07").value;
	let devType08 = document.getElementById("devType08").value;
	let devCode01 = document.getElementById("devCode01").value;
	let devCode02 = document.getElementById("devCode02").value;
	let devCode03 = document.getElementById("devCode03").value;
	let devCode04 = document.getElementById("devCode04").value;
	let devCode05 = document.getElementById("devCode05").value;
	let devCode06 = document.getElementById("devCode06").value;
	let devCode07 = document.getElementById("devCode07").value;
	let devCode08 = document.getElementById("devCode08").value;
	let devPrice01 = document.getElementById("devPrice01").value;
	let devPrice02 = document.getElementById("devPrice02").value;
	let devPrice03 = document.getElementById("devPrice03").value;
	let devPrice04 = document.getElementById("devPrice04").value;
	let devPrice05 = document.getElementById("devPrice05").value;
	let devPrice06 = document.getElementById("devPrice06").value;
	let devPrice07 = document.getElementById("devPrice07").value;
	let devPrice08 = document.getElementById("devPrice08").value;

	let query5 =
		"mutation ($myItemName: String!, $columnVals: JSON!) { create_item (board_id:3560555809, item_name:$myItemName, column_values:$columnVals) { id } }";
	let monVars = {
		myItemName: customerName,
		columnVals: JSON.stringify({
			// status: { label: st },
			// date4: { date: "1993-08-27" },
			status3: { label: showroom },
			numbers: totalNoTax,
			text6: customerName,
			text6: customerPhone,
			text6: email,
			text6: city,
			status3: { label: salesman },
			text6: workDays,
			text6: totalNoTax,
			status3: { label: conrtactType },
			status3: { label: cabinetType },
			status3: { label: doorType },
			status3: { label: doorCode },
			text6: doorColor,
			text6: cabinetAdd,
			text6: shelf01,
			text6: georgianBar,
			text6: nala,
			text6: glass,
			text6: nalaPaint,
			status3: { label: doorOpen },
			text6: handelCode,
			text6: handelCount,
			text6: doorAddName,
			text6: doorAddValue,
			text6: glassAddonName,
			text6: glassAddonValue,
			status3: { label: surfaceType },
			text6: surfaceCode,
			status3: { label: sinkType },
			text6: sinkCode,
			text6: surfaceExtra,
			text6: wallCover,
			text6: upperCor,
			text6: lowerCor,
			text6: shelfHanged,
			text6: light,
			text6: cabinetOpen,
			text6: drawerSmall,
			text6: drawerMed,
			text6: drawerLar,
			text6: generalAddName01,
			text6: generalAddValue01,
			text6: generalAddName02,
			text6: generalAddValue02,
			text6: generalAddName03,
			text6: generalAddValue03,
			text6: factoryInstructions,
			text6: accName01,
			text6: accValue01,
			text6: accName02,
			text6: accValue02,
			text6: accName03,
			text6: accValue03,
			text6: accName04,
			text6: accValue04,
			text6: accName05,
			text6: accValue05,
			text6: accName06,
			text6: accValue06,
			text6: mainContractNo,
			status3: { label: devType01 },
			text6: devCode01,
			text6: devPrice01,
			status3: { label: devType02 },
			text6: devCode02,
			text6: devPrice02,
			status3: { label: devType03 },
			text6: devCode03,
			text6: devPrice03,
			status3: { label: devType04 },
			text6: devCode04,
			text6: devPrice04,
			status3: { label: devType05 },
			text6: devCode05,
			text6: devPrice05,
			status3: { label: devType06 },
			text6: devCode06,
			text6: devPrice06,
			status3: { label: devType07 },
			text6: devCode07,
			text6: devPrice07,
			status3: { label: devType08 },
			text6: devCode08,
			text6: devPrice08,
		}),
	};

	fetch("https://api.monday.com/v2", {
		method: "post",
		headers: {
			"Content-Type": "application/json",
			Authorization:
				"eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjIxMDUwODY3MCwidWlkIjoyNTE0NTU3NywiaWFkIjoiMjAyMi0xMi0xOVQwMDoxNjo0Mi4zMzJaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTAxMDc5MzUsInJnbiI6InVzZTEifQ.UqyMtnl8B4NAyNJK1qvn0ie1JOuQ2jjyXiWBH2WY9yc",
		},
		body: JSON.stringify({
			query: query5,
			variables: JSON.stringify(monVars),
		}),
	})
		.then((res) => res.json())
		.then((res) => console.log(JSON.stringify(res, null, 4)));
}

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

	taxing();
	updateTotals();
}




function printPdf()
{
  var fileName = document.getElementById("mainContractNo").value;
  // window.print({
  // 	zoom: 0.3, // scale factor of 75%
  // });
  // }


  // Source HTMLElement or a string containing HTML.
  // var elementHTML = document.querySelector("#fullSite");
	
  // window.jsPDF = window.jspdf.jsPDF;
  var pdf = new jsPDF({
    unit: "mm",
    format: "a4",
  });
	
  // Convert_HTML_To_PDF();
  // Convert HTML content to PDF
  // function Convert_HTML_To_PDF()
  // {
    // var doc = new jsPDF();

    // Source HTMLElement or a string containing HTML.
    // var elementHTML = document.querySelector("#fullSite");

    // doc.html(elementHTML, {
    // doc.html(document.body, {
    //   callback: function (doc)
    //   {
    //     // Save the PDF
    //     doc.save("document-html.pdf");
    //   },
    //   margin: [10, 10, 10, 10],
    //   autoPaging: "text",
    //   x: 0,
    //   y: 0,
    //   width: 190, //target width in the PDF document
    //   windowWidth: 675, //window width in CSS pixels
    // });
	
	
    html2canvas(document.body, {
      zoom: 0.75,
      width: 800,
      height: 1200,
      orientation: "portrait",
      textDirection: "rtl",
    }).then(function (canvas)
    {
      // add the canvas element to the PDF as a JPEG image
      pdf.addImage(canvas, "JPEG", 0, 0);
      // save the PDF
      pdf.save(fileName + ".pdf");
    });

	
  }
  
  


// }
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
				// document.getElementById("totalDevNoTax").value = total;
        document.getElementById(`addGTT${index}`).innerHTML = gTotal;
        // gTTVal = parseFloat(gTotal);
				// tax.value = Math.round(total * 0.15 * 100) / 100;
				// totalTaxed.value = Math.round(total * 1.15 * 100) / 100;
			}
    }



 function updateTotals() {
			let tax = document.getElementById("tax");
			let totalTaxed = document.getElementById("totalTaxed");
			var arr = document.querySelectorAll(".addGT");
			var total = 0;
			for (var i = 0; i < arr.length; i++) {
        if (parseFloat(arr[i].value)) {
					total += parseFloat(arr[i].value);
				}
				total = Math.round(total * 100) / 100;
				// document.getElementById("totalDevNoTax").value = total;
        totalNoTax.value = total;
				tax.value = Math.round(total * 0.15 * 100) / 100;
				totalTaxed.value = Math.round(total * 1.15 * 100) / 100;
			}
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
 }


function calc2(){
	let addPrice01  = document.getElementById("addName01").value;
	let addCount01  = document.getElementById("addCount01").value;
	let addTotal01  = document.getElementById("addTotal01");
  addTotal01.value = Math.round(addPrice01 * addCount01 * 100) / 100;
	let addPrice02  = document.getElementById("addName02").value;
	let addCount02  = document.getElementById("addCount02").value;
	let addTotal02  = document.getElementById("addTotal02");
  addTotal02.value = Math.round(addPrice02 * addCount02 * 100) / 100;
	let addPrice03  = document.getElementById("addName03").value;
	let addCount03  = document.getElementById("addCount03").value;
	let addTotal03  = document.getElementById("addTotal03");
  addTotal03.value = Math.round(addPrice03 * addCount03 * 100) / 100;
	let addPrice04  = document.getElementById("addName04").value;
	let addCount04  = document.getElementById("addCount04").value;
	let addTotal04  = document.getElementById("addTotal04");
  addTotal04.value = Math.round(addPrice04 * addCount04 * 100) / 100;
	let addPrice05  = document.getElementById("addName05").value;
	let addCount05  = document.getElementById("addCount05").value;
	let addTotal05  = document.getElementById("addTotal05");
  addTotal05.value = Math.round(addPrice05 * addCount05 * 100) / 100;
	let addPrice06  = document.getElementById("addName06").value;
	let addCount06  = document.getElementById("addCount06").value;
	let addTotal06  = document.getElementById("addTotal06");
  addTotal06.value = Math.round(addPrice06 * addCount06 * 100) / 100;
	let addPrice07  = document.getElementById("addName07").value;
	let addCount07  = document.getElementById("addCount07").value;
	let addTotal07  = document.getElementById("addTotal07");
  addTotal07.value = Math.round(addPrice07 * addCount07 * 100) / 100;
	let addPrice08  = document.getElementById("addName08").value;
	let addCount08  = document.getElementById("addCount08").value;
	let addTotal08  = document.getElementById("addTotal08");
  addTotal08.value = Math.round(addPrice08 * addCount08 * 100) / 100;
	let addPrice09  = document.getElementById("addName09").value;
	let addCount09  = document.getElementById("addCount09").value;
	let addTotal09  = document.getElementById("addTotal09");
  addTotal09.value = Math.round(addPrice09 * addCount09 * 100) / 100;
	let addPrice10  = document.getElementById("addName10").value;
	let addCount10  = document.getElementById("addCount10").value;
	let addTotal10  = document.getElementById("addTotal10");
  addTotal10.value = Math.round(addPrice10 * addCount10 * 100) / 100;
	let addPrice11  = document.getElementById("addName11").value;
	let addCount11  = document.getElementById("addCount11").value;
	let addTotal11  = document.getElementById("addTotal11");
  addTotal11.value = Math.round(addPrice11 * addCount11 * 100) / 100;
	let addPrice12  = document.getElementById("addName12").value;
	let addCount12  = document.getElementById("addCount12").value;
	let addTotal12  = document.getElementById("addTotal12");
  addTotal12.value = Math.round(addPrice12 * addCount12 * 100) / 100;
	let addPrice13  = document.getElementById("addName13").value;
	let addCount13  = document.getElementById("addCount13").value;
	let addTotal13  = document.getElementById("addTotal13");
  addTotal13.value = Math.round(addPrice13 * addCount13 * 100) / 100;
	let addPrice14  = document.getElementById("addName14").value;
	let addCount14  = document.getElementById("addCount14").value;
	let addTotal14  = document.getElementById("addTotal14");
  addTotal14.value = Math.round(addPrice14 * addCount14 * 100) / 100;
	let addPrice15  = document.getElementById("addName15").value;
	let addCount15  = document.getElementById("addCount15").value;
	let addTotal15  = document.getElementById("addTotal15");
  addTotal15.value = Math.round(addPrice15 * addCount15 * 100) / 100;
	let addPrice16  = document.getElementById("addName16").value;
	let addCount16  = document.getElementById("addCount16").value;
	let addTotal16  = document.getElementById("addTotal16");
  addTotal16.value = Math.round(addPrice16 * addCount16 * 100) / 100;
	let addPrice17  = document.getElementById("addName17").value;
	let addCount17  = document.getElementById("addCount17").value;
	let addTotal17  = document.getElementById("addTotal17");
  addTotal17.value = Math.round(addPrice17 * addCount17 * 100) / 100;
	let addPrice18  = document.getElementById("addName18").value;
	let addCount18  = document.getElementById("addCount18").value;
	let addTotal18  = document.getElementById("addTotal18");
  addTotal18.value = Math.round(addPrice18 * addCount18 * 100) / 100;
	let addPrice19  = document.getElementById("addName19").value;
	let addCount19  = document.getElementById("addCount19").value;
	let addTotal19  = document.getElementById("addTotal19");
  addTotal19.value = Math.round(addPrice19 * addCount19 * 100) / 100;
	let addPrice20  = document.getElementById("addName20").value;
	let addCount20  = document.getElementById("addCount20").value;
	let addTotal20  = document.getElementById("addTotal20");
  addTotal20.value = Math.round(addPrice20 * addCount20 * 100) / 100;
	let addPrice21  = document.getElementById("addName21").value;
	let addCount21  = document.getElementById("addCount21").value;
	let addTotal21  = document.getElementById("addTotal21");
  addTotal21.value = Math.round(addPrice21 * addCount21 * 100) / 100;
	let addPrice22  = document.getElementById("addName22").value;
	let addCount22  = document.getElementById("addCount22").value;
	let addTotal22  = document.getElementById("addTotal22");
  addTotal22.value = Math.round(addPrice22 * addCount22 * 100) / 100;
	let addPrice23  = document.getElementById("addName23").value;
	let addCount23  = document.getElementById("addCount23").value;
	let addTotal23  = document.getElementById("addTotal23");
  addTotal23.value = Math.round(addPrice23 * addCount23 * 100) / 100;
	let addPrice24  = document.getElementById("addName24").value;
	let addCount24  = document.getElementById("addCount24").value;
	let addTotal24  = document.getElementById("addTotal24");
  addTotal24.value = Math.round(addPrice24 * addCount24 * 100) / 100;
	let addPrice25  = document.getElementById("addName25").value;
	let addCount25  = document.getElementById("addCount25").value;
	let addTotal25  = document.getElementById("addTotal25");
  addTotal25.value = Math.round(addPrice25 * addCount25 * 100) / 100;
	let addPrice26  = document.getElementById("addName26").value;
	let addCount26  = document.getElementById("addCount26").value;
	let addTotal26  = document.getElementById("addTotal26");
  addTotal26.value = Math.round(addPrice26 * addCount26 * 100) / 100;
	let addPrice27  = document.getElementById("addName27").value;
	let addCount27  = document.getElementById("addCount27").value;
	let addTotal27  = document.getElementById("addTotal27");
  addTotal27.value = Math.round(addPrice27 * addCount27 * 100) / 100;
	let addPrice28  = document.getElementById("addName28").value;
	let addCount28  = document.getElementById("addCount28").value;
	let addTotal28  = document.getElementById("addTotal28");
  addTotal28.value = Math.round(addPrice28 * addCount28 * 100) / 100;
	let addPrice29  = document.getElementById("addName29").value;
	let addCount29  = document.getElementById("addCount29").value;
	let addTotal29  = document.getElementById("addTotal29");
  addTotal29.value = Math.round(addPrice29 * addCount29 * 100) / 100;
	let addPrice30  = document.getElementById("addName30").value;
	let addCount30  = document.getElementById("addCount30").value;
	let addTotal30  = document.getElementById("addTotal30");
  addTotal30.value = Math.round(addPrice30 * addCount30 * 100) / 100;


}
//collapsing
 var coll = document.getElementsByClassName("collapsible");
 var i;

 for (i = 0; i < coll.length; i++) {
		coll[i].addEventListener("click", function () {
			this.classList.toggle("active");
			var content = this.parentElement.getElementsByClassName("content");
			for (i = 0; i < content.length; i++) {
				if (content[i].style.display === "flex") {
					content[i].style.display = "none";
				} else {
					content[i].style.display = "flex";
				}
			}
		});
 }

	
	// for (i = 0; i < coll.length; i++) {
	// 	coll[i].addEventListener("click", function () {
	// 		this.classList.toggle("active");
	// 		var content = this.nextElementSibling;
	// 		if (content.style.display === "block") {
	// 			content.style.display = "none";
	// 		} else {
	// 			content.style.display = "block";
	// 		}
	// 	});
	// }
