$(document).ready(function () {
$(".title-headline").slideDown(1000).removeClass("hidden");
$(".title-intro").slideDown(1000).removeClass("hidden");
});

function getRandomLightColor() {
    const r = Math.floor(Math.random() * 156 + 100); // 100-255
    const g = Math.floor(Math.random() * 156 + 100); // 100-255
    const b = Math.floor(Math.random() * 156 + 100); // 100-255
    return `rgb(${r}, ${g}, ${b})`;
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const contentElements = document.querySelectorAll('.content');
  
    contentElements.forEach(element => {
      element.addEventListener('mouseover', () => {
        element.style.backgroundColor = getRandomLightColor();
      });
  
      element.addEventListener('mouseout', () => {
        element.style.backgroundColor = '#ffffff'; // Revert to original color
      });
    });
  });
  