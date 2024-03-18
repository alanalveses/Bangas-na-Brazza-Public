document.addEventListener("DOMContentLoaded", function () {
  var fragmentButtons = document.querySelectorAll(".fs-button");

  fragmentButtons.forEach(function (button, index) {
    button.addEventListener("click", function () {
      changeSkillContent(index);
    });
  });

  function changeSkillContent(index) {
    var fragmentButtons = document.querySelectorAll(".fs-button");
    var fragmentContent = document.querySelectorAll(".fs-content");

    fragmentButtons.forEach(function (button) {
      button.classList.remove("active");
    });

    fragmentContent.forEach(function (content) {
      content.classList.remove("active");
    });

    fragmentButtons[index].classList.add("active");
    fragmentContent[index].classList.add("active");
  }

  const questionElements = document.querySelectorAll(".fragment-question");

  questionElements.forEach(function (questionElement) {
    questionElement.addEventListener("click", function () {
      const responseElement = questionElement.nextElementSibling;

      if (
        responseElement.style.display === "none" ||
        responseElement.style.display === ""
      ) {
        responseElement.style.display = "block";
        responseElement.classList.add("question-click");
        this.classList.add("question-click");
      } else {
        responseElement.style.display = "none";
        this.classList.remove("question-click");

      }
    });
  });
});
