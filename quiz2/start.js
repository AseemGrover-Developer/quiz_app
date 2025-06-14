// start.js

// Select all difficulty buttons
document.querySelectorAll(".start-btn").forEach(button => {
  button.addEventListener("click", () => {
    const subject = button.dataset.subject;
    const difficulty = button.dataset.difficulty;

    // Store in localStorage
    localStorage.setItem("selectedSubject", subject);
    localStorage.setItem("selectedDifficulty", difficulty);

    // Redirect to subject quiz page
    window.location.href = `pages/${subject}.html`;
  });
});
