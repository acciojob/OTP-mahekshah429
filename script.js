const inputs = document.querySelectorAll('.code');

inputs[0].focus();

inputs.forEach((input, idx) => {
  input.addEventListener('input', () => {
    const val = input.value;

    if (val) {
      // Only allow numbers
      if (!/^\d$/.test(val)) {
        input.value = '';
        return;
      }

      if (idx < inputs.length - 1) {
        inputs[idx + 1].focus();
      }
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace') {
      if (input.value === '') {
        if (idx > 0) {
          inputs[idx - 1].focus();
        }
      } else {
        input.value = '';
      }
    } else if (e.key >= 0 && e.key <= 9) {
      input.value = ''; // So user can overwrite digit easily
    }
  });
});
