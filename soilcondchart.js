// script.js
const ctx = document.getElementById('myChart');

const data = {
  labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'Soil Moisture Levels',
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: 'rgba(174, 200, 131, 1)',
    borderWidth: 1
  },
  {
      label: 'Temperature Variations',
      data: [45, 70, 62, 80, 53, 68, 77],
      backgroundColor: 'rgba(255, 201, 148, 1)',
      borderWidth: 1
    },
    {
        label: 'Rainfall Accumulation',
        data: [88, 42, 73, 65, 54, 90, 58],
        backgroundColor: 'rgba(119, 169, 244, 1)',
        borderWidth: 1
      }
  ]
};

new Chart(ctx, {
type: 'bar',
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      },
    }
  },
});