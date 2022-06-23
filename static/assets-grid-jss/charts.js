const canvas = document.querySelector("#apmdGraph");
const myChart = new Chart(canvas, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "APMD",
        data: [],
        borderColor: "rgb(0,0,0)",
        tension: 0.4,
        borderWidth: 2,
      },
    ],
  },
  options: {
    scales: {
      y: {
        ticks: {
          font: {
            size: 10,
            color: "#000",
          },
        },
      },
      x: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

const canvasVolume = document.querySelector("#volumeGraph");
const volumeChart = new Chart(canvasVolume, {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "Volume",
        data: [],
        borderColor: "rgb(0,0,0)",
        tension: 0.4,
        borderWidth: 2,
      },
    ],
  },
  options: {
    scales: {
      y: {
        ticks: {
          font: {
            size: 10,
            color: "#000",
          },
        },
      },
      x: {
        display: false,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  },
});

export function renderGraph(data) {
  const dateToShow = data.sort((a, b) => (a.date > b.date ? 1 : -1));
  myChart.data.datasets[0].data = dateToShow.map((item) => item.apmd);
  myChart.data.labels = dateToShow.map((item) => item.date);
  volumeChart.data.datasets[0].data = dateToShow.map((item) => item.apmd);
  volumeChart.data.labels = dateToShow.map((item) => item.date);
  myChart.update();
  volumeChart.update();
}
export function renderDiscoveryGraph(data) {
  discoveryChart.data.datasets[0].data = data;
  discoveryChart.update();
}
