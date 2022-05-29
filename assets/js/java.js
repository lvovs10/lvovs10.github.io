const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
  const bttn = accordion.querySelector(".accordion__button");
  const panel = accordion.querySelector(".accordion__panel");
  const activeClassBtn = "accordion__button-active";
  const activeClassPanel = "accordion__panel-active";

  bttn.addEventListener("click", (event) => {
    event.preventDefault();

    const active__bttn = document.querySelectorAll(
      ".accordion .accordion__button-active"
    );
    active__bttn.forEach((el) =>
      el !== bttn ? el.classList.remove(activeClassBtn) : null
    );
    bttn.classList.toggle(activeClassBtn);

    const active__panel = document.querySelectorAll(
      ".accordion .accordion__panel-active"
    );
    active__panel.forEach((el) =>
      el !== panel ? el.classList.remove(activeClassPanel) : null
    );
    panel.classList.toggle(activeClassPanel);

    panel.style.setProperty("--height", `${panel.scrollHeight}px`);
  });
});
function openForm() {
    document.getElementById("MyForm").style.display = "block"; }
function closeForm() {
    document.getElementById("MyForm").style.display = "none";
}
document.addEventListener('mousemove', e => {
	w = window.innerWidth;
	h = window.innerHeight;
	x = Math.round(e.pageX / w * 100);
	y = Math.round(e.pageY / h * 100);
	document.getElementById("MyForm").style.background = `radial-gradient(at ${x}% ${y}%,#340360, #220040)`;
});