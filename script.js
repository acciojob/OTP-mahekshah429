const inputs = document.querySelectorAll(".code");

inputs[0].focus(); // Focus first input on page load

inputs.forEach((input, index) => {
  input.addEventListener("keydown", (e) => {
    if (e.key >= 0 && e.key <= 9) {
      input.value = ""; // Clear before entering new value
      setTimeout(() => {
        if (index < inputs.length - 1) {
          inputs[index + 1].focus();
        }
      }, 10);
    } else if (e.key === "Backspace") {
      input.value = "";
      setTimeout(() => {
        if (index > 0) {
          inputs[index - 1].focus();
        }
      }, 10);
    }
  });

  input.addEventListener("input", () => {
    // Prevent more than 1 character
    input.value = input.value.slice(0, 1);
  });
});
