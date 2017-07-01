var get_selection = function(data, col) {
    var uniques = [];
    for (var i = 0; i < data.length; i++) {
        var element = data[i][col];
        if (uniques.indexOf(element) == -1) {
            uniques.push(element);
        }
    }
    return uniques;
}