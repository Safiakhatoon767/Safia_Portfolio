let box = document.querySelector('#div_box')


function add_paragraph() {
    let para = document.createElement('p')

    para.textContent = "There are no secrets to success. It is the result of preparation, hard work, and learning from failure."

    box.appendChild(para)

    // para.style.color = 'yellow'
    // para.style.fontFamily = 'cursive'
    para.classList.add('my_style')

}

add_paragraph()