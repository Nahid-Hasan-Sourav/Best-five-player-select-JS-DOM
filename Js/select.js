

const allBtn=document.querySelectorAll(".btn-common");
for(const btn of allBtn){

    btn.addEventListener("click", function(){
        const All=btn.parentNode.children[0]
        const playerName=All.innerText;
        const selectTag=document.getElementById("ol")
        const li=document.createElement("li");
       

        const olLength=selectTag.children.length;
        // console.log(length);

        
        if( olLength === 5){
           
            document.getElementById("five-selected-alert").style.display="block";
            alert("sorry!! you have already selected 5 players")
        }
        else{
            li.innerText=playerName;
            selectTag.appendChild(li);
            btn.disabled = true;
            if(  btn.disabled == true){
                btn.style.backgroundColor="grey";
            }
        }
       
        
        
    });
}



