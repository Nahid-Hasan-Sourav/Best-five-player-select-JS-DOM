// common function for select all input field value convert it in number type and return it.
function selectInputFieldValue(elementId){
    const inputField=document.getElementById(elementId);
    const inputFieldString=inputField.value;
    // console.log("InputFieldString: " + inputFieldString);
    const inputFieldNumber=Number(inputFieldString);
    
    // console.log("InputFieldNumber ",inputFieldNumber);

    if( inputFieldString.length===0){
        alert("No Field Can not be empty");
        return 0;
    }
    else if(inputFieldNumber<0){
        alert("Number must be greater than 0");
        return 0;
    }
    else if(isNaN(inputFieldNumber)==true){
        alert("Input must be a number");
        return  0;
    }

    else{
        return inputFieldNumber;

    }
   
}

// this is for dispalying value.
function displaySetValue(elementId,value){
    const inputField=document.getElementById(elementId);
    inputField.innerText=value;
    
}