const form = document.getElementById("feedback-form");
const errorBox = document.getElementById("error-box");
const successMessage = document.getElementById("success-message");
const welcomeMessage = document.getElementById("welcome-message");
const nameInput = document.getElementById("reviewer-name");

const savedName = localStorage.getItem("reviewerName");
if (savedName){
    welcomeMessage.textContent =
        `Welcome back, ${savedName}! Ready to submit another wonderful review?`;
    nameInput.value = savedName
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("reviewer-name").value;
    const rating = document.getElementById("rating").value;
    const comments = document.getElementById("comments").value;

    console.log("Reviewer Name:", name);
    console.log("Rating:", rating);
    console.log("comments", comments);

    errorBox.innerHTML="";
        let errors = [];
    if (name===""){
        errors.push("Please provide your name.");
    }
    if (rating !=="5"){
        errors.push("Our company standards require a 5-star rating.");
    }
    if (!comments.toLowerCase().includes("wonderful")){
        errors.push("Comments must include the word 'wonderful'.");
    }

    if(errors.length>0){
        errorBox.innerHTML = errors.join("<br>");
        return;
    }
    localStorage.setItem("reviewerName", name);

    successMessage.textContent =
        `Thank you, ${name}! Your glowing review has been recorded.`;

    form.style.display = "name";
});