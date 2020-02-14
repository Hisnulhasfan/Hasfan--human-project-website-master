var featureSubmitBtn = document.getElementById("featureSubmitBtn");
var featureFrm = document.getElementById("featureFrm");
var featureLoadingDiv = document.getElementById("featureLoadingDiv");

featureSubmitBtn.addEventListener("click", function() {
  // Make the loader div visible
  featureLoadingDiv.classList.remove("human-removed");
  // Hide the form from the user
  featureFrm.classList.add("human-removed");
});

async function onfeatureload() {
  var response = await fetch("http://localhost:3000/features");
  var result = await response.json();

  var feature1 = result[0]; // accesses tbe third element in the array

  document.getElementById("feature1").innerHTML =
    feature1.body + "<span class='badge badge-success'>" + feature1.author + ", " + feature1.time + "</span>";
}

onfeatureload();
