const input = document.getElementById("input-value");
const inputBorder = document.getElementsByClassName("input-container")[0];
const errorIcon = document.getElementById("error-icon");
const errorMessage = document.getElementById("error-message");

function checkEmail() {
	if (input.value === "" || input.value === " ") {
		return false;
	}
	if (!input.value.includes("@")) {
		return false;
	}
	if (input.value.startsWith("@") || input.value.endsWith("@")) {
		return false;
	}
	if (input.value.charAt(input.value.indexOf("@") + 1) == ".") {
		return false;
	}
	if (input.value.startsWith(".") || input.value.endsWith(".")) {
		return false;
	}
	if (input.value.charAt(input.value.indexOf(".") + 1) == ".") {
		return false;
	} else return true;
}

function resetStyle() {
	inputBorder.style.boxShadow = "none";
	errorIcon.style.opacity = "0";
	errorMessage.style.opacity = "0";
}

function validateForm() {
	if (!checkEmail()) {
		inputBorder.style.boxShadow = "inset 0 0 0 2px rgb(248, 10, 10)";
		errorIcon.style.opacity = "1";
		errorMessage.style.opacity = "1";
		setTimeout(resetStyle, 3000);
		return false;
	}
}

