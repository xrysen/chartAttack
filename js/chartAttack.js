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
    },

    setTitle: function(text) {
      this.title = text;
    },

    setBarColour: function(colour) {
      this.barColour = colour;
    },

    setWidth: function(barWidth) {
      this.width = barWidth;
    },

    setHeight: function(barHeight) {
      this.height = barHeight;
    },

    setTitleFontSize = function(size) {
      this.titleFontSize = size;
    }.

    setTitleFontColour = function(colour) {
      this.titleFontColour = colour;
    }

    drawBarChart: function(data, options, element) {

    }
};


