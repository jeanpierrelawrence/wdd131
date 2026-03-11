const year = document.getElementById("currentyear");

const today = new Date();
year.textContent = today.getFullYear()

document.getElementById("lastModified").textContent = document.lastModified;

let temp = 1;
let wind = 15;

const windChillEl = document.querySelector(".weather ul li:last-child");

function calculateWindSpeed(temperature, speed) {
    return 13.12 + 0.6215 * temperature - 11.37*speed**0.16 + 0.3965*temperature*speed**0.16
}

if (temp <= 10 && wind > 4.8) {
    const windSpeed = calculateWindSpeed(temp, wind);

    windChillEl.innerHTML = `<strong>Wind Chill:</strong> ${Math.round(windSpeed)} °C`;
} else {
    windChillEl.innerHTML = `<strong>Wind Chill:</strong> N/A`;
}

