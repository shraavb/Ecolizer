function selectLandPlot(landPlot) {
    // Update the text of the dropdown button to the selected land plot
    document.getElementById('landPlotDropdown').innerText = landPlot;
    
    // Fetch data for the selected land plot (you can replace this with your AJAX request)
    fetchLandPlotData(landPlot);
}

function fetchLandPlotData(landPlot) {
    fetch(`http://localhost:8000/get_land_plot_data?land_plot=${landPlot}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Fetched data:', data);
        document.getElementById('result').innerText = JSON.stringify(data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}


function updateDashboard(data) {
    // Update the humidity content with the fetched humidity data
    var humidityElement = document.getElementById('humidityValue');
    humidityElement.textContent = data[0].Humidity + '%'; // Assuming Humidity is the property name in the fetched data

    // Update the temperature content with the fetched temperature data
    var temperatureElement = document.getElementById('temperatureValue');
    temperatureElement.textContent = data[0].Temperature + '°C'; // Assuming Temperature is the property name in the fetched data

    // Update the pH level content with the fetched pH level data
    var pHLevelElement = document.getElementById('pHLevelValue');
    pHLevelElement.textContent = data[0].pH + ''; // Assuming pH is the property name in the fetched data
    
    // Update the nutrient level content with the fetched nutrient level data
    var nutrientLevelElement = document.getElementById('nutrientLevelValue');
    nutrientLevelElement.textContent = 'N: ' + data[0].Nitrogen + ' ppm | P: ' + data[0].Phosphorus + ' ppm | K: ' + data[0].Potassium + ' ppm'; // Assuming Nitrogen, Phosphorus, and Potassium are the property names in the fetched data
}