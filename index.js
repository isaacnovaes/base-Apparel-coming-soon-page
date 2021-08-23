const input = document.getElementById("input-value"),
	container = document.getElementsByClassName("input-container")[0],
	errorIcon = document.getElementById("error-icon"),
	errorMessage = document.getElementById("error-message"),
	form = document.querySelector("form");

function checkEmail() {
	if (input.value.trim() === "") {
		showError();
		errorMessage.textContent = "Email field is empty";
		return false;
	} else if (
		!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
			input.value.trim()
		)
	) {
		showError();
		errorMessage.textContent = "Please provide a valid email";
		return false;
	} else {
		form.innerHTML = `
			<p class="success">Thank you for sending your email</p>
		`;
		return true;
	}
}
function showError() {
	errorMessage.style.opacity = "1";
	errorIcon.style.opacity = "1";
	container.style.boxShadow = "inset 0 0 0 2px rgb(248, 10, 10)";
}
function resetStyle() {
	container.style.boxShadow = "none";
	errorIcon.style.opacity = "0";
	errorMessage.style.opacity = "0";
}

function validateForm() {
	if (!checkEmail()) {
		setTimeout(resetStyle, 3500);
	}
}

form.addEventListener("submit", (event) => {
	event.preventDefault();
	validateForm();
});
