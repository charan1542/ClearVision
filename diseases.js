function rever(){
    var checkbox = document.getElementById("click-this");

    if (checkbox.checked == true){
        document.getElementById("header").style.backgroundColor='white'
        document.getElementById("header").style.color='black'
        document.getElementById("header-options-one").style.color='black'
        document.getElementById("header-options-two").style.color='black'
        document.getElementById("header-options-three").style.color='black'
        document.getElementById("header-options-four").style.color='black'
        document.getElementById("heading-div").style.backgroundColor='white'
        document.getElementById("heading-div").style.color='black'        
        document.getElementById("heading-words").innerHTML="Symptoms"       
        document.getElementById("heading-btn-text").innerHTML="Click to know more about Diseases"       
        document.getElementById("diseases-one").style.visibility="collapse";      
        document.getElementById("diseases-one").style.padding="0vh";     
        document.getElementById("diseases-one").style.maxHeight="0vh";
        document.getElementById("diseases-two").style.visibility="collapse";   
        document.getElementById("diseases-two").style.padding="0vh";     
        document.getElementById("diseases-two").style.maxHeight="0vh";
        document.getElementById("diseases-three").style.visibility="collapse";   
        document.getElementById("diseases-three").style.padding="0vh";     
        document.getElementById("diseases-three").style.maxHeight="0vh";
        document.getElementById("diseases-four").style.visibility="collapse";   
        document.getElementById("diseases-four").style.padding="0vh";     
        document.getElementById("diseases-four").style.maxHeight="0vh";    
        document.getElementById("diseases-five").style.visibility="collapse";   
        document.getElementById("diseases-five").style.padding="0vh";     
        document.getElementById("diseases-five").style.maxHeight="0vh";    
        document.getElementById("diseases-six").style.visibility="collapse";   
        document.getElementById("diseases-six").style.padding="0vh";     
        document.getElementById("diseases-six").style.maxHeight="0vh";    
        document.getElementById("diseases-seven").style.visibility="collapse";   
        document.getElementById("diseases-seven").style.padding="0vh";     
        document.getElementById("diseases-seven").style.maxHeight="0vh";
        document.getElementById("diseases-line-one").style.visibility="hidden"; 
        document.getElementById("diseases-line-two").style.visibility="hidden"; 
        document.getElementById("diseases-line-three").style.visibility="hidden"; 
        document.getElementById("diseases-line-four").style.visibility="hidden"; 
        document.getElementById("diseases-line-five").style.visibility="hidden"; 
        document.getElementById("diseases-line-six").style.visibility="hidden";        
        document.getElementById("diseases-line-seven").style.visibility="hidden";        
        document.getElementById("symptoms").style.visibility="visible";        
        document.getElementById("symptoms").style.padding="5vh";       
        document.getElementById("footer").style.paddingTop="0vh";       
      } else {
        document.getElementById("header").style.backgroundColor='black'
        document.getElementById("header").style.color='white'
        document.getElementById("header-options-one").style.color='white'
        document.getElementById("header-options-two").style.color='white'
        document.getElementById("header-options-three").style.color='white'
        document.getElementById("header-options-four").style.color='white'
        document.getElementById("heading-div").style.backgroundColor='black'
        document.getElementById("heading-div").style.color='white'
        document.getElementById("heading-words").innerHTML="Diseases"
        document.getElementById("heading-btn-text").innerHTML="Click to know more about Symptoms"
        document.getElementById("diseases-one").style.visibility="visible"
        document.getElementById("diseases-one").style.padding="5vh"  
        document.getElementById("diseases-one").style.paddingBottom ="10vh"
        document.getElementById("diseases-one").style.removeProperty("max-Height")
        document.getElementById("diseases-two").style.visibility="visible"
        document.getElementById("diseases-two").style.paddingBottom ="10vh"
        document.getElementById("diseases-two").style.removeProperty("max-Height")
        document.getElementById("diseases-three").style.visibility="visible"
        document.getElementById("diseases-three").style.paddingBottom ="10vh"
        document.getElementById("diseases-three").style.removeProperty("max-Height")
        document.getElementById("diseases-four").style.visibility="visible"
        document.getElementById("diseases-four").style.paddingBottom ="10vh"
        document.getElementById("diseases-four").style.removeProperty("max-Height")
        document.getElementById("diseases-five").style.visibility="visible"
        document.getElementById("diseases-five").style.paddingBottom ="10vh"
        document.getElementById("diseases-five").style.removeProperty("max-Height")
        document.getElementById("diseases-six").style.visibility="visible"
        document.getElementById("diseases-six").style.paddingBottom ="10vh"
        document.getElementById("diseases-six").style.removeProperty("max-Height")
        document.getElementById("diseases-seven").style.visibility="visible"
        document.getElementById("diseases-seven").style.paddingBottom ="10vh"
        document.getElementById("diseases-seven").style.removeProperty("max-Height")
        document.getElementById("diseases-line-one").style.visibility="visible"; 
        document.getElementById("diseases-line-two").style.visibility="visible"; 
        document.getElementById("diseases-line-three").style.visibility="visible"; 
        document.getElementById("diseases-line-four").style.visibility="visible"; 
        document.getElementById("diseases-line-five").style.visibility="visible"; 
        document.getElementById("diseases-line-six").style.visibility="visible";
        document.getElementById("diseases-line-seven").style.visibility="visible";
        document.getElementById("symptoms").style.visibility="collapse";        
        document.getElementById("symptoms").style.padding="0vh";
        document.getElementById("footer").style.paddingTop="10vh";
      }
}
