var submitRequest = function(){
    var xhttp = new  XMLHttpRequest();

    var request = document.getElementById("requestString").value
    // xhttp.open("GET", "https://dcc.icgc.org/api/v1/projects/GBM-US/mutations?field=id,mutation,type,chromosome,start,end&size=100&order=desc", true);
    alert("Fetching");
    xhttp.open("GET", request, true);
    xhttp.send();
    return xhttp;
}