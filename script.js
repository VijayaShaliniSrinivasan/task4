// Get references to HTML elements
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Array of unique colors for tasks
const taskColors = [
    "task-color-1",
    "task-color-2",
    "task-color-3",
    "task-color-4",
    "task-color-5",
];

let colorIndex = 0; // Initialize color index

// Function to add a new task with a unique color and checklist
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const listItem = document.createElement("li");

        // Assign a unique color class to the task
        listItem.innerHTML = `
            <div class="task-color ${taskColors[colorIndex]}"></div>
            <span>${taskText}</span>
            <ul class="checklist">
                <li class="checklist-item">
                    <input type="checkbox" id="checklist-item-${colorIndex}-1">
                    <label for="checklist-item-${colorIndex}-1">Completed</label>
                </li>
                <li class="checklist-item">
                    <input type="checkbox" id="checklist-item-${colorIndex}-2">
                    <label for="checklist-item-${colorIndex}-2">Yet To</label>
                </li>
                <li class="checklist-item">
                    <input type="checkbox" id="checklist-item-${colorIndex}-2">
                    <label for="checklist-item-${colorIndex}-2">Half Way Through</label>
                </li>
            </ul>
            <button class="delete-button" onclick="removeTask(this)">Delete</button>
        `;

        // Increment color index and wrap around if needed
        colorIndex = (colorIndex + 1) % taskColors.length;

        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = "";
    }
}

// Function to remove a task
function removeTask(button) {
    const listItem = button.parentNode;
    taskList.removeChild(listItem);
}
