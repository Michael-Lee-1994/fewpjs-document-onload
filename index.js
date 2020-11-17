// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    updateDOM();
  });
  
function updateDOM() {
    console.log("Change DOM");
    document.querySelector("p#text").innerHTML = "This is really cool!";
}
