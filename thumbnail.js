document.addEventListener("DOMContentLoaded", function(event) {
    // 你的所有代码都应该写在这里
    var targetImage = document.querySelector("#smart-image");
    targetImage.classList.add("small");
    targetImage.addEventListener("click", function() {
    alert("点击了图片");
     if (targetImage.classList.contains("small")) {
    targetImage.classList.remove("small");
} else {
    targetImage.classList.add("small");
}
});

});
