const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const area = document.querySelector(".button-area");

// YES button click
yesBtn.addEventListener("click", () => {
  window.location.href = "yes.html";
});

// NO button escape
noBtn.addEventListener("mouseenter", () => {
  const maxX = area.clientWidth - noBtn.offsetWidth;
  const maxY = area.clientHeight - noBtn.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});
