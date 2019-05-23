

//function to hide all nav-options if not hidden or show if hidden. 
function myFunction() {
  var x = document.getElementsByClassName("nav-option");
    console.log(x);
    
    for(i=0 ; i<x.length ; i++){
        
    
  if (x[i].style.display === "none") {
    x[i].style.display = "block";
  } else {
    x[i].style.display = "none";
        }
    }
}
    


