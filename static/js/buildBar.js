var buildBarChart = function(data){
        // var data = importData();
        var mutationCount = {};
        for (var m = 0; m < data.length; m++) {
            var element = data[m]['mutation'];
            mutationCount[element] = 0;
        }

        for (var m = 0; m < data.length; m++) {
            var element = data[m]['mutation'];
            mutationCount[element] += 1;
        }

        var counts = Object.values(mutationCount);
        var countsKeys = Object.keys(mutationCount);

        var drawbarChart = function() {
            var div = document.getElementById("barChart");
            clearchildren(div);

            var height = 0,
                width = 200,
                xpos = 50,
                dotsperrow = 10;
            var bars = d3.select("#barChart")
                            .append("svg")
                            .attr("width", "100%")
                            .attr('height', 240);
            bars.selectAll("rect")
                    .data(counts)
                    .enter()
                    .append("rect")
                    .attr("x", function(d, i) {
                        return 0;
                    })
                    .attr("y", function(d, i) {
                        xpos += 10;
                        return xpos;
                    })
                    .attr("height", function(d, i) {
                        return 10;
                    })
                    .attr("width", function(d, i) {
                        return d * 10;
                    })
                    .attr("fill", function(d, i) {
                        return "rgba(0,200,0,1)";
                    })
                    .append("title")
                    .text(function(d, i) {
                        return countsKeys[i] + ": " + d;
                    });
        }
        drawbarChart();
    }