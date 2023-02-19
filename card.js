const card = document.querySelector(".card");
const middleSuite = document.querySelector(".middle-suite");

const handleMouseMove = (e) => {
  const { offsetX, offsetY } = e;

  const halfWidth = 176;
  const halfHeight = 264;

  const x = (offsetX - halfWidth) / -14;
  const y = (offsetY - halfHeight) / 14;

  card.style.setProperty("--rotateX", `${y.toFixed(2)}deg`);
  card.style.setProperty("--rotateY", `${x.toFixed(2)}deg`);

  if (x > 0 && y > 0) {
    middleSuite.style.setProperty("--r", Math.abs(x * 21));
    middleSuite.style.setProperty("--g", Math.abs(y * 14));
    middleSuite.style.setProperty("--b", Math.abs(y * 7));
  }

  if (x > 0 && y < 0) {
    middleSuite.style.setProperty("--r", Math.abs(x * 21));
    middleSuite.style.setProperty("--g", Math.abs(y * 7));
    middleSuite.style.setProperty("--b", Math.abs(y * 14));
  }

  if (x < 0 && y > 0) {
    middleSuite.style.setProperty("--r", Math.abs(x * 14));
    middleSuite.style.setProperty("--g", Math.abs(y * 21));
    middleSuite.style.setProperty("--b", Math.abs(y * 7));
  }

  if (x < 0 && y < 0) {
    middleSuite.style.setProperty("--r", Math.abs(x * 14));
    middleSuite.style.setProperty("--g", Math.abs(y * 7));
    middleSuite.style.setProperty("--b", Math.abs(y * 21));
  }
};

const handleClick = (e) => {
  card.classList.toggle("is-flipped");
};

card.addEventListener("mousemove", handleMouseMove);
card.addEventListener("click", handleClick);
