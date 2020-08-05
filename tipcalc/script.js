//
function tipCalc(){

  //store data of input
  var billAmount = document.getElementById("billAmount").value;
  var quality = document.getElementById("quality").value;
  var totalpeople = document.getElementById("totalpeople").value;

  // input validation
  if(billAmount === "" || quality == 0 || isNaN(billAmount) ){
    window.alert(" Please enter valid values to calculate ");
    return;
  }

  //check if empty or 1
  if(totalpeople =="" || totalpeople <=1){
    totalpeople =1;
    document.getElementById("each").style.display ="none";
  }
  else{
    document.getElementById("each").style.display ="block";
  }

// calculate the tip
  var total = (billAmount * quality)/ totalpeople;
  total = Math.round(total * 100)/100;
  total = total.toFixed(2);

  //display
  document.getElementById("totaltip").style.display = "block";
  document.getElementById("tip").innerHTML = total;
}

//hide the tip amount

document.getElementById("totaltip").style.display = "none";
document.getElementById("each").style.display = "none";

//click button to call function
document.getElementById("calculate").onclick = function() {tipCalc();};
