//Prorepublica bill search for coronavirus
$(function () {
    $("button").on("click", function (event) {

        var billSearch = $("#billSearch").val()
        console.log(billSearch)
    });
    // Send the PUT request.
    $.ajax({
        url: "https://api.propublica.org/congress/v1/bills/search.json?query=" + billSearch,
        method: "GET",
        dataType: "json",
        headers: { 'X-API-Key': 'D4baiyH8PfzjJXFGBVMa5eWkcf6CtQwOIexmhBkm' }
    }).then(function (data) {
        console.log(data)
    }).catch(function (err) {
        throw err
    })
});



