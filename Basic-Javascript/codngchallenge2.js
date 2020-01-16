var restaurant_bill_1 = 124; //$
var restaurant_bill_2 = 48; //$
var restaurant_bill_3 = 268; //$

var tipCalculator = function (bill) {
  if (bill < 50){
      var tipPaid = 0.2 * bill;
      console.log(tipPaid);
  }else if(bill <= 50 || bill <= 200){
    var tipPaid = 0.15 * bill;
    console.log(tipPaid);
  }else if(bill > 200){
    var tipPaid = 0.10 * bill;
    console.log(tipPaid);
  }else{
    console.log('There is no bill');
  }

}

tipCalculator(restaurant_bill_1);
tipCalculator(restaurant_bill_2);
tipCalculator(restaurant_bill_3);
tipCalculator(5000);

var tips = [18.6, 9.6, 26.8];
var paidBill = [tips[0]+124, tips[1]+48, tips[1]+268];

console.log(tips, paidBill);