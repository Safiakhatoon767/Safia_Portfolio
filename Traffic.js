const signal = document.querySelectorAll('.signal');
let colors = ['green', 'red', 'red', 'red'];

function change_signal() {
    // Step 1: Sab light off
    document.querySelectorAll('.light').forEach(light => {
        light.classList.remove('active');
    });

    // Step 2: Har signal ka check
    signal.forEach((sig, idx) => {
        let color = colors[idx];
        let bulb = sig.querySelector(`.${color}`);
        bulb.classList.add('active');

        // Step 3: Yellow logic only for GREEN
        if (color === 'green') {
            // 4 sec baad yellow
            setTimeout(() => {
                sig.querySelector('.green').classList.remove('active');
                sig.querySelector('.yellow').classList.add('active');
            }, 4000);

            // 5.5 sec baad red
            setTimeout(() => {
                sig.querySelector('.yellow').classList.remove('active');
                sig.querySelector('.red').classList.add('active');
            }, 5500);
        }
    });

    // Step 4: Rotate karo
    colors.push(colors.shift());
}

// Start
change_signal();
setInterval(change_signal, 6000);
