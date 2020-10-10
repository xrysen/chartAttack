function chartAttack() {
  const self = {
    data: [],
    xAxisLabel: [],
    yAxis: [],
    width: 0,
    height: 0,
    barColour: "red",
    title: "Your Chart",
    titleFontSize: "16px",
    titleFontColour: "black",

    addData: function(num) {
      self.data.push(num);
    }
  };
}
