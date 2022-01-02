// user background color selection
var selection = document.getElementById('bgcolor');
selection.addEventListener("change", function(e) {
    console.log("the color is " + e.target.value);

      chrome.runtime.sendMessage({bg: e.target.value}, function(response) {
      });
});

// user gradiant background color selection
var gradiantcolor = document.getElementById('gradiantcolor');
  gradiantcolor.onchange = function() {
  localStorage.setItem("gradiantcolor", gradiantcolor.checked ? "on" : "off");
  console.log(gradiantcolor.checked);
}

// remember gradiant checkbox selection
window.onload = function() {
  if (localStorage.getItem("gradiantcolor") === "on") {
    document.getElementById('gradiantcolor').checked = true;
  }
}