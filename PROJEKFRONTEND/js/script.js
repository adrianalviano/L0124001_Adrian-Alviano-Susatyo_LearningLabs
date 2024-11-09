document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("feedbackForm");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Thank you for your feedback!");
            form.reset();
        });
    }
});