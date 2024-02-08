// Function to check if an element is in the viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to show the chart if the element is in the viewport
function showChartIfVisible() {
    let delayed = false;
    const chartContainer = document.getElementById('chart_crypto');

    if (isElementInViewport(chartContainer)) {
        new Chart(chartContainer, {
            type: 'pie',
            data: {
                labels: ['Bitcoin', 'Ethereum', 'Solana', 'Chainlink', 'Polygon', 'Stacks'],
                datasets: [{
                    label: '%',
                    data: [30, 30, 10, 10, 10, 10],
                    borderWidth: 1,
                    backgroundColor: [
                        '#00FEFB', '#0769f4', '#a852ff', '#ff00dd', '#fbfafa', '#0769f4'
                    ],
                    borderColor: '#fbfafa',
                }]
            },
            options: {
                plugins: {
                    legend :{
                        display: false,
                    },
                    colors: {
                        enabled: true
                    },
                    layout: {
                        padding: 15
                    },
                    labels: {
                        fontColor: '#fff',
                        position: 'outside',
                        textMargin: 7,
                    }
                },
                animation: {
                    onComplete: () => {
                        delayed = true;
                    },
                    delay: (context) => {
                        let delay = 0;
                        if (context.type === 'data' && context.mode === 'default' && !delayed) {
                            delay = context.dataIndex * 300 + context.datasetIndex * 100;
                        }
                        return delay;
                    },
                },
            }
        });

        Chart.defaults.color = '#fff';

        window.removeEventListener('scroll', showChartIfVisible);
    }
}

// Function to initialize chart behavior
function initialize() {
    window.addEventListener('scroll', showChartIfVisible);
    showChartIfVisible();
}

// Call the initialization function when the page is full loaded
window.onload = initialize;

// Export function isElementInViewport, showChartIfVisible, initialize 
export { isElementInViewport, showChartIfVisible, initialize };