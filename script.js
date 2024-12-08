const emailInput = document.getElementById("email");
const errorMessage = document.querySelector(".email-error");
const form = document.querySelector("form");
const body = document.querySelector("body");

form.onsubmit = function (event) {
    event.preventDefault(); // Prevent form submission

    // Reset styles before applying new ones
    emailInput.style.borderColor = "";
    emailInput.style.backgroundColor = "";

    // Check if the input is valid
    const emailValue = emailInput.value.trim();

    // A more lenient regex pattern for email (basic format check)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validate based on the custom pattern
    const isValidEmail = emailPattern.test(emailValue);

    if (!isValidEmail) {
        // Apply invalid styles
        console.log("Email is invalid");
        errorMessage.style.display = "block"; // Show error message
        // Apply custom invalid styles
        emailInput.style.borderColor = "#FF6155";
        emailInput.style.backgroundColor = "#ff605526";
    }
    if (isValidEmail) {
        // Apply valid styles
        console.log("Email is valid");
        errorMessage.style.display = "none"; // Hide error message

        // Replace the card with success message modal
        body.innerHTML = `
            <article class="modal">
			 	<div class="modal-content">
					<img src="./assets/images/icon-success.svg" alt="Success icon">
					<h1>Thanks for subscribing!</h1>
					<p>A confirmation email has been sent to <strong class="email">${emailValue}</strong>. Please open it and click the button inside to confirm your subscription.</p>
				</div>
				<button type="submit" class="Dismiss-btn">
						Dismiss message
					</button>
            </article>
        `;
		// Add functionality to the dismiss button
        const dismissButton = document.querySelector(".Dismiss-btn");
        dismissButton.onclick = function () {
            // Reload the page or redirect to the initial view
            location.reload();
        };
    }
};
