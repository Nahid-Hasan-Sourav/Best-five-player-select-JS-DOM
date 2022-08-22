// common function for select all input field value convert it in number type and return it.
function selectInputFieldValue(elementId){
    const inputField=document.getElementById(elementId);
    const inputFieldString=inputField.value;
    console.log("InputFieldString: " + inputFieldString);
    const inputFieldNumber=Number(inputFieldString);
    
    console.log("InputFieldNumber ",inputFieldNumber);

    if( inputFieldString.length===0){
        alert("No Field Can not be empty");
        return 0;
    }
    else if( inputFieldNumber<0){
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

const allBtn=document.querySelectorAll(".btn-common");
for(const btn of allBtn){

    btn.addEventListener("click", function(){
        const All=btn.parentNode.children[0]
        const playerName=All.innerText;
        const selectTag=document.getElementById("ol")
        const li=document.createElement("li");
       

        const length=selectTag.children.length;
        // console.log(length);

        if(length>=5){
            alert("sorry!! you can select only 5 players")
        }
        else{
            li.innerText=playerName;
            selectTag.appendChild(li);
            btn.disabled = true;
            if(  btn.disabled = true){
                btn.style.backgroundColor="grey";
            }
        }
       
        
        
    });
}

document.getElementById("calculate-expense").addEventListener("click", function(){
    const selectTag=document.getElementById("ol");
    const length=selectTag.children.length;
    console.log("calculate-btn",length);

    const perPlayerCoast=selectInputFieldValue("per-players");
    console.log("perPlayerCoast : ",perPlayerCoast);

    const playerExpense=perPlayerCoast*length
    console.log("playerExpense : ",playerExpense);

    displaySetValue("player-expenses",playerExpense)

});

document.getElementById("calculate-total").addEventListener("click",function(e) {
   const managerCoast= selectInputFieldValue("manager")
   const coashCoast=selectInputFieldValue("coach");
   const playerExpense=document.getElementById("player-expenses");
   const playerExpenseCoast=Number(playerExpense.innerText)

   const totalCoast=managerCoast+coashCoast+ playerExpenseCoast;
   console.log("totalCoast : ",totalCoast);
   displaySetValue("total-coast",totalCoast);
})