document.getElementById("calculate-expense").addEventListener("click", function(){
    console.log("click")
    const selectTag=document.getElementById("ol");
    const olLength=selectTag.children.length;
    // console.log("calculate-btn",length);

    if(olLength===0){
        alert("sorry!! you have not  select any player select at least one player. ");
    }
    else{
        const perPlayerCoast=selectInputFieldValue("per-players");
        console.log("perPlayerCoast : ",perPlayerCoast);

        let playerExpense=perPlayerCoast*olLength;
            playerExpenseCoast=Number(playerExpense.toFixed(2));
        console.log("playerExpense : ",playerExpense);

        displaySetValue("player-expenses",playerExpense)
    }
    

});

document.getElementById("calculate-total").addEventListener("click",function(e) {
    const managerCoast= selectInputFieldValue("manager");
    const coashCoast=selectInputFieldValue("coach");
    const playerExpense=document.getElementById("player-expenses");
    const playerExpenseCoast=Number(playerExpense.innerText)
 
    let totalCoast=managerCoast+coashCoast+ playerExpenseCoast;
    totalCoast=Number(totalCoast.toFixed(2));
    // console.log("totalCoast : ",totalCoast);
    displaySetValue("total-coast",totalCoast);
 })