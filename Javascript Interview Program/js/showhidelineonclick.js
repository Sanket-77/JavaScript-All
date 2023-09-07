/*****
Show hide the given line while click on button

****/

function showhide(){
    debugger;
    var x = document.getElementById("Myid");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}
