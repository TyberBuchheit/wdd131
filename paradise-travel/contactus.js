
function toggleContactDetails(e) {
    // get a reference to the form. We can access all the named form inputs through the form element
    const theForm = document.querySelector("#contactForm");
    // we will also need the creditCardContainer and paypalUsernameContainer
    const emailContainer = document.getElementById("emailAddressContainer");
    const phoneContainer = document.getElementById("phoneNumberContainer");
    // hide all containers by adding the '.hide' class to each of them
    emailContainer.classList.add("hide");
    phoneContainer.classList.add("hide");
    // disable required for all fields...if we hide a required field the browser will throw an error when we try to submit
    theForm.emailAddress.required = false;
    theForm.phoneNumber.required = false;
    // show the container based on the selected payment method, and add the required attribute back
    if (theForm.contactMethod.value === "email") {
        emailContainer.classList.remove("hide");
        theForm.emailAddress.required = true;
    } else if (theForm.contactMethod.value === "phone") {
        phoneContainer.classList.remove("hide");
        theForm.phoneNumber.required = true;
    } else if (theForm.contactMethod.value === "both") {
        emailContainer.classList.remove("hide");
        theForm.emailAddress.required = true;
        phoneContainer.classList.remove("hide");
        theForm.phoneNumber.required = true;
    }
}

// helper function to display our errors
function showErrors(errors) {
    const errorE1 = document.querySelector(".errors");
    const html = errors.map((error) => `<p>${error}</p>`);
    errorE1.innerHTML = html.join("");
}
// attach a change event handler to the paymentMethod input
document.querySelector("#contactMethod").addEventListener("change", toggleContactDetails);
// attach a submit event handler to the form
// document.querySelector("#contactForm").addEventListener("submit", validateForm);