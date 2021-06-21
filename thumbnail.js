document.addEventListener("DOMContentLoaded", function(event) {
    // 所有代码都应该写在这里
    let targetImage = document.querySelector("smart-image");
    targetImage.addEventListener("click", function() {
    alert("click img");
    if (targetImage.classList.contains("small")) {
  targetImage.classList.remove("small");
  }
  else
  	{targetImage.classList.add("small");}
})
});
