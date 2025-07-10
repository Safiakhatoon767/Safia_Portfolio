// Step 1: Display aur Button ko pakad rhe (via id)

let heading = document.querySelector('#timer-display')

let start_btn = document.querySelector('#start-btn')
let reset_btn = document.querySelector('#reset-btn')
let edit_btn = document.querySelector('#edit-btn')

let hour_input_box = document.querySelector('#hour-input')
let minute_input_box = document.querySelector('#minute-input')
let second_input_box = document.querySelector('#second-input')


let set_timer_btn = document.querySelector('#set-btn')
let done_btn = document.querySelector('#done-btn')

let edit_section = document.querySelector('.edit-section')

//Step 2: Teen variables bana le rhe
// hours, minutes, seconds

// timer naam ka ek variable bana le rhe jo setInterval ko handle karega

// isRunning naam ka variable bana le rhe (true/false ke liye)


let hours = 0
let minutes = 0
let seconds = 0
let timer = null
isRunning = false

// Step 3: Start Button ka kaam
// Check kar: agar timer already chal raha hai to kuch mat kar

// Nahi chal raha to setInterval() se har 1 sec baad:

// seconds++ kar

// agar seconds 60 ho jaye to seconds = 0 aur minutes++

// agar minutes 60 ho jaye to minutes = 0 aur hours++

// Display update karte rehna

// String(value).padStart(totalLength, 'characterToAdd')


start_btn.addEventListener('click', () => {

    //running hai to mat chalao
    if (!isRunning) {
        isRunning = true;

        timer = setInterval(() => {

            seconds++
            if (seconds == 60) {
                seconds = 0
                minutes++
            } else if (minutes == 60) {
                minutes = 0
                hours++
            }


            heading.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
        }, 1000);
    }

})




//Reset Button

reset_btn.addEventListener('click', () => {
    clearInterval(timer)
    hours = 0
    minutes = 0
    seconds = 0
    isRunning = false //Start button ready again
    heading.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
})

//Edit Button ka kaam


edit_btn.addEventListener('click', () => {
    edit_section.classList.remove('hidden');
})



set_timer_btn.addEventListener('click', () => {
    hours = parseInt(document.querySelector('#hour-input').value) || 0
    minutes = parseInt(document.querySelector('#minute-input').value) || 0
    seconds = parseInt(document.querySelector('#second-input').value) || 0
    heading.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`

})

done_btn.addEventListener('click', () => {
    edit_section.classList.add('hidden')
})

