var featureloding = document.getElementById("featureloding");
var featureSubmitBtn = document.getElementById("featureSubmitBtn");
var featureForm = document.getElementById("featureForm")

featureSubmitBtn.addEventListener("click",function(){
    featureloding.classList.remove("human-hidden");
    featureForm.classList.add("human-hidden");
})

