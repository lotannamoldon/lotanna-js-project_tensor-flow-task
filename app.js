
//  Variable Arguments Multiplication

function multiplyAll(...args) {
    // If no arguments are passed, return 0. Otherwise, multiply them all.
    if (args.length === 0) return 0;
    return args.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
}

// Testing the function in the console
console.log("Multiplication Result (2 * 3 * 4 * 5):", multiplyAll(2, 3, 4, 5));

async function fetchAndPlotData() {
    try {
        // 1. Make the remote API call
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();

        // 2. Transform the data
        // tfjs-vis bar charts expect an array of objects with 'index' (x-axis) and 'value' (y-axis).
        // For this example, we'll plot the length of each user's full name against their username.
        const chartData = users.map(user => ({
            index: user.username,
            value: user.name.length
        }));

        // 3. Plot using Tensorflow.js visor
        // Define where the chart will render in the visor panel
        const surface = { 
            name: 'Name Length by Username', 
            tab: 'API Data Visualization' 
        };
        
        // Render the bar chart
        tfvis.render.barchart(surface, chartData, {
            xLabel: 'Usernames',
            yLabel: 'Length of Full Name',
        });

        console.log("Data successfully fetched and plotted!");

    } catch (error) {
        console.error("Error fetching or plotting data:", error);
    }
}

// Execute the function to fetch and plot when the script loads
fetchAndPlotData();