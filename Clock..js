let clock_box = document.querySelector('#clock')
let date_box = document.querySelector('#date')


function update_Time() {
    const date = new Date();
    let india_time = date.toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    })

    clock_box.textContent = india_time
}

function update_date() {
    const date1 = new Date();
    let india_date = date1.toLocaleDateString('en-IN', {
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    })

    date_box.textContent = india_date
}

setInterval(update_Time, 1000)
update_Time()
update_date()
