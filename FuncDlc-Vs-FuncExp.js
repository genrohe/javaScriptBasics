
// It works because the function declaration is hoisted (to the top of the file)
console.log(calculateTipDlc(44.25, 18));


//calculateTipExpr(44.25, 18);
//returns TypeError

// function Declaration => HOISTED
// It’s helpful to think of them as siblings of Variable Declarations. Just as Variable Declarations must start with “var”, Function Declarations must begin with “function”.
function calculateTipDlc(total,percent){
  var tip = 0;
  tip = percent*total/100;
  return Number(tip.toFixed(2));
}

// function expression => NOT HOISTED
var calculateTipExpr = function(total,percent){
  return Number((percent*total/100).toFixed(2));
};

//calculateTipDlc(44.25, 18);
console.log(calculateTipExpr(102.72, 15));

var removePrefix = function(url){
  return url.slice(4)
};

removePrefix('www.google.com');

//.slice(index) --> returns string starting at index 4
// w(0) w(1) w(2) .(3s)

// comment 1