
//DOM elements ko pakdo (input, button, task list)
let input = document.querySelector('#taskInput')
let button = document.querySelector('#addBtn');
let taskList = document.querySelector('#taskList'); // ul list 


//Add button pe event listener lagae
button.addEventListener('click', () => {

    //Input ka value lit
    let taskText = input.value;


    //Agar input blank ho toh alert do ya return kar jao
    if (taskText.trim() === '') {
        alert('Please write something here..');
        return;
    }

    // Ek new <li> element banao
    let li = document.createElement('li');

    //Usme task text daalo + ek ❌ delete button banao
    li.textContent = taskText;

    // Delete button pe click hone pe us <li> ko remove kiye
    let btn = document.createElement('button');
    btn.textContent = "❌";
    btn.classList.add("delete-btn");

    btn.addEventListener('click', () => {
        li.remove();
    });

    li.appendChild(btn);
    // <li> ko taskList mein append kiye
    taskList.appendChild(li);

    //Input box ko clear kar diye
    input.value = '';
});
