function getRandomColor(alpha) {
  var color = "rgba(";
  for (var i = 0; i < 3; i++){
    color += Math.floor(Math.random() * 255) + ', ';
  }
  color += alpha + ')';
  return color
}

const GenerateRandomColors = () => {
  var randomColors = [];
  for (var i = 0; i < 100; i++) {
    randomColors.push(getRandomColor(.6));
  }
  return randomColors;
};

const GenerateRandomData = () => {
  var randomData = [];
  for (var i = 0; i < 12; i++){
    randomData.push((Math.random() * 100).toPrecision(5) * 1000000);
  }
  return randomData;
};

console.log(GenerateRandomData())

const DrawChart = () => {
  var ctx = document.getElementById("income-chart");
  var myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [ "Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12",],
      datasets: [
        {
          label: "Doanh thu",
          data: GenerateRandomData(),
          backgroundColor: GenerateRandomColors(),
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });
};

GenerateRandomColors();
DrawChart();
