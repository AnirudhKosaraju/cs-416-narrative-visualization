// Function to load and parse CSV file using D3.js
function loadCSV(file) {
    d3.csv(file).then(data => {
        // Parse the date and convert numerical values
        data.forEach(d => {
            d.Date = d3.timeParse("%Y-%m-%d")(d.Date);
            d.Open = +d.Open;
            d.High = +d.High;
            d.Low = +d.Low;
            d.Close = +d.Close;
            d.AdjClose = +d.AdjClose;
            d.Volume = +d.Volume;
        });

        // Now you have the data parsed and ready for use
        console.log(data);
        
        // Create the line chart with the parsed data
        createLineChart(data);
        
    }).catch(error => {
        console.error('Error loading CSV file:', error);
    });
}

// Function to create a line chart using the parsed data
function createLineChart(data) {
    // Set up the dimensions and margins of the chart
    const margin = { top: 20, right: 30, bottom: 30, left: 40 },
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    // Append the SVG object to the #chart div
    const svg = d3.select("#chart").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    // Set up the x scale
    const x = d3.scaleTime()
        .domain(d3.extent(data, d => d.Date))
        .range([0, width]);

    // Set up the y scale
    const y = d3.scaleLinear()
        .domain([d3.min(data, d => d.Close), d3.max(data, d => d.Close)])
        .range([height, 0]);

    // Add the x axis
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    // Add the y axis
    svg.append("g")
        .call(d3.axisLeft(y));

    // Add the line
    svg.append("path")
        .datum(data)
        .attr("class", "line")
        .attr("d", d3.line()
            .x(d => x(d.Date))
            .y(d => y(d.Close)));
}

// Load the SPX.csv file from the server
loadCSV('data/SPX.csv');