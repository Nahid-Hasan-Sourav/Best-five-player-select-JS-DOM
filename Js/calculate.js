document.getElementById("calculate-expense").addEventListener("click", function(){
    const selectTag=document.getElementById("ol");
    const length=selectTag.children.length;
    console.log("calculate-btn",length);

    if(length===0){
        alert("sorry!! you can select only 1 players");
    }
    else{
        const perPlayerCoast=selectInputFieldValue("per-players");
        console.log("perPlayerCoast : ",perPlayerCoast);

        const playerExpense=perPlayerCoast*length
        console.log("playerExpense : ",playerExpense);

        displaySetValue("player-expenses",playerExpense)
    }
    

});

document.getElementById("calculate-total").addEventListener("click",function(e) {
    const managerCoast= selectInputFieldValue("manager")
    const coashCoast=selectInputFieldValue("coach");
    const playerExpense=document.getElementById("player-expenses");
    const playerExpenseCoast=Number(playerExpense.innerText)
 
    let totalCoast=managerCoast+coashCoast+ playerExpenseCoast;
    totalCoast=Number(totalCoast.toFixed(2));
    console.log("totalCoast : ",totalCoast);
    displaySetValue("total-coast",totalCoast);
 })