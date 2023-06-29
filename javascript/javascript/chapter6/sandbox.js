
const x = document.getElementById("clickIt");
const y = document.getElementById("hoverPara");
  
x.addEventListener("click", RespondClick);
y.addEventListener("mouseover", RespondMouseOver);
y.addEventListener("mouseout", RespondMouseOut);
  
function RespondMouseOver() {
    document.getElementById("effect").innerHTML +=
               "MouseOver Event" + "<br>";
}
  
function RespondMouseOut() {
    document.getElementById("effect").innerHTML +=
              "MouseOut Event" + "<br>";
}
  
function RespondClick() {
    document.getElementById("effect").innerHTML +=
              "Click Event" + "<br>";
}