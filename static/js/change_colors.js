var changeColor = function(data) {
    var currentMutation = document.getElementById("mutationSelection").value;
    var currentChromosome = document.getElementById("chromosomeSelection").value;

    var mutationCount = {};
        for (var m = 0; m < data.length; m++) {
            var element = data[m]['mutation'];
            if (element in mutationCount) {
                mutationCount[element] += 1;
            }
            else {
                mutationCount[element] = 0;
            }
        }

    var counts = Object.values(mutationCount);
    var countsKeys = Object.keys(mutationCount);

    var barChart = d3.select("#barChart");
    barChart.selectAll("rect")
            .transition()
            .duration(2000)
            .attr("width", function(d, i) {
                return d * 10;
            })
            .attr("fill", function(d, i) {
                if (currentMutation === '0') {
                    return "rgba(0,150,0,1)";
                }
                else {
                return "rgba("
                    + 0 + ","
                    + 150 + ","
                    + 0 + ","
                    + (countsKeys[i]===currentMutation? 1 : .2)
                    + ")"
                }
            });

    var chromoSVG = d3.select("#chromosomeChart")
    chromoSVG.selectAll("rect")
            .transition()
            .duration(2000)
            .attr("fill", function(d, i) {
                if (currentMutation === '0') {
                    if (currentChromosome === '0') {
                        return "rgba(0,150,150,1)";
                    }
                    return "rgba(0,150,0,1)";
                }
                else{
                    return "rgba("
                    + 0 + ","
                    + (data[i]['mutation']==currentMutation? 
                        150 : 50)
                    + ","
                    + (data[i]['chromosome']==currentChromosome?
                        150 : 0)
                    + ","
                    + ((data[i]['mutation']==currentMutation || data[i]['chromosome']==currentChromosome)?
                        1 : .2 )
                    + ")"
                }
            })
            .attr("width", function(d, i) {
                var size = 5;
                if (data[i]['mutation']==currentMutation) {
                    size += 5;
                }
                if (data[i]['chromosome']==currentChromosome) {
                    size += 5;
                }
            return size;
            })
            .attr("height", function(d, i) {
                var size = 5;
                if (data[i]['mutation']==currentMutation) {
                    size += 5;
                }
                if (data[i]['chromosome']==currentChromosome) {
                    size += 5;
                }
            return size;
            });
}