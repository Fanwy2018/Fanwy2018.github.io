document.addEventListener("DOMContentLoaded", function(event) {
    // ���д��붼Ӧ��д������
    let targetImage = document.querySelector("#smart-image");
    targetImage.classList.add("small");
    targetImage.addEventListener("click", function() {
    alert("�����ͼƬ");
    if (targetImage.classList.contains("small")) {
  targetImage.classList.remove("small");
  }
  else
  	{targetImage.classList.add("small");}
});
});