
 //Validation fails if the input is blank

var subBtn = document.getElementById("subBtn");

subBtn.addEventListener("click", validate)

function validate(){
	var errors = "";
	errors+= allValidation();
	console.log(errors)
	
	if (errors.length > 0){
		alert(errors);
	}
}

 function allValidation(){
	var checkIn = document.getElementById("checkIn").value;
	var checkOut = document.getElementById("checkOut").value;
	var adults = document.getElementById("num1").value;
	var kids = document.getElementById("num2").value;
	
	 if (checkIn === "" || checkOut === "" || adults === "" || kids === "") {
	 	return("\nInput is empty!");
	 }else{
	 	return("Your dates were successfully submited!") 
   }
}