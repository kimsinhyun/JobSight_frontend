import { defineComponent, h } from 'vue'

import { Line } from 'vue-chartjs'

import {
      Chart as ChartJS,
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend,
      Filler,
    } from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

export default defineComponent({
    name: "LineChart",
    components:{
      Line,
    },
    props: {
      chartId: {
        type: String,
        default: 'line-chart'
      },
      width: {
        type: Number,
        default: 1000,
      },
      height: {
        type: Number,
        default: 200,
      },
      cssClasses: {
        default: '',
        type: String
      },
      styles: {
        type: Object,
        default: () => {}
      },
      plugins: {
        type: Array, 
        default: () => []
      }
    },
    setup(props) {
      const chartData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            fill: true,
            data: [30, 39, 10, 40, 39, 80, 40],
            options: {
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero: true
                      }
                  }]
              }
          }
          }
        ]
      }
      const ChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: "true",
              }
          }]
        }
      }
      return () => 
          h(Line, {
              chartData,
              ChartOptions,
              chartId: props.chartId,
              width: props.width,
              height: props.height,
              cssClasses: props.cssClasses,
              styles: props.styles,
              plugins: props.plugins
          })
    }
})