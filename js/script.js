// current year
document.getElementById('currentYear').innerText = new Date().getFullYear();


document.addEventListener("DOMContentLoaded", function () {
	const navi = document.querySelector(".navbar");
	const link = document.querySelectorAll(".nav-link");
	const navbarCollapse = document.querySelector(".navbar-collapse");

	function addShadow() {
		if (window.scrollY >= 300) {
			navi.classList.add("shadow-bg");
		} else {
			navi.classList.remove("shadow-bg");
		}
	}
	link.forEach((item) =>
		item.addEventListener("click", () =>
			navbarCollapse.classList.remove("show")
		)
	);

	window.addEventListener("scroll", addShadow);
});
