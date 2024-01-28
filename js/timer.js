function getChrono() {
    setInterval(() => {

        let days = document.getElementById('days');
        let hours = document.getElementById('hours');
        let minutes = document.getElementById('minutes');
        let seconds = document.getElementById('secondes');

        let dateNow = new Date().getTime();
        let dateFuture = new Date('02-10-2024').getTime();

        let count = dateFuture - dateNow;

        const day = Math.floor(count / (1000 * 60 * 60 * 24));
        const hour = Math.floor(count % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        const minute = Math.floor(count % (1000 * 60 * 60) / (1000 * 60));
        const second = Math.floor(count % (1000 * 60) / 1000);

        days.innerHTML = `${day}j`;
        hours.innerHTML = `${hour}h`;
        minutes.innerHTML = `${minute}m`;
        seconds.innerHTML = `${second}s`;

    }, 1000);
}

export {getChrono};