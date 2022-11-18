
function selectColor(event)
{
    let colorBox = event.target;
    let color = colorBox.style.backgroundColor;

    sessionStorage.setItem("selectedColor", color);
}

function getSelectedColor()
{
    if(sessionStorage.getItem("selectedColor"))
    {
        return sessionStorage.getItem("selectedColor");
    }

    return null;
}

function loadPalette(palette)
{
    let colors = palette;

 for(let i = 0; i<colors.length;i++){
     
     
  let truc= document.querySelectorAll("body>header>div")
  
  truc[i].style.backgroundColor= colors[i]
 }
}


window.addEventListener("DOMContentLoaded", function(){
    loadPalette(["#22f6f3", "#3daf7e", "#ffffff", "#ec8236", "#a9a7ee", "#ecc606", "#f783f2", "#e89e80" , 
    "#e83e80", "#e89e80", "#aaaaaa", "#e89e80", "#bbbbbb", "#e89e80", "#cccccc", "#e89b10"]);

    // le code de l'étape 2 se passe ici
    let truc= document.querySelectorAll("body > header > div")
    
for(let i=0;i<truc.length;i++){
    
      truc[i].addEventListener("click", selectColor)
      
      
  
}

   
   truc= document.querySelectorAll("div > div");
   
 for(let i=0 ; i<truc.length; i++){
       
       truc[i].addEventListener("click",function(){
           
           if(truc[i].style.backgroundColor== ""){
               
           let color = getSelectedColor(); 
           truc[i].style.backgroundColor= color;
               
               
           }else {
               truc[i].style.backgroundColor= ""
           }
       });
   }
    
    
    
})



  let machin= document.querySelectorAll("input");
 
   let truc= document.querySelectorAll("body>header>div")
   
   
  for (let i=0; i<machin.length;i++){
      
      machin[i].addEventListener("input", function(){
          
          truc[i].style.backgroundColor=machin[i].value
          
          console.log(truc[i])
      })
  }
  
// html2canvas(document.body).then(function(canvas) {
//     document.body.appendChild(canvas);
// });