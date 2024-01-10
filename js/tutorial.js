// script.js
document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.button-action');
  
    buttons.forEach(function(button, index) {
      button.addEventListener('click', function() {
        changeContent('content' + (index + 1));
      });
    });
});
  
function changeContent(contentId) {
var buttons = document.querySelectorAll('.button-action');
var contents = document.querySelectorAll('.sub-content');

buttons.forEach(function(button) {
    button.classList.remove('active');
});

contents.forEach(function(content) {
    content.classList.remove('active');
});

document.getElementById('button' + contentId[contentId.length - 1]).classList.add('active');
document.getElementById(contentId).classList.add('active');
}


document.addEventListener('DOMContentLoaded', function () {
    var skillButtons = document.querySelectorAll('.button-skill');
  
    skillButtons.forEach(function (button, index) {
      button.addEventListener('click', function () {
        changeSkillContent(index);
      });
    });
  
    function changeSkillContent(index) {
      var skillButtons = document.querySelectorAll('.button-skill');
      var skillContents = document.querySelectorAll('.content-skill');
  
      skillButtons.forEach(function (button) {
        button.classList.remove('active');
      });
  
      skillContents.forEach(function (content) {
        content.classList.remove('active');
      });
  
      skillButtons[index].classList.add('active');
      skillContents[index].classList.add('active');
    }
  });
  