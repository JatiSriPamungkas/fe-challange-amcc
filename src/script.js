const hamBtn = document.getElementById("hamburger-btn");
const headMenu = document.getElementById("head-menu");

hamBtn.addEventListener("click", () => {
	if (hamBtn.innerText === "menu") {
		hamBtn.innerText = "close";
	} else {
		hamBtn.innerText = "menu";
	}
	headMenu.classList.toggle("h-27");
	headMenu.classList.toggle("h-105");
});
