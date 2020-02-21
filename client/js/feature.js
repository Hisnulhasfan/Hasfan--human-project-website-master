var featureSubmitBtn = document.getElementById("featureSubmitBtn");
var featureFrm = document.getElementById("featureFrm");
var featureLoadingDiv = document.getElementById("featureLoadingDiv");

featureSubmitBtn.addEventListener("click", async function() {
  // Make the loader div visible
  featureLoadingDiv.classList.remove("human-removed");
  // Hide the form from the user
  featureFrm.classList.add("human-removed");
  await onfeaturesubmit();
  featureFrm.reset();
  featureLoadingDiv.classList.add("human-removed");
  featureFrm.classList.remove("human-removed");
  await onfeatureload();

});

async function onfeatureload() {
  var response = await fetch("http://localhost:3000/features");
  var result = await response.json();

  var feature1 = result[0];
  var feature2 = result[1];
  var feature3 = result[2]; // accesses tbe third element in the array

  /*document.getElementById("feature1").innerHTML =
    feature1.body + " " + '<span class="badge badge-success">' + feature1.author + ", " + feature1.time + "</span>";

  document.getElementById("feature2").innerHTML = 
  feature2.body + " " + '<span class="badge badge-success">' + feature2.author + ", " + feature2.time + "</span>";

  document.getElementById("feature3").innerHTML = 
  feature3.body + " " + '<span class="badge badge-success">' + feature3.author + ", " + feature3.time + "</span>";
  */

  var featureList = document.getElementById("feature-list");

  featureList.innerHTML = ""; 
  
  for ( var i = 0 ; i < result.length; i++){
    var lieelement = document.createElement("li");
    lieelement.innerHTML =
    result[i].body + " " + '<span class="badge badge-success">' + result[i].author + ", " + result[i].time + "</span>";
    lieelement.className = "list-group-item";
    featureList.appendChild(lieelement);
  }
}

  async function onfeaturesubmit () {
  var response = await fetch("http://localhost:3000/features", {
    method : "post",
    headers : {
      "content-type" : "application/json"
    },
    body : JSON.stringify({
      name : document.getElementById("suggested-name").value,
      feature : document.getElementById("suggested-feature").value
    })
  });

  
}

onfeatureload();
