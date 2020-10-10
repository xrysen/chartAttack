const chartAttack = {
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
      this.data.push(num);
    },

    addLabel: function(label) {
      this.xAxisLabel.push(label);
    }
};


