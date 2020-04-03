const CountdownTimer = function ({
    selector,
    targetDate
}) {
    const refs = {
        days: document.querySelector(`${selector} [data-value="days"]`),
        hours: document.querySelector(`${selector} [data-value="hours"]`),
        mins: document.querySelector(`${selector} [data-value="mins"]`),
        secs: document.querySelector(`${selector} [data-value="secs"]`)
    };

    setInterval(() => {
        const time = targetDate - new Date();

        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        refs.days.textContent = days;

        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        refs.hours.textContent = hours;

        const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        refs.mins.textContent = mins;

        const secs = Math.floor((time % (1000 * 60)) / 1000);
        refs.secs.textContent = secs;
    }, 1000);
};

new CountdownTimer({
    selector: "#timer-1",
    targetDate: new Date("October 13, 2020")
});