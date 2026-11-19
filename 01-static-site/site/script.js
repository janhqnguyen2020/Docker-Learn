// select HTML elements

const checkboxes = document.querySelectorAll(".task");

const progressFill = document.querySelector("#progress-fill");

const progressText = document.querySelector("#progress-text");

const completionMessage = document.querySelector("#completion-message");

const totalTasks = checkboxes.length;

//update progress
function updateProgress() {
    //count completed tasks
    const completedTasks = document.querySelectorAll(".task:checked").length;

    //calc percentage
    const percentage = (completedTasks / totalTasks) * 100.0;

    //update progress bar
    progressFill.style.width = `${percentage}%`;

    //update percentage text
    progressText.textContent = `${Math.round(percentage)}%`;

    //update completed task styling
    checkboxes.forEach((checkbox) => {

        const listItem = checkbox.closest(".checklist-item");

        if (checkbox.checked) {
            listItem.classList.add("completed");
        } else {
            listItem.classList.remove("completed");
        }
    });

    //update completion message
    if (completedTasks === totalTasks) {
        completionMessage.textContent = "You did it! You're officially on your Docker Jounrey! 🚀";
    } else {
        completionMessage.textContent = "Every expert starts somewhere. Let's do this!";
    }
}

// event listeners
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", updateProgress);
});

// initialize
updateProgress();