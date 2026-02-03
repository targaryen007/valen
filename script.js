const noBtn = document.getElementById("noBtn");
const area = document.querySelector(".button-area");

noBtn.addEventListener("mouseenter", () => {
  const maxX = area.clientWidth - noBtn.offsetWidth;
  const maxY = area.clientHeight - noBtn.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

function yesClick() {
  window.location.href = "yes.html";
}

  document.body.innerHTML = `
    <div style="
      height:100vh;
      display:flex;
      justify-content:center;
      align-items:center;
      flex-direction:column;
      background:#ffe6eb;
      font-family:Arial;
      text-align:center;
    ">
      <h1 style="color:#ff4d6d;">💘 I knew it! 💘</h1>
      <p style="font-size:22px;">I knew you would say YES 😌❤️</p>
    </div>
  `;
}

