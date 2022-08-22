

const allBtn=document.querySelectorAll(".btn-common");
for(const btn of allBtn){

    btn.addEventListener("click", function(){
        const All=btn.parentNode.children[0]
        const playerName=All.innerText;
        const selectTag=document.getElementById("ol")
        const li=document.createElement("li");
       

        const length=selectTag.children.length;
        // console.log(length);

        
        if(length===5){
            alert("sorry!! you can select only 5 players")
            document.getElementById("five-selected-alert").style.display="block"
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



