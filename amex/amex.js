$(function(){
  $("#calculate").click(calculate);  
});

function Card(fee, grocery, gas, dept, other){  
  this.fee = fee;
  this.grocery = grocery;
  this.gas = gas;
  this.dept = dept;
  this.other = other;
  
  this.getCashBack = function(monthlyGas, monthlyGrocery, monthlyDept) {
    return monthlyGas * this.gas + monthlyGrocery * this.grocery + monthlyDept * this.dept;
  }
}

var everyDay = new Card(0, .03, .02, .01, .01);
var preferred = new Card(95, .06, .03, .02, .01);

function calculate(){
  var monthlyGas = $("#gas").val();
  var monthlyGrocery = $("#groceries").val();
  var monthlyDept = $("#dept").val();
  
  var everyDayCashBack = everyDay.getCashBack(monthlyGas, monthlyGrocery, monthlyDept) * 12 - everyDay.fee;
  var preferredCashBack = preferred.getCashBack(monthlyGas, monthlyGrocery, monthlyDept) * 12 - preferred.fee;
  
  var recommendation;
  var savings;
  
  if (everyDayCashBack > preferredCashBack){
    recommendation = "Blue Cash Every Day";
    savings = everyDayCashBack - preferredCashBack;
  } else {
    recommendation = "Blue Cash Preferred";
    savings = preferredCashBack - everyDayCashBack;
  }
  
  $("#result").val("We recommend " + recommendation + " to save " + savings + " annually.");
}
