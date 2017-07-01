var buildChromosomeChart = function(data){        

    var drawChromosomes = function() {
        var div = document.getElementById("chromosomeChart");
        clearchildren(div);
        var xpos = 0,
            dotsperrow = 25,
            increment = 20,
            height = 0;
        var chromoSVG = d3.select("#chromosomeChart")
                .append("svg")
                .attr("width", "100%")
                .attr('height', 360);
        chromoSVG.selectAll("rect")
                .data(data)
                .enter()
                .append("rect")
                .attr("x", function(d, i) {
                    if (i % 20 === 0){
                        xpos = 0;
                    }
                    else {
                        xpos += increment;
                    }
                    return 15 + xpos;
                })
                .attr("y", function(d, i) {
                    if (i % 20 === 0) {
                        height += 25;
                    }
                    return height;
                })
                .attr("width", function(d) {
                    return 10;
                })
                .attr("height", function(d) {
                    return 5;
                })
                .attr("fill", function(d, i) {
                    return "rgba(0,200,0,1)";
                })
                .append("title")
                .text(function(d, i) {
                    return data[i]['mutation'];
                });
    }
drawChromosomes();
}