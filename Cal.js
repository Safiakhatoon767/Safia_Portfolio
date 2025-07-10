// Elements Select Kiye
let input_box = document.querySelector('.display');
let all_btn = document.querySelectorAll('button');

// Loop Lagao Sab Buttons Par
all_btn.forEach(button => {
    button.addEventListener('click', () => {

        let btn_txt = button.innerText;

        if (btn_txt === 'AC') {
            input_box.value = ''; // Display clear
        } else if (btn_txt === '=') {
            let expression = input_box.value;
            let result = eval(expression);
            input_box.value = result; // Show result
        } else {
            input_box.value = input_box.value + btn_txt; // Add pressed button to display
        }
    });
});
