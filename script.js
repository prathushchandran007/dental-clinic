// ==========================================
// Dentara Dental Clinic
// script.js
// ==========================================

// Appointment Form

const form = document.querySelector(".appointment form");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const name = form.querySelector('input[type="text"]').value;

    alert(
        "Thank you " +
        name +
        "! Your appointment request has been received.\n\nOur team will contact you shortly."
    );

    form.reset();

});