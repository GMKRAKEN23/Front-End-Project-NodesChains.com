// function who create a timer 
function getChrono() {
    setInterval(() => {
        // Selecting HTML elements to display the countdown
        let days = document.getElementById('days');
        let hours = document.getElementById('hours');
        let minutes = document.getElementById('minutes');
        let seconds = document.getElementById('secondes');

        // Getting the current date in milliseconds
        let dateNow = new Date().getTime();
        // Getting the future date when the countdown should end in milliseconds
        let dateFuture = new Date('07-10-2024').getTime();

        // Variable to store the subtraction of dateNow from dateFuture
        let count = dateFuture - dateNow;

        // Calculating the number of remaining day
        const day = Math.floor(count / (1000 * 60 * 60 * 24));
        // Calculating the number of remaining hours 
        const hour = Math.floor(count % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        // Calculating the number of remaining minute
        const minute = Math.floor(count % (1000 * 60 * 60) / (1000 * 60));
        // Calculating the number of remaining second 
        const second = Math.floor(count % (1000 * 60) / 1000);

        // inject day, hour, minute and second in the balise span html
        days.innerHTML = `${day}j`;
        hours.innerHTML = `${hour}h`;
        minutes.innerHTML = `${minute}m`;
        seconds.innerHTML = `${second}s`;

    }, 1000); // flow every 1 second (1second = 1000 milisecond)
}

// export function getChrono
export {getChrono};