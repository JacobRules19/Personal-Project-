function toggleTable() {
    let table = document.querySelector("table");
    let button = document.getElementById("toggleBtn");

    // Check if the table is currently hidden
    if (table.style.display === "none" || table.style.display === "") {
        table.style.display = "table"; // Reveal the table
        button.textContent = "Hide Table"; // Update button text
    } else {
        table.style.display = "none"; // Hide the table
        button.textContent = "Show Table"; // Reset button text
    }
};

