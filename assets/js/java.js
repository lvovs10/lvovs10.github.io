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

document.addEventListener('DOMContentLoaded', () => {
	

	const scrollItems = document.querySelectorAll('.scroll-item');
	const scrollItems1 = document.querySelectorAll('.scroll-item1');
	const scrollAnimation = () => {
		let windowCenter = (window.innerHeight /1.3) + window.scrollY;
    
		console.log(windowCenter)
		scrollItems.forEach(el => {
			let scrollOffset = el.offsetTop + (el.offsetHeight / 2);
			if (windowCenter >= scrollOffset) {
				el.classList.add('animation-class');
			} else {
				el.classList.remove('animation-class');
			}
		});
	};
  const scrollAnimation1 = () => {
		let windowCenter = (window.innerHeight /0.7) + window.scrollY;
    
		
		scrollItems1.forEach(el => {
			let scrollOffset = el.offsetTop + (el.offsetHeight / 2);
			if (windowCenter >= scrollOffset) {
				el.classList.add('animation-class');
			} else {
				el.classList.remove('animation-class');
			}
		});
	};
  
	

	scrollAnimation1();
	scrollAnimation();
	window.addEventListener('scroll', () => {
		scrollAnimation1();
		scrollAnimation();
	});
});
