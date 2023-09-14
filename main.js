function main() {
	const container = document.querySelector(".container");

	let valueTop = 0;

	function handleValue(value, position) {
		document.querySelector(`#${position}`).textContent = `valor ${value} top`;
	}

	handleValue(valueTop, "top");
	handleValue(valueTop, "bottom");

	container.addEventListener("click", function (e) {
		if (e.target.closest(".content__top")) {
			if (e.target.classList.contains("btn--add")) {
				valueTop++;
				handleValue(valueTop, "top");
			}

			if (e.target.classList.contains("btn--rest")) {
				if(valueTop === 0) return;
				valueTop--;
				handleValue(valueTop, "top");
			}
		}

		if (e.target.closest(".content__bottom")) {
			if (e.target.classList.contains("btn--add")) {
				valueTop++;
				handleValue(valueTop, "bottom");
			}

			if (e.target.classList.contains("btn--rest")) {
				if(valueTop === 0) return;
				valueTop--;
				handleValue(valueTop, "bottom");
			}
		}
	});
}

window.addEventListener("load", main);
