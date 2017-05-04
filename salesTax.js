

// function calculateSales(companySalesData, taxRates) {
//   var output = {};
//   var totalsales = {};
//   for (var i = 0; i < companySalesData.length; i++) {
//     console.log('first loop', companySalesData[i]);
//     for (k = 0; k < companySalesData[i].sales.length; k++) {
//       console.log('2nd loop', companySalesData[i].sales[k]);
//       if (totalsales[companySalesData[i].name]) {
//         totalsales[companySalesData[i].name] += companySalesData[i].sales[k]; }

//      else {
//         totalsales[companySalesData[i].name] = companySalesData[i].sales[k];
//       }
//     }
//   }
// }

// function calculateProvSales(companySalesData, taxRates) {
//  var provSale = {};
//  //console.log(int);
//  for (var i = 0; i < companySalesData.length; i++) {
//    let company = companySalesData[i];

//   for (var prov in taxRates) {
//      if (prov === company.province) {
//        for (var j = 0; j < company.sales.length; j++) {
//          console.log(taxRates[prov] * company.sales[j]);
//        }
//      }
//    }
//  }
// }

function calculateProvSales(companySalesData){
  var totalSales = {};
    for(var i = 0; i < companySalesData.length; i++){
      var company = companySalesData[i];

      if (!totalSales[company.name]){
          totalSales[company.name] = {
            totalSales: 0
          }
        }
      // console.log("first loop", company);

      // totalSales[company.name] = {totalSales: 0 }
      for(var x = 0; x < company.sales.length; x++){
        totalSales[company.name].totalSales += company.sales[x];
        // console.log("second loop", company.sales[x]);
        // var salesLoop = company.sales[x];

        // if (!totalSales[company.name]){
        //   totalSales[company.name] = {
        //     totalSales: 0
        //   }
        // }
        //   totalSales[salesLoop].name += company.sales[x];
        //   }else {
        //     totalSales[salesLoop].name = company.sales[x];
        //   }

        // }


      // totalSales[company.name].totalSales += company.sales[x];
    }

    }
  return totalSales;
}

var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }

];

console.log(calculateProvSales(companySalesData))

// console.log(companySalesData)



// function calculateTelusSales(number){
//   var output = [];
//   for(var i = 0; i < number.length; i++){
//     // var sum = number[i];

// var TelusBCSales =  companySalesData[0].sales[i];

// return output
// }

// }

// return output;
// }

// }


// var results = calculateSalesTax(companySalesData,salesTaxRates)
// }
