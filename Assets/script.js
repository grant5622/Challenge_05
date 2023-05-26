// Save button click event handler
function handleSaveClick(event) {
    // Get the parent row element
    const row = event.target.closest(".time-block");
  
    // Get the hour value from the data-hour attribute of the textarea
    const hour = row.querySelector(".description").getAttribute("data-hour");
  
    // Get the text value from the textarea
    const note = row.querySelector(".description").value;
  
    // Save the note to localStorage
    localStorage.setItem(`note-${hour}`, note);
  }
  
  // Load the saved notes from localStorage
  function loadNotes() {
    for (let i = 9; i <= 17; i++) {
      const note = localStorage.getItem(`note-${i}`);
      if (note) {
        const textarea = document.getElementById(`div${i}`);
        textarea.value = note;
      }
    }
  }
  
  // Clear button click event handler
  function handleClearClick() {
    for (let i = 9; i <= 17; i++) {
      localStorage.removeItem(`note-${i}`);
      const textarea = document.getElementById(`div${i}`);
      textarea.value = "";
    }
  }
  
  // Attach event listeners to save buttons
  const saveButtons = document.querySelectorAll(".saveBtn");
  saveButtons.forEach(function (button) {
    button.addEventListener("click", handleSaveClick);
  });
  
  // Attach event listener to clear button
  const clearButton = document.getElementById("clearBtn");
  clearButton.addEventListener("click", handleClearClick);
  
  // Load the saved notes when the page loads
  loadNotes();
  