let input = document.querySelector('#color_picker')
let button = document.querySelector('button')

button.addEventListener('click', () => {
    selected_color = input.value

    document.body.style.background = selected_color
})

