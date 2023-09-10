const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const clockContainer = document.querySelector('.clock_container');
const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');
const setRotation = (element, rotation) => {
    element.style.transform = `rotate(${rotation}deg)`;
};
const renderHours = () => {
    hours.forEach((hour) => {
        const span = document.createElement('span');
        span.classList.add('number');
        const rotation = `${(hour) * 30}deg`;
        span.style.transform = `rotate(${rotation})`;
        span.textContent = hour.toString();
        clockContainer.appendChild(span);
    })
};
const setupClock = () => {
    const date = new Date();
    const hour_rotation = date.getHours() * 30;
    const second_rotation  = date.getSeconds() * 6;
    const minute_rotation = date.getMinutes() * 6;

    setRotation(hourHand, hour_rotation);
    setRotation(secondHand, second_rotation);
    setRotation(minuteHand, minute_rotation)

}

window.addEventListener('DOMContentLoaded', () => {
    renderHours();
    setupClock();
    setInterval(() => {
        setupClock();
    }, 1000)
});