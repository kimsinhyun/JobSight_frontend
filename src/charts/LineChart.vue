<template>
<div>
    <canvas id="lineChart" width="1000" height="300"></canvas>
</div>
</template>
   
  <script>
  import Chart from 'chart.js/auto'
  document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById('lineChart');
  
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          backgroundColor: '#f87979',
          fill: true,
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 2
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        responsive: true,
        maintainAspectRatio: false
      }
    });
})
    export default{
        name: "TestVue"
    }

  </script>